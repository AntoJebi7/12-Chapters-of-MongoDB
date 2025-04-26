import express from "express";
// use the connectToDatabase function from db.js here
import { connectToDatabase } from './db.js';
import User from './models/User.js';
connectToDatabase();


import bodyParser from "body-parser";
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url'; 
import path from 'path';
// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// to get input value as property values or body
app.use(bodyParser.urlencoded({ extended: true }));

// Set up handlebars
app.engine('hbs', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
    extname: '.hbs',      // 👈 tells it you're using .hbs files
    defaultLayout: false  // 👈 optional: disable layout if you're rendering main.hbs directly
  }));
  app.set('view engine', 'hbs');
  
app.set('views', path.join(__dirname, 'views'));


// read operation using mongoose
app.get('/', async (req, res) => {
    let users = await User.find({})
    let message = '';
    //edit operation
    let edit_id = '';
    let edit_user = '';

    if(req.query.edit_id){
        edit_id = req.query.edit_id;
        
        edit_user = await User.findOne({_id: edit_id});
        
    }
    // delete operation
    if(req.query.delete_id){
        const delete_id = req.query.delete_id;
        //await collection.deleteOne({ _id:new ObjectId(delete_id) });
        await User.deleteOne({ _id: delete_id });
        return res.redirect('/?status=3');
    }
    if (req.query.status === '1') {
        message = 'User added successfully';
    } else if (req.query.status === '2') {
        message = 'User details updated successfully';
    } else if (req.query.status === '3') {
        message = 'User deleted successfully';
    }
    
    res.render('main', {
        title: 'Home',
        msg: message,
        userData: users,
        edit_id: edit_id,
        edit_user: edit_user,
        editor_name: edit_user?.name || '',
        editor_age: edit_user?.age || ''
    });

});
// create operation using mongoose
app.post('/insertUser',async (req, res) => {
    
    let name = req.body.name;
    let age = req.body.age;
    let newUser = { name: name, age: age };

    const user = new User(newUser).save();
    return res.redirect('/?status=1');
    
})

// update operation via /editUser/{{edit_id}}
app.post('/editUser/:id',async (req, res) => {
    //let DB = await connectToDatabase();
    //const collection = DB.collection('users');
    let id = req.params.id;
    let name = req.body.name;
    let age = req.body.age;
    let newUser = { name: name, age: age };
   // await collection.updateOne({ _id: new ObjectId(id) }, ); // these methods always return promises , so use await
    await User.findOneAndUpdate({_id:id},{ $set: newUser });
    console.log(newUser);
    return res.redirect('/?status=2');
    
})



// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
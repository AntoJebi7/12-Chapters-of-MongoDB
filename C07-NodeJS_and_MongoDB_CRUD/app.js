
// use the connectToDatabase function from db.js here
import { connectToDatabase, ObjectId } from './db.js';


import express from "express";
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
    extname: '.hbs',      // 👈 tells it you're using .hbs files
    defaultLayout: false  // 👈 optional: disable layout if you're rendering main.hbs directly
  }));
  app.set('view engine', 'hbs');
  
app.set('views', path.join(__dirname, 'views'));


// read operation 
app.get('/', async (req, res) => {
    // use db here
    let DB = await connectToDatabase();
    const collection = DB.collection('users');  // it will create users collection in UserServer DB
    const cursor = collection.find({}); // it gives data as cursor object []
    let users = await cursor.toArray();
    let message = '';
    //edit operation
    let edit_id = '';
    let edit_user = '';

    if(req.query.edit_id){
        edit_id = req.query.edit_id;
        edit_user =await collection.findOne({ _id:new ObjectId(edit_id) })
        
    }
    // delete operation
    if(req.query.delete_id){
        const delete_id = req.query.delete_id;
        await collection.deleteOne({ _id:new ObjectId(delete_id) });
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
// create operation
app.post('/insertUser',async (req, res) => {
    let DB = await connectToDatabase();
    const collection = DB.collection('users');
    let name = req.body.name;
    let age = req.body.age;
    let newUser = { name: name, age: age };
    await collection.insertOne(newUser); // these methods always return promises , so use await
    res.redirect('/?status=1');
    console.log(newUser);
})

// update operation via /editUser/{{edit_id}}
app.post('/editUser/:id',async (req, res) => {
    let DB = await connectToDatabase();
    const collection = DB.collection('users');
    let id = req.params.id;
    let name = req.body.name;
    let age = req.body.age;
    let newUser = { name: name, age: age };
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: newUser }); // these methods always return promises , so use await
    res.redirect('/?status=2');
    console.log(newUser);
})



// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
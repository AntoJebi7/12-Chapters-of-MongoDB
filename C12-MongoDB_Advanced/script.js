const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/newguy', 
).then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("not connected");
}) 

// const user = new User({
//     name:"Anto",
//     age:22
// });

// user.save().then(()=>{
//     console.log("User saved");
// }).catch((e)=>{
//     console.log(e);
// });

// async function run(){
//     await user.save();
//     console.log("User saved");
// }


async function run(){
    // use save instead of update for mongoose
    try{
    // const newuser = await User.create(
    //     {
    //     name:"Anto",
    //     age:22,
    //     mail:"G2Uf2@example.com",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //     sports: ["Cricket", "Football"],
    //     address: {
    //         city: "Kolkata",
    //         state: "West Bengal",
    //         country: "India"
    //     }
    // }
    // );
    // console.log(newuser);

    // findings
    // const user = await User.findById('680d0a54ff7ee937e5857295');
    // const user = await User.find({name:"Anto"});
    // const user = await User.findOne({name:"Anto"});
    // const user = await User.exists({name:"Anto"});

    // populate
    // const user = (await User.where('id').equals('680cf1fdc5e84afd67b1bea4').populate('hobby'));
    // console.log(user);

    const user = await User.findOne({name:"Anto"});
    // schema methods and static methods
    user.sayHi();
    const user2 = await User.findByName('Anto');
    console.log(user2);
    // query function , find method should be called before using query method
    const user3 = await User.find().byName('Anto');
    console.log(user3);
    // schema virtuals
    const user4 = await User.findOne({name:"Anto"});
    console.log(user4.greet);

    // schema middlewares adds mr to the prefix of name
    const user5 = await User.findById('680cf1e992d4a4671289fc30');
    user5.name = "Anto";
    user5.age = 22;
    await user5.save();
    console.log(user5);

    }catch(e){
        console.log(e.errors);
    }
}
run();


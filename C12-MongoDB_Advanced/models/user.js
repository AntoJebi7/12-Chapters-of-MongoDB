const mongoose = require('mongoose');



const addressSchema = new mongoose.Schema({
    city: String,
    state: String,
    country: String

});
const userSchema = new mongoose.Schema({
    name :String,
    age:{
        type: Number,
        required: true,
        min: 18,
        max: 59,
        // user defined validation
        validate: {
            validator: valueofage => valueofage % 2 == 0,
            message : props => `${props.value} is not eligible`
        }
    },
    // schema validation for mail - inbuilt
    mail: {
        type: String,
        required: true,
        lowercase: true,
        default: 'default@example.com'
    },
    createdAt: Date,
    updatedAt: Date,
    hobby: {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    sports: [String],
    address : addressSchema
});
// schema methods
userSchema.methods.sayHi = function(){
    console.log(`Hi ${this.name}`);
}
// static method
userSchema.statics.findByName = function(name){
    return this.where({name: name});
}
// query function
userSchema.query.byName = function(name){
    return this.where({name: name});
}
// schema virtuals - new virtual field not visible in actual document
userSchema.virtual('greet').get(function(){
    return `${this.name} is ${this.age} years old`;
})

// schema middlewares - pre(before save), post(after save)
userSchema.pre('save', function(next){
    this.name = `Mr. ${this.name}`;
    next(); // job over and move to next middleware
})
// post
userSchema.post('save', function(doc,next){
    // this cant use after saved
    // so use that saved doc(document) from the function
    doc.name = `${doc.name} , CSE Student`
    next();
})




const User = mongoose.model('User', userSchema);

module.exports = User;


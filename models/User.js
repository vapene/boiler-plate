const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,
        unique:1
    },
    password: {
        type:String, 
        minlength: 5
    },
    lastname: {
        type:String, 
        maxlength: 50
    },
    role: {
        type:Number,
        default:0
    },
    image: String,
    token: {
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports= {User}





// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
// const saltRounds = 10 
// const jwt = require('jsonwebtoken')


// const userSchema = mongoose.Schema({
//     name:{
//         type: String,
//         maxlength: 50
//     },
//     email: {
//         type: String,
//         trim:true,
//         unique: 1
//     },
//     password: {
//         type: String
//     },
//     lastname: {
//         type: String,
//         maxlength:50
//     },
//     role:{
//         type: Number,
//         default: 0
//     },
//     image: String,
//     token :{
//         type: String
//     },
//     tokenExp:{
//         type: Number
//     }
// })


// userSchema.pre('save', function( next ){
//     // 비밀번호 암호화
//     var user = this;
//     if (!user.isModified('password')) return next();

//     bcrypt.genSalt(saltRounds, function(err, salt) {
//         if (err) return next(err);
//         bcrypt.hash(user.password, salt, function(err, hash) {
//         // returns hash
//             if (err) return next(err);
//             user.password = hash;
//             next();
//         });
//       });
// });

// userSchema.methods.comparePassword = function(plainPassword) {
//     return bcrypt.compare(plainPassword, this.password);
// };

// userSchema.methods.generateToken = function(cb) {
//     var user = this;
//     var token = jwt.sign(user._id.toHexString(), 'YOUR_SECRET_KEY');
//     user.token = token;
//     user.save(function(err, user) {
//         if (err) return cb(err);
//         cb(null, user);
//     });
// };

// const User = mongoose.model('User', userSchema)

// module.exports = { User }
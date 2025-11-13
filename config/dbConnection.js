 const mongoose = require('mongoose')


 module.exports.dbConnection = ()=>{
    mongoose.connect('mongodb://localhost:27017/demo')
    .then(() => console.log(' DB connected'))
    .catch(err => console.error(' DB connection error:', err));
 }
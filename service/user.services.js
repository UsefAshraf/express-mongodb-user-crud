const userModel = require("../models/user.model");

module.exports.addUser = async (req,res)=>{
    const {name,email,password} = req.body;
    await userModel.insertMany({name,email,password});
    res.send("User added");
}

module.exports.getUsers = async(req,res)=>{
    const users = await userModel.find({},{name:1,email:1,_id:0}).sort({name:1});
    const count = await userModel.countDocuments();
    res.json({users,count});
}

module.exports.updateUser =async(req,res)=>{
    await userModel.updateMany({name:"youssef"},{name:"youssef mohamed"});
    res.send("User updated");
}

module.exports.deleteUser = async(req,res)=>{
    await userModel.deleteOne({name:"youssef mohamed"});
    res.send("User deleted");
}
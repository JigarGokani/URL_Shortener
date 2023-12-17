const User = require("../models/users")
const {setUser,getUser} = require("../service/auth")


exports.signUp = async(req,res)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password
    })

    return res.redirect("/");
}

exports.login = async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email,password})
    if(!user){
        return res.render("login",{
            error:"Invalid email or password"
        })
    }

    const token = setUser(user);
    res.cookie("uid",token);

    return res.redirect("/");
}
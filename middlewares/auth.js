const {getUser} = require("../service/auth")

exports.authmiddleware = (req,res,next) =>{
    const uid = req.cookies?.uid;
    if(!uid){
        return res.redirect("/user/login")
    }

    const user = getUser(uid);
    if(!user){
        return res.redirect("/login")
    }

    req.user = user;
    next();
}

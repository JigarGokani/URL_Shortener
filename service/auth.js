const jwt = require("jsonwebtoken")

const secret = "jigar#"

exports.setUser=(user)=>{
    return jwt.sign({
        _id:user._id,
        email:user.email
    },secret);
}

exports.getUser=(token)=>{
    return jwt.verify(token,secret);
}
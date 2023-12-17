const express = require("express")
const router = express.Router();
const {signUp,login} = require("../controllers/user")

router.get("/signup",async(req,res)=>{
    return res.render("signup")
})
router.get("/login",async(req,res)=>{
    return res.render("login")
})
router.post("/signup",signUp)

router.post("/login",login)

module.exports = router;
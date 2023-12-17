const express = require("express")
const app = express()
const urlRouter = require("./routes/url")
const path = require("path")
const dbConnect = require("./connect")
const staticRoute = require("./routes/staticRoutes")
const userRoute = require("./routes/user")
const cookieparser = require("cookie-parser")
const {authmiddleware} = require("./middlewares/auth")

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieparser())

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))


app.use("/url",authmiddleware,urlRouter);
app.use("/user",userRoute);
app.use("/",staticRoute);



dbConnect();


app.listen(PORT,()=>{
    console.log(`App is listeneing at PORT : ${PORT}`)
})
const express = require("express")
const app = express()
const urlRouter = require("./routes/url")
const path = require("path")
const dbConnect = require("./connect")
const staticRoute = require("./routes/staticRoutes")

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))


app.use("/url",urlRouter);
app.use("/",staticRoute);



dbConnect();


app.listen(PORT,()=>{
    console.log(`App is listeneing at PORT : ${PORT}`)
})
const mongoose = require("mongoose")

const dbConnect=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/urlShortner")
    .then(()=>{console.log("DB Connection Successfull!")})
    .catch(()=>{console.log("DB connection Failed!")})
}
    

module.exports = dbConnect;
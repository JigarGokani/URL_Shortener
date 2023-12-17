const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    shortUrl:{
        type:String,
        required:true,
        unique:true,
    },
    requiredUrl:{
        type:String,
        required:true,
    },
    VisitHistory:[{
        timestamp:{type:Number}
    }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }


},{timestamps:true})

const URL = mongoose.model("Url",UrlSchema)

module.exports = URL;
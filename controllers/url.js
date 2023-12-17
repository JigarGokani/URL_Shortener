const URL = require("../models/url")
const shortid = require("shortid")


exports.createURL = async (req,res)=>{
    const body = req.body;
    const generatedurl = shortid()

    await URL.create({
        shortUrl: generatedurl,
        requiredUrl: body.url,
        VisitHistory:[],
        createdBy:req.user._id,

    })

    return res.render(
        "home",
        {id:generatedurl}
        
    )

} 
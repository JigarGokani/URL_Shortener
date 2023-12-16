const URL = require("../models/url")
const shortid = require("shortid")


exports.createURL = async (req,res)=>{
    const body = req.body;
    const generatedurl = shortid()

    await URL.create({
        shortUrl: generatedurl,
        requiredUrl: body.url,
        VisitHistory:[],

    })

    return res.render(
        "home",
        {id:generatedurl}
        
    )

} 
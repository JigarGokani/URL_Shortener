const express = require("express")
const {createURL} = require("../controllers/url")
const URL = require("../models/url")

const router = express.Router()


router.post("/",createURL)

router.get("/:shortUrl",async(req,res)=>{
    const shortUrl = req.params.shortUrl;
    console.log(shortUrl)
    const entry = await URL.findOneAndUpdate(
        {shortUrl},
        {
            $push:{
                VisitHistory:{
                    timestamp:Date.now()
                }
            }
        }
        )
        res.redirect(entry.requiredUrl);
})


router.get("/analytics/:shortUrl",async(req,res)=>{
    const shortUrl = req.params.shortUrl;
    console.log(shortUrl)
    const result = await URL.findOne({shortUrl});

    return res.json({
        totalclicks: result.VisitHistory.length,
        analytics: result.VisitHistory,
    })

        
})

module.exports = router;
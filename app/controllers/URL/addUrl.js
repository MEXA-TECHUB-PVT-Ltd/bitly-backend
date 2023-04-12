
const  { nanoid }=  require('nanoid');

const  validateUrl  =require('../../utils/utils');
const dotenv =require('dotenv');
dotenv.config({ path: '/.env' });

const db = require("../../models");
const Url = db.Url;

const AddUrl = async (req, res) => {
    const base = process.env.BASE
    const { origUrl } = req.body;
    const urlId = nanoid();

    if (validateUrl(origUrl)) {
        try {
                const shortUrl = `http://localhost:8082/${urlId}`
                const result = new Url({
                    origUrl,
                    shortUrl,
                    urlId,
                    date: new Date().toString(),
                });

                await result.save();
                res.json({
                    message: "URL  Added Successfully!",
                    status: true,
                    result,
                })    
            // }
        } catch (err) {
            console.log(err);
            res.json({
                message: "Server Error Try Again!",
                status: false,
                result,
            })    
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
}

module.exports = AddUrl;
const db = require("../../models");
const QR_code = db.QR_code;
const Op = db.Sequelize.Op;
const { nanoid } = require('nanoid');
const validateUrl = require('../../utils/utils');
const AddQRCode = async (req, res) => {
    try {
        const urlId = nanoid();
        const { userID,title,link , shortenLink,color,status} = req.body;
        if (validateUrl(link)) {
        if (!link) {
            res.json({
                message: "link is required",
                status: false,
            })
        }
        const shortUrl = `http://localhost:8082/${urlId}`
        const links = {
            userID:userID,
			title:title,
            urlId:urlId,
			link:link,
            shortenLink: shortUrl,
            color:color,
            status:status
        }
        console.log(links);
        QR_code.create(links).then(result => {
            res.json({
                message: "QR Code  Added Successfully!",
                status: true,
                result,

            })
        });
    } else {
        res.json({
            message: "Enter a Valid URL",
            status: false,
        });   
     }
    } catch (err) {
        res.json({
            message: "QR_code Addition failed!",
            status: false,
        });
    }
};
module.exports = AddQRCode;
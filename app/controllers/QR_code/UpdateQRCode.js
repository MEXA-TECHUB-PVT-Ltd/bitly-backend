const db = require("../../models");
const QRCODE = db.QR_code;
const Op = db.Sequelize.Op;

const UpdateQRCode = async (req, res) => {
    try {
        const { linkID, title, link, shortenLink , color,status} = req.body;
        const shortUrl = `http://localhost:8082/${shortenLink}`
            const results = await QRCODE.update(
                {
                    title: title,
                    urlId:shortenLink,
                    link: link,
                    shortenLink: shortUrl,
                    color:color,
                    status:status
                },
                { where: { id: linkID } }
            )
            if (!results) {
                res.json({
                    message: "No QRCODE Found try Again!",
                    status: false,
                });
            } else {
                const result = await QRCODE.findOne({
                    where: { id: linkID },
                });
                res.json({
                    message: "QR-CODE Updated Successfully!",
                    status: true,
                    result,
                });
            }
    } catch (err) {
        res.json({
            message: "error",
            status: false,
        });
    }
};
module.exports = UpdateQRCode;

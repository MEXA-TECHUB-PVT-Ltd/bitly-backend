const db = require("../../models");
const PrivacyPolicy = db.PrivacyPolicy;
const Op = db.Sequelize.Op;

const AddPrivacyPolicy= async (req, res) => {
    try {
        const { title,content} = req.body;
        console.log(title);
        if (!content) {
            res.json({
                message: "content is required",
                status: false,
            })
        }
        const links = {
			title:title,
			content:content,
        }
        PrivacyPolicy.create(links).then(result => {
            res.json({
                message: "PrivacyPolicy  Added Successfully!",
                status: true,
                result,

            })
        });
    } catch (err) {
        res.json({
            message: "PrivacyPolicy Addition failed!",
            status: false,
        });
    }
};
module.exports = AddPrivacyPolicy;
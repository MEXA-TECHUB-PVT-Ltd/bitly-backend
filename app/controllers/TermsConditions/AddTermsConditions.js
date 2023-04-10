const db = require("../../models");
const TermsConditions = db.TermsConditions;
const Op = db.Sequelize.Op;

const AddTermsConditions= async (req, res) => {
    try {
        const {title,content} = req.body;
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
        TermsConditions.create(links).then(result => {
            res.json({
                message: "Terms & Conditions  Added Successfully!",
                status: true,
                result,

            })
        });
    } catch (err) {
        res.json({
            message: "Terms & Conditions Addition failed!",
            status: false,
        });
    }
};
module.exports = AddTermsConditions;
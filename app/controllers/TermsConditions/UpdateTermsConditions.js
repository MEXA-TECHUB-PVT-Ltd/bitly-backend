const db = require("../../models");
const TermsConditions = db.TermsConditions;
const Op = db.Sequelize.Op;

const UpdateTermsConditions = async (req, res) => {
    try {
        const { id, title, content } = req.body;
        if (!content) {
            res.json({
                message: "content is required",
                status: false,
            })
        } else {
            const result = await TermsConditions.update(
                {
                    title: title,
                    content: content,
                },
                { where: { id: id } }
            )
            if (!result) {
                res.json({
                    message: "No Terms Found try Again!",
                    status: false,
                });
            } else {
                const data = await TermsConditions.findOne({where:{id:id}});
                res.json({
                    message: "Terms Updated Successfully!",
                    status: true,
                    result:data,
                });
            }
        }
    } catch (err) {
        res.json({
            message: "error",
            status: false,
        });
    }
};
module.exports = UpdateTermsConditions;

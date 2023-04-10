const db = require("../../models");
const PrivacyPolicy = db.PrivacyPolicy;

const UpdatePrivacyPolicy = async (req, res) => {
    try {
        const { id, title, content } = req.body;
        if (!content) {
            res.json({
                message: "content is required",
                status: false,
            })
        } else {
            const result = await PrivacyPolicy.update(
                {
                    title: title,
                    content: content,
                },
                { where: { id: id } }
            )
            if (!result) {
                res.json({
                    message: "No Privacy Policy Found try Again!",
                    status: false,
                });
            } else {
                const data = await PrivacyPolicy.findOne({where:{id:id}});
                res.json({
                    message: "Privacy Policy Updated Successfully!",
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
module.exports = UpdatePrivacyPolicy;

const db = require("../../models");
const Link = db.links;
const Op = db.Sequelize.Op;

const UpdateLink = async (req, res) => {
    try {
        const { linkID, title, link, shortenLink, status } = req.body;
        const shortUrl = `https://staging-bitly-be.mtechub.com/${shortenLink}`
        const result = await Link.update(
            {
                title: title,
                urlId:shortenLink,
                link: link,
                shortenLink: shortUrl,
                status: status
            },
            { where: { id: linkID } }
        )
        if (!result) {
            res.json({
                message: "No Link Found try Again!",
                status: false,
            });
        } else {
            const data = await Link.findOne({where:{id:linkID}});
            res.json({
                message: "Link Updated Successfully!",
                status: true,
                result:data,
            });
        }
    } catch (err) {
        res.json({
            message: "error",
            status: false,
        });
    }
};
module.exports = UpdateLink;

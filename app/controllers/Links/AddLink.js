const db = require("../../models");
const Link = db.links;
const Op = db.Sequelize.Op;
const { nanoid } = require('nanoid');
const validateUrl = require('../../utils/utils');

const AddLink = async (req, res) => {
    try {
        const urlId = nanoid();
        const { userID, title, link, status } = req.body;
        if (validateUrl(link)) {
            if (!link) {
                res.json({
                    message: "link is required",
                    status: false,
                })
            }
            const shortUrl = `https://staging-bitly-be.mtechub.com/${urlId}`
            const links = {
                userID: userID,
                title: title,
                urlId: urlId,
                link: link,
                shortenLink: shortUrl,
                status: status
            }
            Link.create(links).then(result => {
                res.json({
                    message: "Link  Added Successfully!",
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
            message: "Link Addition failed!",
            status: false,
        });
    }


};
module.exports = AddLink;
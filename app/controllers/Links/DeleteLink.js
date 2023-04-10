// const User = require("../../models/User");
const db = require("../../models");
const Link = db.links;

const DeleteLink = async (req, res) => {
	try {
		const data = await Link.findOne({where:{id:req.params.id}});
		const result = await Link.destroy({where:{id:req.params.id}});
		if (!result) {
			res.json({
				message: "No Link found",
				status: false,
			});    
		} else {
			res.json({
				message: "Link Delected Successfully",
				status: true,
				result:data
			});
			}
	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = DeleteLink;
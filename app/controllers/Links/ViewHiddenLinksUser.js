// const Users = require("../../models/User");
const db = require("../../models");
const Link = db.links;

const ViewHiddenLinksUser = async (req, res) => {
	try {
		
		const result = await Link.findAll(
			{where:{
				userID:req.params.id,
				status:'hide'
			}});
		if (!result) {
			res.json({
				message: "No Link found!",
				status: false,
			});
		} else {
			res.json({
				message: "Link found!",
				status: true,
				result
			});
		}

	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = ViewHiddenLinksUser;
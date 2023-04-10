// const Users = require("../../models/User");
const db = require("../../models");
const Link = db.links;

const ViewAllLinksUser = async (req, res) => {
	try {
		
		console.log("ID :: -- " + req.params.id);
		const result = await Link.findAll(
			{where:{
				userID:req.params.id,
				status:'show'
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
module.exports = ViewAllLinksUser;
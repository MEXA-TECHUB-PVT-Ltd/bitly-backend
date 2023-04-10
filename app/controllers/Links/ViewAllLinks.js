// const Users = require("../../models/User");
const db = require("../../models");
const Link = db.links;

const ViewAllLinks = async (req, res) => {
	try {
		const { id } = req.body;
		const result = await Link.findAll();
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
module.exports = ViewAllLinks;
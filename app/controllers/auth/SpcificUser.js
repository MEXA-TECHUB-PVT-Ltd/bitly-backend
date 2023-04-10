// const Users = require("../../models/User");
const db = require("../../models");
const user = db.user;

const SpecificUser = async (req, res) => {
	try {
				const result = await user.findAll(
			{where:{
				id:req.params.id,
			}});
		if (!result) {
			res.json({
				message: "No User found!",
				status: false,
			});
		} else {
			res.json({
				message: "User Data!",
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
module.exports = SpecificUser;
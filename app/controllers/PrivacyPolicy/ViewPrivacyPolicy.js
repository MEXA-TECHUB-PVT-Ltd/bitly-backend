// const Users = require("../../models/User");
const db = require("../../models");
const PrivacyPolicy = db.PrivacyPolicy;

const ViewPrivacyPolicy = async (req, res) => {
	try {
		
		const result = await PrivacyPolicy.findAll();
		if (!result) {
			res.json({
				message: "No Privacy Policy found!",
				status: false,
			});
		} else {
			res.json({
				message: "Privacy Policy data!",
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
module.exports = ViewPrivacyPolicy;
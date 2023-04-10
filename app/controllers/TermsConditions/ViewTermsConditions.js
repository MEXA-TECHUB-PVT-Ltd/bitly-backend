// const Users = require("../../models/User");
const db = require("../../models");
const TermsConditions = db.TermsConditions;

const ViewTermsConditions = async (req, res) => {
	try {
		
		const result = await TermsConditions.findAll();
		if (!result) {
			res.json({
				message: "No Terms & Conditions found!",
				status: false,
			});
		} else {
			res.json({
				message: "Terms & Conditions Data!",
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
module.exports = ViewTermsConditions;
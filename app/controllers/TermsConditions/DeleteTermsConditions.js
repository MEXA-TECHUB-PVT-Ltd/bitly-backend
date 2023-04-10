// const User = require("../../models/User");
const db = require("../../models");
const TermsConditions = db.TermsConditions;

const DeleteTermsConditions = async (req, res) => {
	try {
		const data = await TermsConditions.findOne({where:{id:req.params.id}});
		const result = await TermsConditions.destroy({where:{id:req.params.id}});
		if (!result) {
			res.json({
				message: "No TermsConditions found",
				status: false,
			});    
		} else {
			res.json({
				message: "Terms & Conditions Delected Successfully",
				status: true,
				result: data
			});
			}
	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = DeleteTermsConditions;
// const User = require("../../models/User");
const db = require("../../models");
const PrivacyPolicy = db.PrivacyPolicy;

const DeletePrivacyPolicy = async (req, res) => {
	try {
		const data = await PrivacyPolicy.findOne({where:{id:req.params.id}});
		const result = await PrivacyPolicy.destroy({where:{id:req.params.id}});
		if (!result) {
			res.json({
				message: "No PrivacyPolicy found",
				status: false,
			});    
		} else {
			res.json({
				message: "PrivacyPolicy Delected Successfully",
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
module.exports = DeletePrivacyPolicy;
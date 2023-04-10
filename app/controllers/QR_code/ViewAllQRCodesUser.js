// const Users = require("../../models/User");
const db = require("../../models");
const QR_code = db.QR_code;

const ViewAllQRCodesUser = async (req, res) => {
	try {
		
		console.log("ID :: -- " + req.params.id);
		const result = await QR_code.findAll({
			where:{
				userID:req.params.id,
				status:'show'
			}
		});
		if (!result) {
			res.json({
				message: "No QR_code found!",
				status: false,
			});
		} else {
			res.json({
				message: "QR_code found!",
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
module.exports = ViewAllQRCodesUser;
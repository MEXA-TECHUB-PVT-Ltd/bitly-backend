// const User = require("../../models/User");
const db = require("../../models");
const QR_code = db.QR_code;

const DeleteQRCode = async (req, res) => {
	try {
		const result = await QR_code.destroy({where:{id:req.params.id}});
		if (!result) {
			res.json({
				message: "No QR_code found",
				status: false,
			});    
		} else {
			res.json({
				message: "QR_code Delected Successfully",
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
module.exports = DeleteQRCode;
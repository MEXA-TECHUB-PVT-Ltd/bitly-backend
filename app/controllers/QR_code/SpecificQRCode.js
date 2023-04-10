const db = require("../../models");
const Link = db.links;

const SpecificQRCode = async (req, res) => {
	try {
		const result = await Link.findOne({where:{id:req.params.id}});
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
module.exports = SpecificQRCode;
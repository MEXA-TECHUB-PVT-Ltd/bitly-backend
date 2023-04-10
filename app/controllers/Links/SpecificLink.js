const db = require("../../models");
const Link = db.links;

const SpecificLink = async (req, res) => {
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
				result:result,
			});
		}
	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = SpecificLink;
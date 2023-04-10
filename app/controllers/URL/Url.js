// const Users = require("../../models/User");
const db = require("../../models");
const Url = db.links;
const qrcode = db.QR_code;

const ViewUrl = async (req, res) => {
	try {
		const url = await Url.findOne({ where: { urlId: req.params.urlId } });
		if (url) {
			return res.redirect(url.link);
		}
		else {
			const url = await qrcode.findOne({ where: { urlId: req.params.urlId } });
			if (url) {
				return res.redirect(url.link);
			}
			else {
				res.status(404).json('Not found');
			}
		}
	} catch (err) {
		res.status(500).json('Server Error');
	}
};
module.exports = ViewUrl;

// module.exports = (sequelize, Sequelize) => {
// 	const QR_code = sequelize.define("QR_code", {
// 		userID: {
// 		title: {
// 		urlId: {
// 		link: {
// 		shortenLink: {
// 		color: {
// 		status: {


// module.exports = (sequelize, Sequelize) => {
// 	const QRCode = sequelize.define("qrcode", {
const { sql } = require("../config/db.config");
const { nanoid } = require('nanoid');
const validateUrl = require('../utils/utils');

const QRCode = function (QRCode) {
	this.userID = QRCode.userID;
	this.title = QRCode.title;
	this.urlId = QRCode.urlId;
	this.link = QRCode.link;
	this.shortenLink = QRCode.shortenLink;
	this.color = QRCode.color;
	this.status = QRCode.status;
};
QRCode.create = async (req, res) => {
	sql.query(`CREATE TABLE IF NOT EXISTS public.QRCode (
			id SERIAL NOT NULL,
			userID SERIAL NOT NULL,
			title text ,
			urlId text ,
			link text,
			shortenLink text,
			color text,
			status text,
			createdAt timestamp,
			updatedAt timestamp ,
			PRIMARY KEY (id))  ` , async (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			if (!req.body.title || req.body.title === '') {
				res.json({
					message: "Please Enter your title",
					status: false,
				});
			} else if (!req.body.link) {
				res.json({
					message: "Please Enter link",
					status: false,
				});
			} else {
				const { userID, title, link, color, status } = req.body;
				const urlId = nanoid();
				const shortUrl = `http://localhost:8082/${urlId}`

				const query = `INSERT INTO "qrcode" (id,userID,title,urlId ,link, shortenLink,color , status , createdAt ,updatedAt )
								VALUES (DEFAULT, $1, $2, $3, $4  , $5 , $6 , $7,   'NOW()','NOW()' ) RETURNING * `;
				const foundResult = await sql.query(query,
					[userID, title, urlId, link, shortUrl, color, status]);
				if (foundResult.rows.length > 0) {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: "QRCode Added Successfully!",
							status: true,
							result: foundResult.rows,
						});
					}
				} else {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				}
			}
		}
	});

}


QRCode.ViewHiddenQRCodesUser = (req, res) => {
	sql.query(`SELECT * FROM "qrcode" WHERE status = $1 AND userid = $2`, ['hide', req.params.id], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Link Details",
				status: true,
				result: result.rows
			});
		}
	});
}


QRCode.ViewAllQRCodesUser = (req, res) => {
	sql.query(`SELECT * FROM QRCode WHERE ( userid = $1)`, [req.params.id], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "QRCode Details",
				status: true,
				result: result.rows
			});
		}
	});
}


QRCode.ViewAllQRCodes = (req, res) => {
	sql.query(`SELECT * FROM "qrcode" `, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "QRCode Details",
				status: true,
				result: result.rows
			});
		}
	});
}

// QRCode.UpdateQRCode = async (req, res) => {
// 	if (req.body.linkID === '') {
// 		res.json({
// 			message: "id is required",
// 			status: false,
// 		});
// 	} else {
// 		const userData = await sql.query(`select * from "qrcode" where id = $1`, [req.body.linkID]);

// 		if (userData.rows.length === 0) {
// 			res.json({
// 				message: "Not Found!",
// 				status: false,
// 			});
// 		} else if (userData.rows.length > 1) {
// 			const oldTitle = userData.rows[0].title;
// 			const oldUrlId = userData.rows[0].urlId;
// 			const oldlink = userData.rows[0].link;
// 			const oldshortenLink = userData.rows[0].shortenLink;
// 			const oldColor = userData.rows[0].color;
// 			const oldStatus = userData.rows[0].status;
// 			const oldUserID = userData.rows[0].userid;
// 			let urlId;
// 			let { linkID, title, link, shortenLink,color, status } = req.body;
// 			if (title === undefined || title === '') {
// 				title = oldTitle;
// 			}

// 			if (shortenLink === undefined || shortenLink === '') {
// 				urlId = oldUrlId;
// 			}
// 			if (color === undefined || color === '') {
// 				color = oldColor;
// 			}
// 			if (link === undefined || link === '') {
// 				link = oldlink;
// 			}
// 			if (shortenLink === undefined || shortenLink === '') {
// 				shortenLink = oldshortenLink;
// 			}
// 			if (status === undefined || status === '') {
// 				status = oldStatus;
// 			}

// 			sql.query(`UPDATE "qrcode" SET userID = $1, title = $2, 
// 			urlId = $3, link = $4, shortenLink = $5, color = $6 , status = $7 WHERE id = $8;`,
// 				[oldUserID, title, urlId, link, shortenLink, color, status, linkID], async (err, result) => {
// 					if (err) {
// 						res.json({
// 							message: "Try Again",
// 							status: false,
// 							err
// 						});
// 					} else {
// 						if (result.rowCount === 1) {
// 							const data = await sql.query(`select * from "qrcode" where id = $1`, [req.body.linkID]);
// 							res.json({
// 								message: "QRCode Updated Successfully!",
// 								status: true,
// 								result: data.rows,
// 							});
// 						} else if (result.rowCount === 0) {
// 							res.json({
// 								message: "Not Found",
// 								status: false,
// 							});
// 						}
// 					}
// 				});
// 		}
// 	}
// }
QRCode.UpdateQRCode = async (req, res) => {
	if (req.body.linkID === '') {
		res.json({
			message: "linkID is required",
			status: false,
		});
	} else {
		const userData = await sql.query(`select * from "qrcode" where id = $1`, [req.body.linkID]);
		console.log(userData.rows);
		if(userData.rows.length > 0) {
		const oldTitle = userData.rows[0].title;
		const oldUrlId = userData.rows[0].urlId;
		const oldlink = userData.rows[0].link;
		const oldColor = userData.rows[0].color;
		const oldshortenLink = userData.rows[0].shortenLink;
		const oldStatus = userData.rows[0].status;
		const oldUserID = userData.rows[0].userid;
			let urlId;
		let { linkID, title, link, shortenLink, color,status } = req.body;
		if (title === undefined || title === '') {
			title = oldTitle;
		}
		if (shortenLink === undefined || shortenLink === '') {
			urlId = oldUrlId;
		}
		if (link === undefined || link === '') {
			link = oldlink;
		}
		if (shortenLink === undefined || shortenLink === '') {
			shortenLink = oldshortenLink;
		}		
		if (color === undefined || color === '') {
			color = oldColor;
		}
		if (status === undefined || status === '') {
			status = oldStatus;
		}

		sql.query(`UPDATE "qrcode" SET userID = $1, title = $2, 
		urlId = $3, link = $4, shortenLink = $5, color=$6, status = $7  WHERE id = $8;`,
			[oldUserID, title, urlId, link,shortenLink,color,status, linkID], async (err, result) => {
				if (err) {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				} else {
					if (result.rowCount === 1) {
						const data = await sql.query(`select * from "qrcode" where id = $1`, [req.body.linkID]);
						res.json({
							message: "qr code Updated Successfully!",
							status: true,
							result: data.rows,
						});
					} else if (result.rowCount === 0) {
						res.json({
							message: "Not Found",
							status: false,
						});
					}
				}
			});
		}else{
			res.json({
				message: "Please Enter valid qr code ",
                status: false,
			});
		}
	}
}


QRCode.SpecificQRCode = async (req, res) => {
	const data = await sql.query(`select * from "qrcode" where id = $1`, [req.params.id]);
	if (data.rows.length === 1) {
		sql.query(`SELECT FROM "qrcode" WHERE id = $1;`, [req.params.id], (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "QRCode Data!",
					status: true,
					result: data.rows,

				});
			}
		});
	} else {
		res.json({
			message: "Not Found",
			status: false,
		});
	}
}


QRCode.DeleteQRCode = async (req, res) => {
	const data = await sql.query(`select * from public."qrcode" where id = $1`, [req.params.id]);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM public."qrcode" WHERE id = $1;`, [req.params.id], (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: " QRCode Deleted Successfully!",
					status: true,
					result: data.rows,

				});
			}
		});
	} else {
		res.json({
			message: "Not Found",
			status: false,
		});
	}
}


module.exports = QRCode;
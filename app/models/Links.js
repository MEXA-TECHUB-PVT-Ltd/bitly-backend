// module.exports = (sequelize, Sequelize) => {
// 	const Links = sequelize.define("links", {
// 		userID: {
// 			type: Sequelize.INTEGER,
// 		title: {
// 			type: Sequelize.TEXT,
// 		urlId: {
// 		link: {
// 		shortenLink: {
// 		status: {
const { sql } = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { nanoid } = require('nanoid');
const validateUrl = require('../utils/utils');

const Links = function (Links) {
	this.userID = Links.userID;
	this.title = Links.title;
	this.urlId = Links.urlId;
	this.link = Links.link;
	this.shortenLink = Links.shortenLink;
	this.status = Links.status;
};
Links.AddLink = async (req, res) => {
	sql.query(`CREATE TABLE IF NOT EXISTS public.Links (
        id SERIAL NOT NULL,
		userID SERIAL NOT NULL,
		title text ,
        urlId text ,
        link text,
		shortenLink text,
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
				const { userID, title, link, status } = req.body;
				const urlId = nanoid();
				const shortUrl = `https://staging-bitly-be.mtechub.com/${urlId}`

					const query = `INSERT INTO "links" (id,userID,title,urlId ,link, shortenLink, status , createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, $3, $4  , $5 , $6 ,  'NOW()','NOW()' ) RETURNING * `;
					const foundResult = await sql.query(query,
						[userID, title, urlId, link,shortUrl,status]);
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
								message: "Links Added Successfully!",
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


Links.ViewHiddenLinksUser = (req, res) => {
	sql.query(`SELECT * FROM "links" WHERE status = $1 AND userid = $2`, ['hide', req.params.id], (err, result) => {
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


Links.ViewAllLinksUser = (req, res) => {
	sql.query(`SELECT * FROM Links WHERE ( userid = $1 AND status = 'show')`, [req.params.id], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Links Details",
				status: true,
				result: result.rows
			});
		}
	});
}

Links.TotalLinks = (req, res) => {
	sql.query(`SELECT COUNT(*) FROM "links"`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Links Details",
				status: true,
				result: result.rows
			});
		}
	});
}

Links.ViewAllLinks = (req, res) => {
	sql.query(`SELECT * FROM "links" WHERE status = "show"`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Links Details",
				status: true,
				result: result.rows
			});
		}
	});
}

Links.UpdateLink = async (req, res) => {
	console.log(req.body.linkID);
	if (req.body.linkID === '') {
		res.json({
			message: "linkID is required",
			status: false,
		});
	} else {
		const userData = await sql.query(`select * from "links" where id = $1`, [req.body.linkID]);
		console.log(userData.rows);
		if(userData.rows.length > 0) {
		const oldTitle = userData.rows[0].title;
		const oldUrlId = userData.rows[0].urlId;
		const oldlink = userData.rows[0].link;
		const oldshortenLink = userData.rows[0].shortenLink;
		const oldStatus = userData.rows[0].status;
		const oldUserID = userData.rows[0].userid;
			let urlId;
		let { linkID, title, link, shortenLink, status } = req.body;
		if (title === undefined || title === '') {
			title = oldTitle;
		}
		if (shortenLink === undefined || shortenLink === '') {
			urlId = oldUrlId;
		}else {
			urlId = shortenLink
		}
		if (link === undefined || link === '') {
			link = oldlink;
		}
		if (shortenLink === undefined || shortenLink === '') {
			shortenLink = oldshortenLink;
		}else {
			shortenLink = `https://staging-bitly-be.mtechub.com/${shortenLink}`
		}
		if (status === undefined || status === '') {
			status = oldStatus;
		}

		sql.query(`UPDATE "links" SET userID = $1, title = $2, 
		urlId = $3, link = $4, shortenLink = $5, status = $6  WHERE id = $7;`,
			[oldUserID, title, urlId, link,shortenLink,status, linkID], async (err, result) => {
				if (err) {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				} else {
					if (result.rowCount === 1) {
						const data = await sql.query(`select * from "links" where id = $1`, [req.body.linkID]);
						res.json({
							message: "Links Updated Successfully!",
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
				message: "Link Not Found",
                status: false,
			});
		}
	}
}


Links.SpecificLink = async (req, res) => {
	const data = await sql.query(`select * from "links" where id = $1`, [req.params.id]);
	if (data.rows.length === 1) {
		sql.query(`SELECT FROM "links" WHERE id = $1;`, [req.params.id], (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "Link Data !",
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


Links.DeleteLink = async (req, res) => {
    const data = await sql.query(`select * from public."links" where id = $1`, [req.params.id]);
    if (data.rows.length === 1) {
        sql.query(`DELETE FROM public."links" WHERE id = $1;`,[req.params.id], (err, result) => {
            if (err) {
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                res.json({
                    message: " Links Deleted Successfully!",
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


module.exports = Links;
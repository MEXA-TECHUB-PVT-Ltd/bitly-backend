// module.exports = (sequelize, Sequelize) => {
//     const Url = sequelize.define("url", {
//         urlId: {
//         origUrl: {
//         shortUrl: {
//         clicks: {
//         date: {


const { sql } = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { nanoid } = require('nanoid');
const validateUrl = require('../utils/utils');

const Url = function (Url) {
    this.urlId = Url.urlId;
    this.origUrl = Url.origUrl;
    this.shortUrl = Url.shortUrl;
    this.clicks = Url.clicks;
    this.date = Url.date;
};

Url.AddUrl = async (req, res) => {
    sql.query(`CREATE TABLE IF NOT EXISTS public.Url (
        id SERIAL NOT NULL,
        urlId text ,
		origUrl text,
		shortUrl text ,
        clicks text,
		date text,
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
            if (!req.body.origUrl || req.body.origUrl === '') {
                res.json({
                    message: "Please Enter your URL",
                    status: false,
                });
            } else {
                const { origUrl } = req.body;
                const urlId = nanoid();

                if (validateUrl(origUrl)) {
                    const shortUrl = `https://staging-bitly-be.mtechub.com/${urlId}`

                    const query = `INSERT INTO "url" (id,urlId,origUrl,shortUrl ,clicks, date , createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, $3, $4  , 'NOW()' ,  'NOW()','NOW()' ) RETURNING * `;
                    const foundResult = await sql.query(query,
                        [urlId, origUrl, shortUrl, '0']);
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
                                message: "Url Added Successfully!",
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
        }
    });

}


Url.getUrl =  (req, res) => {
    sql.query(`select * FROM links WHERE urlId = $1;`,
     [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: "Try Again",
                status: false,
                err
            });
        } else {
            if(result.rows.length > 0){
                res.redirect(result.rows[0].link);
            }else if (result.rows.length === 0){
                sql.query(`select * FROM "qrcode" WHERE urlId = $1;`,
                [req.params.id], (err, result) => {
                   if (err) {
                       console.log(err);
                       res.json({
                           message: "Try Again",
                           status: false,
                           err
                       });
                   } else {
                       if(result.rows.length > 0){
                           res.redirect(result.rows[0].link);
                       }else if (result.rows.length === 0){
                        res.json({
                            message: "Url Not Found",
                            status: false,
                        });
                       }
                    }
                })
            }
        }
    });
}
module.exports = Url;
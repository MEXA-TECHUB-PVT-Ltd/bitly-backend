const emailOTPBody = require("../../tghjk/emailOTPBody")
const db = require("../../models");
const User = db.user;

require('dotenv').config();
const nodemailer = require('nodemailer');
const OTPVerification = db.OTPVerification;


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'ihteshamm112@gmail.com',
        pass: 'fzcnqvtxfzxarjxr',
    },
});

const sendOTPVerificationEmail = async ( id, email , res) => {
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        const result = await OTPVerification.findOne({
            where: { email: email },
        })
        if (!result) {
            const newOTPVerif = {
                userId: id,
                otp: otp,
                email: email,
                status: 'pending'
            };
            OTPVerification.create(newOTPVerif).then(result => {
                // res.json({
                //     message: "new otp saved",
                //     status: true,
                //     result: result
                // });
            })
        } else {
            const newOTPVerifs = {
                userId: id,
                otp: otp,
                email: email,
                status: 'pending'
            };
            console.log(newOTPVerifs);
            await OTPVerification.update(newOTPVerifs,
                { where: { email: email } }
            ).then((result) => {
                // if (result == 1) {
                //     res.json({
                //         message: "New OTP Generted Successfully",
                //         status: true,
                //         result,
                //     });
                // } else {
                //     res.json({
                //         message: "OTP Not Exists!",
                //         status: false,
                //         result,
                //     });
                // }

            });
        }
        transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Verify Account',
            html: emailOTPBody(otp, "Bitly  ", "#233973")

        });
        res.json({
            message: `Sent a verification email to ${email}`,
            status: "pending",
            success: "true",
            data: {
                userId: id,
                otp: otp,
                email: email
            }
        });

    }
    catch (err) {
        console.log("ERROR!")
    }

}

const VerifyEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({
            where: { email: email },
        });
        if (user===null) {
            res.json({
                message: `No User Found `,
                success: "false",
            })
        } else {
            console.log(user.id);
            console.log(user.email);
            sendOTPVerificationEmail(user.id,user.email, res)
        }

    }
    catch (err) {
        res.json({
            message: "Error occurred while updating passwords",
            error: err.message
        })
    }



};


module.exports = VerifyEmail;

// const userOTPVerificationModel = require("../../models/userOTPVerificationModel")

const db = require("../../models");
const userOTPVerificationModel = db.OTPVerification;

async function verifyOTP(req, res) {
    const { otp,email } = req.body;
    const user = await userOTPVerificationModel.findOne(
        {
            where: { otp: otp,email:email }
        });
        console.log(user);
    if (user) {
        await userOTPVerificationModel.update(
            {
                status: "verified"
            },
            {
                where: { otp: otp }
            }
        ).then((result) => {
            if (result == 1) {
                res.json({
                    message: "user found , OTP successfully matched",
                    status: true,
                    result : {
                        id: user.id,
                        email: user.email,
                        otp: user.otp
                    }
                });
            } else {
                res.json({
                    message: "Enter OTP Again",
                    status: false,
                    result
                })
            }

        });

    }
    else {
        res.json({
            message: "no such record found with the following OTP =" + otp,
            status: false,
        })
    }

}
module.exports = verifyOTP;

const bcrypt = require("bcryptjs");
const { request } = require("express");
const db = require("../../models");
const Admin = db.user;
const userOTPVerificationModel = db.OTPVerification;

const newPassword = async (req, res) => {
    const { email, password } = req.body;

    const user = userOTPVerificationModel.findOne(
        {
            where: { email: email, status: "verified" }
        }
    )
    if (!user) {
        res.json({
            message: `No user with email ${email} has a password updation request `,
            status: false,
        })
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const result = await Admin.update(
            {
                password: hashPassword
            },
            { where: { email: email } })
        if (result) {
            const results = await userOTPVerificationModel.destroy({where:{ email: email }});
            const data = await Admin.findOne({where: {
                email: email
            }});    
            res.json({
                    message: "Password has been updated",
                    status: true,
                    result: data
                })
        }
        else {
            res.json({
                message: "Password could not be updated successfully",
                status: true,
                result: result
            })
        }
    }
}
module.exports = newPassword;

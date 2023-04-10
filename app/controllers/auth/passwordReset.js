const bcrypt = require("bcryptjs");
const db = require("../../models");
const Admin = db.user;

const passwordReset = async (req, res) => {
    try {
        const { email, password, newPassword } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);
        const user = await Admin.findOne({
            where: { email: email },
        });
        console.log(hashPassword);
        if (!user) {
            res.json({
                message: "No users found",
                status: false,
            })
        } else {
            const validPassword = await bcrypt.compare(password, user.password);
            console.log(validPassword);
            if (!validPassword) {
                res.json({
                    message: "Password Incorrect",
                    status: false,
                })
            } else {
                const admin = {
                    id: user.id,
                    email: email,
                    password: hashPassword,
                    createdAt: user.createdAt,
                     updatedAt: user.updatedAt
                };
                await Admin.update(admin,
                    // {
                    //     id: user.id, email: user.email, passowrd: hashPassword,
                    //     createdAt: user.createdAt, updatedAt: user.updatedAt
                    // },
                    { where: { email: email } }
                ).then((result) => {
                    if (result == 1) {
                        res.json({
                            message: "User Password Updated Successfully",
                            status: true,
                            result,
                        });
                    } else {
                        res.json({
                            message: "not Exists!",
                            status: false,
                            result,
                        });
                    }

                });
            }
        }
    }
    catch (err) {
        res.json({
            message: "Error occurred while updating passwords",
            status: false,
            result: err.message
        })
    }
};
module.exports = passwordReset;
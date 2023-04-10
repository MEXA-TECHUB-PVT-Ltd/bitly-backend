const bcrypt = require("bcryptjs");
const db = require("../../models");
const User = db.user;
const signUp = async (req, res) => {
    try {
        const { username, email, password,accountType } = req.body;
        if (!username) {
            res.json({
                message: "Please Enter your Name as well",
                status: false,
            });
        } else
            if (!email) {
                res.json({
                    message: "Please Enter your Email",
                    status: false,
                });
            } else
                if (!password && password.length <= 8) {
                    res.json({
                        message: "Please Enter Password & must be min 8 characters",
                        status: false,
                    });
                } else {
                    const exist = await User.findOne({ where: { email: email } });
                    if (exist) {
                        res.json({
                            message: "Email Already Exists",
                            status: false,
                        });
                    } else {
                        const salt = await bcrypt.genSalt(10);
                        let HashPassword = await bcrypt.hash(password, salt);
                        const user = {
                            username: username,
                            email: email,
                            password: HashPassword,
                            accountType:accountType
                        }
                        User.create(user).then(result => {
                            res.json({
                                message: "User Added Successfully!",
                                status: true,
                                result
                            });
                        })
                    }
                }
    } catch (err) {
        res.json({
            message: "Error",
            status: false,
        });
    }
};
module.exports = signUp;
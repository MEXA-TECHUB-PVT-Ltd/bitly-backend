module.exports = (sequelize, Sequelize) => {
    const OTPVerification = sequelize.define("OTPVerification", {
		userId: {
			type: Sequelize.STRING,
			required: true,
		},
		otp: {
			type: Sequelize.STRING,
			required: true,
		},
        email: {
			type: Sequelize.STRING,
			required: true,
		},
		status: {
			type: Sequelize.STRING,
			required: true,
		},
    });
    return OTPVerification;
};

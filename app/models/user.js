module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("User", {
		username: {
			type: Sequelize.STRING,
			required: true,
		},
		email: {
			type: Sequelize.STRING,
			required: true,
		},
		password: {
			type: Sequelize.STRING,
			required: true,
		},
		accountType:{
			type: Sequelize.STRING,
			required: true,
		}
	});
	return User;
};

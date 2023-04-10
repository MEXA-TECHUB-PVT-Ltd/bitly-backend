module.exports = (sequelize, Sequelize) => {
	const PrivacyPolicy = sequelize.define("PrivacyPolicy", {
		title: {
			type: Sequelize.STRING,
			required: true,
		},
		content: {
			type: Sequelize.TEXT,
		},
	});

	return PrivacyPolicy;
};

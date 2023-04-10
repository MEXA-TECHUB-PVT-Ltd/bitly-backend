module.exports = (sequelize, Sequelize) => {
	const TermsConditions = sequelize.define("TermsConditions", {
		title: {
			type: Sequelize.STRING,
			required: true,
		},
		content: {
			type: Sequelize.TEXT,
		},
	});

	return TermsConditions;
};

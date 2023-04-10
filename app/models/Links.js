module.exports = (sequelize, Sequelize) => {
	const Links = sequelize.define("Links", {
		userID: {
			type: Sequelize.INTEGER,
			required: true,
		},
		title: {
			type: Sequelize.TEXT,
		},
		urlId: {
			type: Sequelize.STRING,
			required: true,
		},
		link: {
			type: Sequelize.TEXT,
			required: true,
		},
		shortenLink: {
			type: Sequelize.TEXT,
			required: true,
		},
		status: {
			type: Sequelize.STRING,
			required: true,
		},
	});

	return Links;
};

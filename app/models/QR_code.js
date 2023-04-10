module.exports = (sequelize, Sequelize) => {
	const QR_code = sequelize.define("QR_code", {
		userID: {
			type: Sequelize.INTEGER,
			required: true,
		},
		title: {
			type: Sequelize.STRING,
		},
		urlId: {
			type: Sequelize.STRING,
			required: true,
		},
		link: {
			type: Sequelize.STRING,
			required: true,
		},
		shortenLink: {
			type: Sequelize.STRING,
			required: true,
		},
		color: {
			type: Sequelize.STRING,
			required: true,
		},
		status: {
			type: Sequelize.STRING,
			required: true,
		},
	});

	return QR_code;
};

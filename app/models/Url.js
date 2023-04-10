module.exports = (sequelize, Sequelize) => {
    const Url = sequelize.define("Url", {
        urlId: {
            type: Sequelize.STRING,
            required: true,
        },
        origUrl: {
            type: Sequelize.STRING,
            required: true,
        },
        shortUrl: {
            type: Sequelize.STRING,
            required: true,
        },
        clicks: {
            type: Sequelize.STRING,
            required: true,
            default: 0,
        },
        date: {
            type: Sequelize.STRING,
            default: Date.now,
        }
    });
    return Url;

};

// const dbConfig = require("../config/db.config.js");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.Url = require("./Url")(sequelize, Sequelize);
// db.user = require("./user")(sequelize, Sequelize);
// db.links = require("./Links")(sequelize, Sequelize);
// db.OTPVerification = require("./OTPVerification")(sequelize, Sequelize);
// db.QR_code = require("./QR_code")(sequelize, Sequelize);
// db.TermsConditions = require("./TermsConditions")(sequelize, Sequelize);
// db.PrivacyPolicy = require("./PrivacyPolicy")(sequelize, Sequelize);

// module.exports = db;

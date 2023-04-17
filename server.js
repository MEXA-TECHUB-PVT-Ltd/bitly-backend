const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const bodyParser = require("body-parser"); /* deprecated */
// const client = require("./app/models/db");
const app = express();
const dbConfig = require('./app/config/db.config')
require('dotenv').config()

var corsOptions = {
  // origin: "http://localhost:8081"
};
app.use(cors()) // Use this
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */
app.use("/imges_uploads", express.static("imges_uploads"))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bitly" });
});
require("./app/routes/url")(app);
require("./app/routes/auth")(app);
require("./app/routes/Links")(app);
require("./app/routes/QR_code")(app);
require("./app/routes/PrivacyPolicy")(app);
require("./app/routes/TermsConditions")(app);

// dbConfig.connect() ;

// (async () => {
//   dbConfig.on('connection', (err, connection) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('connected to postgres')
//     }
//   })
// })();

// dbConfig.on('error', (err) => {
//   console.log(err);
// })
// dbConfig.on('end', (err) => {
//   console.log("end connection");
// })




// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
// const cors = require("cors");

// const app = express();
// var corsOptions = {
//   // origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// app.use(express.json());
// // parse requests of content-type - application/json
// app.use(express.json());  /* bodyParser.json() is deprecated */

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// const db = require("./app/models");
// db.sequelize.sync();
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Bitly" });
// });
// require("./app/routes/url")(app);
// require("./app/routes/auth")(app);
// require("./app/routes/Links")(app);
// require("./app/routes/QR_code")(app);
// require("./app/routes/PrivacyPolicy")(app);
// require("./app/routes/TermsConditions")(app);

// // set port, listen for requests
// const PORT = process.env.PORT || 8082;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });



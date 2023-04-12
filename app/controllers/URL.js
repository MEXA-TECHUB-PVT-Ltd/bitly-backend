const Url = require("../models/Url");

// Create and Save a new Admin
exports.AddUrl = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Url.AddUrl( req, res);
};
exports.getUrl = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Url.getUrl( req, res);
};


const qrcode = require("../models/QRCode");

// Create and Save a new Admin
exports.AddQRCode = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  qrcode.create( req, res);
};
exports.DeleteQRCode = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  qrcode.DeleteQRCode( req, res);
};

exports.SpecificQRCode = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  qrcode.SpecificQRCode( req, res);
};
exports.UpdateQRCode = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  qrcode.UpdateQRCode( req, res);
};
exports.ViewAllQRCodes = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  qrcode.ViewAllQRCodes( req, res);
};
exports.ViewAllQRCodesUser = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  qrcode.ViewAllQRCodesUser( req, res);
};

exports.ViewHiddenQRCodesUser = (req, res) => {
	if (!req.body) {
	  res.json({
		message: "Content can not be empty!",
		status: false,
	   });
	}  
	qrcode.ViewHiddenQRCodesUser( req, res);
  };



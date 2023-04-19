const links = require("../models/Links");

// Create and Save a new Admin
exports.AddLink = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  links.AddLink( req, res);
};
exports.UpdateLink = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  links.UpdateLink( req, res);
};
exports.TotalLinks = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  links.TotalLinks( req, res);
};
exports.DeleteLink = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  links.DeleteLink( req, res);
};
exports.SpecificLink = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  links.SpecificLink( req, res);
};
exports.ViewAllLinks = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  links.ViewAllLinks( req, res);
};
exports.ViewAllLinksUser = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  links.ViewAllLinksUser( req, res);
};

exports.ViewHiddenLinksUser = (req, res) => {
	if (!req.body) {
	  res.json({
		message: "Content can not be empty!",
		status: false,
	   });
	}  
	links.ViewHiddenLinksUser( req, res);
  };



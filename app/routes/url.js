module.exports = app => {

    const AddUrl = require("../controllers/URL/addUrl");
    const Url = require("../controllers/URL/Url");


    let router = require("express").Router();

    router.post("/add_url", AddUrl);
    router.get("/:urlId", Url);

    app.use("", router);
};

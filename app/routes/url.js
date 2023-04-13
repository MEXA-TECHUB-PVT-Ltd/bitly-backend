module.exports = app => {

    const URL = require("../controllers/URL");


    let router = require("express").Router();

    router.post("/add_url", URL.AddUrl);
    router.get("/:urlId", URL.getUrl);

    app.use("", router);
};

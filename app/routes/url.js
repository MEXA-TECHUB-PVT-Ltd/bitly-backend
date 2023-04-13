module.exports = app => {

    const URL = require("../controllers/URL");


    let router = require("express").Router();

    router.post("/add_url", URL.AddUrl);
    router.get("/:id", URL.getUrl);

    app.use("", router);
};

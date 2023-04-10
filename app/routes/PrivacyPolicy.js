module.exports = app => {

    const AddPrivacyPolicy = require("../controllers/PrivacyPolicy/AddPrivacyPolicy");
    const UpdatePrivacyPolicy = require("../controllers/PrivacyPolicy/UpdatePrivacyPolicy");
    const DeletePrivacyPolicy = require("../controllers/PrivacyPolicy/DeletePrivacyPolicy");
    const ViewPrivacyPolicy = require("../controllers/PrivacyPolicy/ViewPrivacyPolicy");

    let router = require("express").Router();

    router.post("/add_privacy_policy", AddPrivacyPolicy);
    router.put("/update_privacy_policy", UpdatePrivacyPolicy);
    router.delete("/delete_privacy_policy/:id", DeletePrivacyPolicy);
    router.get("/view_privacy_policy", ViewPrivacyPolicy);

    app.use("/privacy_policy", router);
};

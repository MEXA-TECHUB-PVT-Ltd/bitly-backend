module.exports = app => {

    const AddTermsConditions = require("../controllers/TermsConditions/AddTermsConditions");
    const DeleteTermsConditions = require("../controllers/TermsConditions/DeleteTermsConditions");
    const UpdateTermsConditions = require("../controllers/TermsConditions/UpdateTermsConditions");
    const ViewTermsConditions = require("../controllers/TermsConditions/ViewTermsConditions");

    let router = require("express").Router();

    router.post("/add_terms_conditions", AddTermsConditions);
    router.put("/update_terms_conditions", UpdateTermsConditions);
    router.delete("/delete_terms_conditions/:id",DeleteTermsConditions );
    router.get("/specific_terms_conditions", ViewTermsConditions);

    app.use("/terms_conditions", router);
};

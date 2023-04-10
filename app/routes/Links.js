module.exports = app => {

    const AddLink = require("../controllers/Links/AddLink");
    const DeleteLink = require("../controllers/Links/DeleteLink");
    const SpecificLink = require("../controllers/Links/SpecificLink");
    const ViewAllLinks = require("../controllers/Links/ViewAllLinks");
    const ViewAllLinksUser = require("../controllers/Links/ViewAllLinksUser");
    const UpdateLink = require("../controllers/Links/UpdateLink");
    const ViewHiddenLinksUser = require("../controllers/Links/ViewHiddenLinksUser");

    let router = require("express").Router();

    router.post("/add_link", AddLink);
    router.put("/update_link", UpdateLink);
    router.delete("/delete_link/:id", DeleteLink);
    router.get("/specific_link/:id", SpecificLink);
    router.get("/view_all_links", ViewAllLinks);
    router.get("/view_all_links_user/:id", ViewAllLinksUser);
    router.get("/view_hidden_links_user/:id", ViewHiddenLinksUser);

    app.use("/links", router);
};

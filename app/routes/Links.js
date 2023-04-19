module.exports = app => {

    const Link = require("../controllers/Link");


    let router = require("express").Router();

    router.post("/add_link", Link.AddLink);
    router.put("/update_link", Link.UpdateLink);
    router.delete("/delete_link/:id", Link.DeleteLink);
    router.get("/specific_link/:id", Link.SpecificLink);
    router.get("/view_all_links", Link.ViewAllLinks);
    router.get("/view_all_links_user/:id", Link.ViewAllLinksUser);
    router.get("/view_hidden_links_user/:id", Link.ViewHiddenLinksUser);
    router.get("/total_links", Link.TotalLinks)

    app.use("/links", router);
};

module.exports = app => {

    const AddQRCode = require("../controllers/QR_code/AddQRCode");
    const DeleteQRCode = require("../controllers/QR_code/DeleteQRCode");
    const SpecificQRCode = require("../controllers/QR_code/SpecificQRCode");
    const ViewAllQRCodes = require("../controllers/QR_code/ViewAllQRCodes");
    const ViewAllQRCodesUser = require("../controllers/QR_code/ViewAllQRCodesUser");
    const UpdateQRCode = require("../controllers/QR_code/UpdateQRCode");
    const ViewHiddenQRCodesUser = require("../controllers/QR_code/ViewHiddenQRCodesUser");

    let router = require("express").Router();

    router.post("/add_qr_code", AddQRCode);
    router.delete("/delete_qr_code/:id", DeleteQRCode);
    router.get("/specific_qr_code/:id", SpecificQRCode);
    router.put("/update_qr_code", UpdateQRCode);
    router.get("/view_all_qr_code", ViewAllQRCodes);
    router.get("/view_all_qr_code_user/:id", ViewAllQRCodesUser);
    router.get("/view_hidden_qr_code_user/:id", ViewHiddenQRCodesUser);

    app.use("/qr_code", router);
};

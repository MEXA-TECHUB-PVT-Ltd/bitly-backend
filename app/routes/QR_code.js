module.exports = app => {


    const QRCode = require("../controllers/QRCode");

    let router = require("express").Router();

    router.post("/add_qr_code", QRCode.AddQRCode);
    router.delete("/delete_qr_code/:id", QRCode.DeleteQRCode);
    router.get("/specific_qr_code/:id", QRCode.SpecificQRCode);
    router.put("/update_qr_code", QRCode.UpdateQRCode);
    router.get("/view_all_qr_code", QRCode.ViewAllQRCodes);
    router.get("/view_all_qr_code_user/:id", QRCode.ViewAllQRCodesUser);
    router.get("/view_hidden_qr_code_user/:id",QRCode.ViewHiddenQRCodesUser);

    app.use("/qr_code", router);
};

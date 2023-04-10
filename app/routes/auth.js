module.exports = app => {



    const signIn = require("../controllers/auth/signIn");
    const signUp = require("../controllers/auth/signUp");
    const passwordReset = require("../controllers/auth/passwordReset");
    const newPassword = require("../controllers/auth/newPassword");
    const verifyEmail = require("../controllers/auth/VerifyEmail");
    const verifyOTP = require("../controllers/auth/verifyOTP");
    const AllUsers = require("../controllers/auth/AllUsers");
    const SpecificUser = require("../controllers/auth/SpcificUser");
    const DeleteUser = require("../controllers/auth/DeleteUser");

    let router = require("express").Router();

    router.post("/sign_in", signIn);
    router.post("/sign_up", signUp);
    router.put("/resetPassword", passwordReset);
    router.post("/verifyEmail", verifyEmail);
    router.post("/verifyOTP", verifyOTP)
    router.post("/newPassword", newPassword)
    router.get("/all_users", AllUsers)
    router.get("/specific_user/:id", SpecificUser)
    router.delete("/delete_user/:id", DeleteUser)

    app.use("/auth", router);
};

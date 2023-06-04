import express from "express";
import Mailer from "../mail/mailer.mjs";

const mailRouter = express.Router();

let _mailer;

mailRouter.post("/", (req, res) => {
    if (!_mailer) {
        // Initialize mailer
        _mailer = new Mailer();
    }

    res.json({message: "Message sent"});
});

export default mailRouter;
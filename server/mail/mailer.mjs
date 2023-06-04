import '../loadEnvironment.mjs';
import nodemailer from "nodemailer";

export default class Mailer {
    constructor() {
        this.transport = nodemailer.createTransport({
            host:   "smtp.ethereal.email",
            port:   587,
            secure: false,
            auth:   {
                user: process.env.MAILER_USER,
                pass: process.env.MAILER_PASS,
            },
        });
    }

    async sendMail(message) {
        const info = await this.transport.sendMail({
            from:    message.from,
            to:      message.to,
            subject: message.subject,
            text:    message.text,
            html:    message.html,
        });
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
}
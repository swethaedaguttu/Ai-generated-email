const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: `"AI Email Sender" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text,
    });

    return info.messageId;
    console.log("Email sent successfully");
}

module.exports = { sendEmail };

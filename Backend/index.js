const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { generateEmail } = require("./aiService");
const { sendEmail } = require("./emailService");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
    const { prompt } = req.body;
    const email = await generateEmail(prompt);
    res.json({ email });
});

app.post("/send", async (req, res) => {
    const { to, subject, text } = req.body;
    const result = await sendEmail(to, subject, text);
    res.json({ result });
});
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
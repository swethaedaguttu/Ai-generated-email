import React, { useState } from "react";
import EmailForm from "./EmailForm";
import axios from "axios";

function App() {
  const [emailText, setEmailText] = useState("");
  const [prompt, setPrompt] = useState("");

  const generateEmail = async () => {
    try {
      const res = await axios.post("http://localhost:5000/generate", { prompt });
      setEmailText(res.data.email);
    } catch (err) {
      alert("Error generating email");
      console.error(err);
    }
  };

  const sendEmail = async (to) => {
    try {
      await axios.post("http://localhost:5000/send", {
        to,
        subject: "Generated Email",
        text: emailText,
      });
      alert("Email sent successfully");
    } catch (err) {
      alert("Error sending email");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AI Email Sender</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt"
        style={{ width: "400px", padding: "8px", marginRight: "10px" }}
      />
      <button onClick={generateEmail}>Generate Email</button>
      <EmailForm
        email={emailText}
        setEmail={setEmailText}
        sendEmail={sendEmail}
      />
    </div>
  );
}

export default App;

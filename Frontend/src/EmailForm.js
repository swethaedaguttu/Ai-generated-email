import React, { useState } from "react";

function EmailForm({ email, setEmail, sendEmail }) {
  const [recipient, setRecipient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(recipient);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="email"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient email"
        style={{ width: "300px", padding: "8px" }}
        required
      />
      <br /><br />
      <textarea
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        rows={10}
        cols={60}
        style={{ padding: "10px" }}
      />
      <br /><br />
      <button type="submit">Send Email</button>
    </form>
  );
}

export default EmailForm;
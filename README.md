# ✉️ AI Email Sender

A full-stack application that uses AI to generate and send professional emails. Users can input a prompt to generate an email using an AI model (Groq API or OpenAI), edit the content, and send it to specified recipients.

---

## 🚀 Features

- 🔤 **Prompt-based email generation using AI**
- ✍️ **Editable email content before sending**
- 📧 **Send email to recipients via integrated mail service**
- 💻 **Full-stack implementation (React + Node.js)**
- 🌐 **Environment-secure API key integration**

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- HTML/CSS

### Backend
- Node.js
- Express.js
- Axios
- Dotenv
- Nodemailer (for sending emails)

---

## 📂 Project Structure

Ai-email-sender/
├── Backend/
│ ├── index.js
│ ├── aiService.js
│ ├── emailService.js
│ └── .env
├── Frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── App.js
│ │ ├── EmailForm.js
│ │ └── index.js
│ └── package.json


---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-email-sender.git
cd ai-email-sender

2. Setup the backend

cd Backend
npm install

Create a .env file in the Backend folder:

GROQ_API_KEY=your_groq_api_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

3. Setup the frontend

cd ../Frontend
npm install

Running the App

cd Backend
node index.js

Start the frontend

cd ../Frontend
npm start

🛡 License
This project is licensed under the MIT License.


---

Let me know if you'd like this personalized with your actual GitHub repo and deployed link (if you deployed).




# ✉️ AI Email Sender

A full-stack application that uses AI to generate and send professional emails. Users can input a prompt to generate an email using an AI model (Groq API), edit the content, and send it to specified recipients.

- **Live Demo (Frontend):** [ai-generated-email-6stm.vercel.app](https://ai-generated-email-6stm.vercel.app/)  
- **Backend API:** [ai-generated-email.onrender.com](https://ai-generated-email.onrender.com)  
- **GitHub Repo:** [github.com/swethaedaguttu/Ai-generated-email](https://github.com/swethaedaguttu/Ai-generated-email)

---

## 🚀 Features

- 🔤 Prompt-based email generation using AI  
- ✍️ Editable email content before sending  
- 📧 Send email to recipients via integrated mail service  
- 💻 Full-stack implementation (React + Node.js)  
- 🌐 Environment-secure API key integration

---

## 🛠 Tech Stack

### Frontend
- React.js  
- Axios  
- HTML / CSS  

### Backend
- Node.js  
- Express.js  
- Axios  
- Dotenv  
- Nodemailer (for sending emails)

---

## 📂 Project Structure

```plaintext
Ai-email-sender/
├── Backend/
│   ├── index.js
│   ├── aiService.js
│   ├── emailService.js
│   └── .env
├── Frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── EmailForm.js
│   │   └── index.js
│   └── package.json

⚙️ Installation & Setup

1. Clone the repository
git clone https://github.com/swethaedaguttu/Ai-generated-email.git
cd Ai-generated-email

2. Setup the backend
cd Backend
npm install

Create a .env file inside the Backend folder with your credentials:

env
GROQ_API_KEY=your_groq_api_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

3. Setup the frontend
cd ../Frontend
npm install

▶️ Running the App Locally

Start the backend

cd ../Backend
node index.js
Start the frontend (in a new terminal)

cd ../Frontend
npm start
The frontend runs at http://localhost:3000 and connects to the backend on http://localhost:5000 (or whichever port you've set).

🛡 License
This project is licensed under the MIT License.

👤 Author
Swetha E Daguttu

---

Let me know if you’d like me to finalize it as an actual `README.md` file or help with any tweaks!



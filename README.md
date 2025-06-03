# 🧠 ProofHabit

ProofHabit is a cross-platform productivity app that helps users build lasting habits through AI-powered insights and **group-based accountability**. Users can track habits, receive intelligent nudges, and post daily “proof” (screenshots, links, or notes) in shared groups to stay motivated and consistent.

<br/>

## 🌟 Features

- ✅ **Smart Habit Tracking** – Log daily habits and visualize your streaks
- 🤖 **AI-Powered Nudges** – Personalized encouragement using OpenAI GPT
- 👥 **Group Accountability** – Join groups and post proof of habit completion
- 📊 **Behavioral Analytics** – Identify patterns and optimal times for habits
- 📸 **Media Support** – Upload screenshots, links, or notes as proof

<br/>

## 🧱 Tech Stack

| Layer         | Tech                                    |
|---------------|------------------------------------------|
| Frontend      | React Native (mobile) / React.js (web)   |
| Backend       | Node.js + Express.js                     |
| Database      | PostgreSQL                               |
| Authentication| Firebase Auth / Supabase Auth            |
| AI & NLP      | OpenAI API (GPT-4), Scikit-learn         |
| File Uploads  | Cloudinary or Firebase Storage           |
| Hosting       | Vercel (frontend), Railway/Render (API)  |

<br/>

## 📸 Screenshots (Coming Soon)

<!-- Add screenshots or mockups here in the future -->

<br/>

## 🚀 Getting Started

### Clone the Repo

```bash
git clone https://github.com/your-username/proofhabit.git
cd proofhabit

Install Dependencies
bash
Copy
Edit
npm install
Run the Backend Server
bash
Copy
Edit
npm run dev
Configure your environment variables in a .env file.

Example .env
ini
Copy
Edit
PORT=3000
DATABASE_URL=your_postgres_url
OPENAI_API_KEY=sk-xxxx
<br/>
🧪 Roadmap
 Setup habit tracking & user auth

 Add AI-generated nudges

 Group system with check-in proof posts

 Push notifications & reminders

 Public group discovery

 Offline support

<br/>
📂 Folder Structure
bash
Copy
Edit
proofhabit/
├── controllers/
├── routes/
├── models/
├── middleware/
├── uploads/
├── .env
├── .gitignore
├── README.md
├── server.js
<br/>
🧑‍💻 Contributing
Pull requests and issues are welcome! Please open a discussion or issue first before making big changes.

📄 License
This project is licensed under the MIT License. See LICENSE for details.

💬 Contact
Created by Tyler Mooney
Open to collaboration, feedback, or just geeking out 🤝

yaml
Copy
Edit

---

Let me know if you'd like:
- A version that includes both frontend + backend folders
- Tailored branding/colors or images
- A starter Express + Postgres backend to match this

I'm happy to make that too.


✅ Project Checklist (ProofHabit)
Track your progress step by step as you build out the app.

<details> <summary>🧱 Phase 1: Core Setup</summary>
 Initialize project with TypeScript + Express.js

 Set up .env, .gitignore, and project structure

 Install Prisma and connect to PostgreSQL

 Define and push Habit model

 Create /api/habits routes (GET, POST)

 Test with Postman

</details> <details> <summary>🔐 Phase 2: User Authentication</summary>
 Add Firebase Auth or JWT-based login system

 Create User model in Prisma

 Associate habits with authenticated users

 Add auth middleware for protected routes

 Return only habits owned by logged-in user

</details> <details> <summary>👥 Phase 3: Group System</summary>
 Define Group model

 Create GroupMember join model

 Add routes to create and join groups

 List groups a user belongs to

 Allow each group to be tied to a shared habit

</details> <details> <summary>📸 Phase 4: Proof Posting</summary>
 Create ProofPost model

 Set up file/image uploads (Cloudinary or Firebase Storage)

 Route to submit proof (image, link, or text)

 Route to view group proof feed

</details> <details> <summary>📊 Phase 5: Behavioral Insights & AI Nudges</summary>
 Analyze habit logs for behavior patterns

 Integrate OpenAI API to generate nudges

 Build /api/nudges route for GPT-generated suggestions

 Show insights like “Best Time of Day” for each habit

</details> <details> <summary>🎨 Phase 6: Frontend Integration</summary>
 Create mobile app with React Native or Expo

 (Optional) Create web dashboard with React.js

 Connect frontend to Express API

 Build forms for logging, group interaction, and proof uploads

 Add auth to UI and persist sessions

</details> <details> <summary>🚀 Phase 7: Polish and Launch</summary>
 Improve error handling and validation

 Add streak tracking and gamification (badges, XP)

 Add UI feedback (toasts, spinners, loading states)

 Deploy backend (Railway or Render)

 Deploy frontend (Vercel or Expo Go)

 Add README badges, screenshots, and demo video

</details>
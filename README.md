Dynamic Portfolio Builder (MERN)

A full-stack MERN application that lets users create, edit, and view beautiful personal portfolios with multiple templates.
Users can fill out sections like Hero, About Me, Skills, Projects, Services, Testimonials, and Blog, all dynamically displayed using React and MongoDB.

🚀 Features

🧠 Dynamic Portfolio Creation — Fill a form and auto-generate a live portfolio.

🎨 Multiple Templates — Switch between portfolio templates instantly.

✏️ Edit in Real-Time — Update your data through an editable dashboard.

💾 MongoDB Integration — All portfolio data is stored and fetched from the database.

⚡ Fully Responsive — Works smoothly across all devices.

🛠️ Tech Stack

Frontend:

React.js

Tailwind CSS

Axios

React Router DOM

Backend:

Node.js

Express.js

MongoDB + Mongoose
```
📂 Project Structure
project/
│
├── backend/
│   ├── models/
│   │   └── Portfolio.js
│   ├── routes/
│   │   └── portfolioRoutes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
|   |   |   ├──FormSection/
│   │   │   ├── portfolioSections/
│   │   │   └── MultiSectionForm.jsx
│   │   ├── pages/
│   │   │   └── PortfolioPage.jsx
│   │   ├── api.js
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```
⚙️ Setup Instructions
```
1️⃣ Clone the repository
git clone https://github.com/tulsishuka/Porfolio-Maker.git
cd Folder

2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside the backend folder:

MONGODB_URI=mongodb://localhost:27017/portfolioDB
PORT=3000

Then start the server:

node/nodemon server.js
```

3️⃣ Frontend Setup
```
cd frontend
npm install
npm run dev
```


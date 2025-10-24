import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import portfolioRoutes from "./routes/portfolioRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";
mongoose.connect(MONGODB_URI)
  .then(()=> console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

app.use("/api/portfolios", portfolioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`));

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import otpRoutes from "./routes/otpRoutes.js";
import notesRoutes from "./routes/notesRoutes.js"
dotenv.config();

const app = express();
app.set("trust proxy", 1); 
// Middleware
app.use(cors({
    origin: ["http://localhost:5173", "https://notes-frontendtext-notes-frontend-my.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}));


        
app.use(express.json());
app.use(cookieParser());

// DB connect
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/notes", notesRoutes)




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

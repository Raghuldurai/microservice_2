require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

/* CORS CONFIG */
app.use(cors({
origin: "http://localhost:3000"
}));

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/health",(req,res)=>{
res.json({status:"running"});
});

const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{
console.log(`Login service running on port ${PORT}`);
});
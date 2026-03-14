require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo connected"))
.catch(err=>console.log(err));

app.get("/health",(req,res)=>{
  res.send("OK");
});

const PORT = process.env.PORT || 5002;

app.listen(PORT,()=>{
  console.log("Home service running on port",PORT);
});
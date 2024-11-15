import express from"express";
import dotenv from"dotenv";
import mongoose, { Schema } from"mongoose";
import dbconnect from "./config/database.js";
import User from"./model/user.js";
import companyModel from "./model/Company.js";
import reviewModel from "./model/Review.js";
import likeModel from "./model/Like.js";
import router from "./Routes/feedbackroutes.js";

dotenv.config();
const app=express();
app.use(express.json())

const PORT = 3000;

app.use("/api/v1",router)

dbconnect();

app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`)
})

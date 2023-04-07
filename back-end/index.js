import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import employeeRoute from "./routes/employees.js";
import cookieParser from "cookie-parser";
const app=express();
dotenv.config();

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDb ye bağlanıldı");
    }catch(error){
        throw error;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDb disconnected s");
});

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/employee",employeeRoute);

app.listen(8000,()=>{
    connect();
    console.log("Admin Projesine başlanıldı");
})
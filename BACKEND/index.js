import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import router from "./routes/user.js"; 
import rout from "./routes/login.js"; 
import userRouter from "./routes/Auth.js"; 
 import multer from "multer";
import connectDB from "./DATABASE/db.js"
import express from "express";
import { db_name } from "./constant.js";
import fs from 'fs';
import path from 'path';
import cookieParser from "cookie-parser";




const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true })); // 🔥 ADD THIS

app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views',path.resolve("./views"))
const PORT=process.env.PORT||4000;

app.use(express.urlencoded({ extended: true }));

 app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


connectDB(`${process.env.URI}/${db_name}`); 





app.use("/user",router)
app.use("/login",rout)
app.use("/logOut",rout)
app.use("/current",userRouter)
app.use("/update",userRouter)
app.use("/gemini",userRouter)

app.get("/", (req, res) => {
  res.render("inde")
  
});











app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });




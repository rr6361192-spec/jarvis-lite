import express from "express";
const rout=express.Router()
import {  login,logOut } from "../Controllers/cont.js"; // ✅ correct
rout.route("/").post(login)

rout.get("/",logOut)
export default rout;
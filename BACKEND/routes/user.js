import express from "express";
const router=express.Router()
import { post } from "../Controllers/cont.js"; // ✅ correct
router.route("/").post(post);


export default router;
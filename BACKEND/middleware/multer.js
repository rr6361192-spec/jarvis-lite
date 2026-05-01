import multer from "multer";
import fs from "fs";
import path from "path";

const uploadPath = path.join(process.cwd(), "uploads");

// ✅ force create folder
fs.mkdirSync(uploadPath, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Saving to:", uploadPath); // 🔍 debug
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    console.log("File name:", file.originalname); // 🔍 debug
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

export default upload;
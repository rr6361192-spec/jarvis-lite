import dotenv from 'dotenv';
dotenv.config();  

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Use dotenv only if this file might be run standalone

// Validate env variables


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

// Upload function
const uploadonclaud = async (filepath) => {
  try {
    const result = await cloudinary.uploader.upload(filepath);
    if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
    return result.secure_url;
  } catch (error) {
    if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
    console.error('Cloudinary upload error:', error); // log full error
    throw new Error('Cloudinary upload failed');
  }
};

export default uploadonclaud;
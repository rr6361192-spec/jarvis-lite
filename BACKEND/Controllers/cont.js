import User from "../Model/model.js"
import bcrypt from 'bcrypt'
import genToken from "../config/token.js"


export async function login(req, res) {
  try {
    console.log("hii");
   const allUsers = await User.find();
      console.log(allUsers);
    const { email, password } = req.body;

    console.log(email, password);
    
  const user = await User.findOne({ email: email.trim().toLowerCase() });
    console.log(user)
      


    
    // ✅ FIRST check user
    if (!user) {
      return res.status(404).json({
        message: "User not found ❌",
      });
    }

    // ✅ THEN check password
    
    

    console.log("Login successful ✅");
    console.log(user._id)
     const token=await genToken(user._id)
      console.log(token)
    res.cookie("token",token,{
        httpOnly:true,
       maxAge:7*24*60*60*1000,
       sameSite:"strict",
       secure:false
    })

    // ✅ SEND RESPONSE (don’t use redirect here)
    return res.status(200).json({
      message: "Login successful",
      login: true,
      user,
    });

  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
}
  



export async function post(req, res) {
   
 console.log("hii")
 
    const{ username,email,password}=req.body;
    console.log(username)
    console.log(email)
    console.log(password)
  
    
const user= await User.findOne({email})
    if(user){
        res.json({message:'user already register'})
        console.log("dncdgn")
    }
    else{
const user = await User.create({
        username,
        email,
        password
    });
    const token=await genToken(user._id)

    res.cookie("token",token,{
        httpOnly:true,
       maxAge:7*24*60*60*1000,
       sameSite:"strict",
       secure:false
    })

    console.log(user.password)
    return res.json({
  message: "User created successfully",
   success: true
});
}
 
}
export const logOut=async (req,res)=>{
    try {
        res.clearCookie("token")
         return res.status(200).json({message:"log out successfully"})
    } catch (error) {
         return res.status(500).json({message:`logout error ${error}`})
    }
}
   
  
    
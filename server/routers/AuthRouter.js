const express = require('express');
const router = express.Router();
const OTP  = require('../helpers/otp_helper')
let otp = new OTP;
const UserModel = require('../models/UserModel'); 

router.post("/login",async (req,res) => {
    const email = req.body.email;
    if(!email){
        res.status(404).json({message: "Invalid Email"});
        return;
    }
    await otp.send(email);
    console.log(otp.getOTP());
    res.status(200).json({message:"OTP Sent Successfully!"});
})


router.post('/otp',async (req,res) => {
    const userOtp = req.body.otp;
    const email = req.body.email;

    if(!userOtp || otp.verify(userOtp)){
        res.status(404).json({message: 'Invalid OTP or OTP can be expired'});
        return;
    }
    else{
        try{
            let user = await UserModel.findOne( {email : email} );
            if(!user){
                user = new UserModel({"email" : email});
                await user.save();
            }
            res.status(200).json({message: "OTP Verify"});
            return;
        }catch(err){
            res.status(500).json({message: err});
        }
    }   
});









module.exports = router;
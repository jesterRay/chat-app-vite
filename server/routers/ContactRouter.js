const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');

router.get('/search',async (req,res) => {
    try {
        const email = req.query.data;
        console.log(email);
        const user = await User.find({email: { $regex: email, $options: 'i' }});
        res.status(200).json({data: user});
        return;
    } catch (error) {
        console.log("Error in search route", error);
        res.status(500).json({data: error});
    }
    
})








module.exports = router;
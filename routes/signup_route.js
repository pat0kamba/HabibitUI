const express = require('express');
const router = express.Router();
const User = require('../models/login_models');

// router.get('/signup', async(req,res)=>{ 
//     try{
//         const user = await User.find();
//         res.json(user);

//     }catch(err)
//     {
//         res.send('Error'+err)
//     }
// });

router.post('/signup', async(req, res)=>{
    try{
        const user = new User({
            Firstname:req.body.Firstname,
            LastName:req.body.LastName,
            Password:req.body.password,
            Email:req.body.Email,
        });
        await user.save();
        res.json(user);
        res.redirect('/userLogin');

    }catch(err)
    {
        res.send('Error'+err)
    }
});

module.exports = router;
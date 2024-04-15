const express = require('express');
const router = express.Router();
const User = require('../models/login_models');

router.get('/userLogin', async(req, res) => {
    try{
        const user = await User.find();
        res.json(user);

    }catch(err)
    {
        res.send('Error'+err)
    }
});

router.get('/userLogin/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user);

    }catch(err)
    {
        res.send('Error'+err)
    }
});

router.post('/userLogin', async(req, res)=>{
    try{
        const user = new User({
            Firstname:req.body.Firstname,
            LastName:req.body.LastName,
            Password:req.body.password,
            Email:req.body.Email,
        });
        await user.save();
        res.json(user);

    }catch(err)
    {
        res.send('Error'+err)
    }
});

router.patch('/userLogin/Update/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        login.Firstname = req.body.Firstname;
        login.LastName = req.body.LastName;
        login.Email = req.body.Email;
        // login.Password = <PASSWORD>;
        await user.save();
        res.json(user);

    }catch(err)
    {
        res.send('Error'+err)
    }
})

router.delete('/userLogin/delete/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        await user.remove();
        res.json(user);

    }catch(err)
    {
        res.send('Error'+err)
    }
});
module.exports = router;
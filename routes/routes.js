const express = require("express")
const User = require("../Database/User")

const router = express.Router();

router.get('/GetUsers', (req, res) => {
    res.send('GetUsers API')
});

router.post('/RegisterUser', async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name
        });

        res.status(200).json(user)
    } 
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

module.exports = router;
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });

    try {
        const user = await newUser.save();
        return res.status(201).json(user); // Return after sending a response
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({ message: "Wrong username or password"});
        }

        
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        
        if (originalPassword !== req.body.password) {
            return res.status(401).json({ message: "Wrong username or password" });
        }

        const accessToken = jwt.sign(
            {id:user._id, isAdmin: user.isAdmin}, 
            process.env.SECRET_KEY,
            {expiresIn : "7d"}
            );
        
        const {password, ...info} = user._doc;

        

        return res.status(200).json({...info, accessToken});
        // return res.status(200).json({ message: "Logged in successfully",});
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});

module.exports = router;

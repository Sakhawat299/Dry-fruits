const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

const SECRET_KEY = "yourSecretKey";
const REFRESH_SECRET = "yourRefreshSecret";

let refreshTokens = []; 


const generateAccessToken = (user) => {
    return jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
};


const generateRefreshToken = (user) => {
    return jwt.sign({ userId: user._id, email: user.email }, REFRESH_SECRET, { expiresIn: "7d" });
};


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await EmployeeModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "No record found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "The password is wrong" });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        
        refreshTokens.push(refreshToken); 

        res.json({ message: "Success", accessToken, refreshToken });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});


app.post("/refresh-token", (req, res) => {
    const { token } = req.body;

    if (!token) return res.status(401).json({ message: "Refresh token require" });
    if (!refreshTokens.includes(token)) return res.status(403).json({ message: "Invalid  token" });

    jwt.verify(token, REFRESH_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid  token" });

        const newAccessToken = generateAccessToken({ _id: user.userId, email: user.email });
        res.json({ accessToken: newAccessToken });
    });
});


app.post("/logout", (req, res) => {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter(t => t !== token); // Remove token
    res.json({ message: "Logged out successfully" });
});


app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;

        const employee = await EmployeeModel.create(req.body);
        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

require("dotenv").config();

const verifyToken = require("./middleware/authMiddleware");
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Peer Academic Exchange Platform API is running...");
});

const PORT = 5000;

app.get("/api/profile", verifyToken, (req, res) => {

    res.json({
        message: "Welcome to your profile",
        user: req.user
    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
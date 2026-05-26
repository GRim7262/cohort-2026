require("dotenv").config()
const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const jwtPassword = process.env.JWT_PASSWORD
const app = express()
const port = 3000

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err);
    }
}

connectDB();

const User = mongoose.model('users', {
    name: String,
    username: String,
    password: String
})

app.use(express.json())


app.post("/signup", async (req, res) => {

    const { name, username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username: username })

        if (existingUser) {
            return res.status(400).send("username already exists")
        }

        const user = new User({
            name,
            username,
            password
        })

        await user.save()

        res.json({
            msg: "User created successfully"
        })
    } catch (err) {

        res.status(500).json({
            msg: "Something went wrong",
            error: err.message
        })
    }
})

app.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({
            username: username,
            password: password
        })

        if (!user) {
            return res.status(403).json({
                msg: "Invalid username or password"
            })
        }

        const token = jwt.sign({ username: user.username }, jwtPassword, { expiresIn: "10m" })
        res.json({
            token,
            username: user.username
        })
    } catch (err) {
        res.status(500).json({
            msg: "Something went wrong",
            error: err.message
        })
    }


})

app.get("/users", async (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username;

        const otherUsers = await User.find({
            username: { $ne: username }
        })
        res.json({
            users: otherUsers
        })
    } catch (err) {
        return res.status(403).json({
            error: err.message
        });
    }
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})
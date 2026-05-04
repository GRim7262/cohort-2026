const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "123456"
const app = express()
const port = 3000;

app.use(express.json())

const ALL_USERS = [{
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
},
{
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
},
{
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
}
]

const userExists = (username, password) => {
    // for (let i = 0; i < ALL_USERS.length; i++) {
    //     if (
    //         username === ALL_USERS[i].username &&
    //         password === ALL_USERS[i].password
    //     ) {
    //         return true
    //     }
    // }
    // return false

    // return ALL_USERS.some(user => user.username === username && user.password === password)
    return ALL_USERS.find(user => user.username === username && user.password === password)
}

// console.log(userExists("priya@gmail.com", "123321"))

app.post("/signin", (req, res) => {
    const { username, password } = req.body;

    const user = userExists(username, password)

    if (!user) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db"
        })
    }

    // if (!userExists(username, password)) {
    //     return res.status(403).json({
    //         msg: "User doesnt exist in our in memory db"
    //     })
    // }

    const token = jwt.sign({ username: user.username }, jwtPassword, { expiresIn: "10m" })
    res.json({
        token,
        username: user.username
    })
})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username;

        const otherUsers = ALL_USERS.filter((user) => user.username !== username)
        res.json({
            users: otherUsers
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
            error: err
        });
    }
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})
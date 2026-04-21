const express = require("express")
const z = require("zod")
const port = 3000;
const app = express();
app.use(express.json())

const schema = z.array(z.number())
let numberOfRequest = 0;

const calculateRequest = (req, res, next) => {
    numberOfRequest++;
    console.log(`Number of request: ${numberOfRequest}`);
    next();
}

const avgTime = (req, res, next) => {
    const beforeTime = Date.now()

    res.on("finish", () => {
        const afterTime = Date.now();
        const duration = afterTime - beforeTime;

        console.log(`Avrage time taken is ${duration}ms`);
    })
    next();
}

app.use(calculateRequest)
app.use(avgTime)

app.get('/', (req, res) => {
    const kidneyId = parseInt(req.query.id);
    const username = req.headers.username;
    const pass = req.headers.pass;

    if (username !== "admin" || pass !== "test") {
        return res.status(411).json({
            msg: "Wrong inputs"
        })
    }

    if (kidneyId !== 1 && kidneyId !== 2) {
        return res.status(411).json({
            msg: "id should be 1 | 2"
        })
    }
    res.send("worked " + numberOfRequest)
})

app.post("/", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)

    if (!response.success) {
        return res.status(400).json({
            msg: "Invalid input",
            errors: response.error.message
        })
    }
    const kidneyLength = response.data.length;

    res.status(200).json({
        msg: `Your kindey length is ${kidneyLength}`,
        response
    })
})

app.use((err, req, res, next) => {
    res.status(500).send("Something went wrong")
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})
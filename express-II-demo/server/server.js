const express = require('express');
const cors = require("cors")
const app = express();
const PORT = 8080;
const contestantRoutes = require("./routes/contestants")

// this is middleware
app.use(cors())
app.use(express.json());
app.use(express.static("public"))
//this is custom middleware
app.use((req, res, next) => {
    // write your middleware code here
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
        res.status(400).send('Server requires application/json')
    } else {
        next();
    }
})

app.get("/", (req, res) => {
    res.send("Welcome to /");
})
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("successfully posted")
})


app.use("/contestants", contestantRoutes);
// app.use("/seasons", seasonsRoutes)

app.listen(PORT, () => {
    console.log("Started listening at http://localhost:" + PORT);
})
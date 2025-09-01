const express  = require("express")
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Sarah John");
})

app.get('/anselem', (req, res) => {
    res.send("Hello, Welcome to Sammy world. Get all your latest updates here!");
})

const port = 3000;

app.listen(process.env.port || port);
console.log(`Web server is listening at port ${process.env.port || port}`)
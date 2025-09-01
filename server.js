const express  = require("express")
const app = express();
const route = require("./routes/")

app.use('/', route)

const port = 3000;

app.listen(process.env.port || port);
console.log(`Web server is listening at port ${process.env.port || port}`)
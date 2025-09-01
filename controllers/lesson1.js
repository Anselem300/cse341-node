const home = (req, res) => {
    res.send("Hello Sarah John");
}

const john = (req, res) => {
    res.send("Hello John Doe");
}

const anselem = (req, res) => {
    res.send("Hello, Welcome to Sammy world. Get all your latest updates here!");
}

module.exports = {
    home, anselem, john
}
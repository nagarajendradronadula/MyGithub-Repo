const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let binanceCoinUSD = 0;
let binanceCoinINR = 0;
let bitcoinUSD = 0;
let bitcoinINR = 0;
let ethereumUSD = 0;
let ethereumINR = 0;

let INR = 0;

app.get("/", (req,res) => {
    res.send("This is Server for Backend");
});

//crypto currency value
try {
    axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd")
    .then(response => {
        binanceCoinUSD = response.data.binancecoin.usd;
        bitcoinUSD = response.data.bitcoin.usd;
        ethereumUSD = response.data.ethereum.usd;
        // console.log(binanceCoinUSD, bitcoinUSD, ethereumUSD);

        // INR value
        try{
            axios.get("https://open.er-api.com/v6/latest/USD")
            .then(response => {
                // console.log(INR);
                INR = response.data.rates.INR;
                binanceCoinINR = binanceCoinUSD * INR;
                bitcoinINR = bitcoinUSD * INR;
                ethereumINR = ethereumUSD * INR;
            })
        } catch(error) {
            console.log(error);
            res.send("error occurred refer console");
        }
    },
    error => {
        // console.log(error);
    }
)
} catch (error) {
    // console.log(error);
    res.send({error: 'an error occurred'});
}



app.get("/crypto", (req, res) => {
    res.render("index.ejs", {binanceCoinUSD, bitcoinUSD, ethereumUSD, binanceCoinINR, bitcoinINR, ethereumINR})
});

app.get("/sendData", (req, res) => {
    res.json({binanceCoinUSD, binanceCoinINR, bitcoinUSD, bitcoinINR, ethereumUSD, ethereumINR})
});

app.listen(port, () => {
    console.log(`Server listening at ${port}
        link: http://localhost:${port}`);
});
const express = require("express");
const app = express();
const expressError = require("./expressError");

// app.use((req, res, next) => {
//     console.log("Hi, this is 1st middleware");
//     // res.send("Midlleware is finished");
//     return next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, this is 2nd middleware");
//     // res.send("Midlleware is finished");
//     return next();
// });

const checkToken =  (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }else{
        throw new expressError(401, "Access Denied!");
    }
};

app.get("/api", checkToken, (req,res) => {
    res.send("Hi, this is api");
});

//logger
// app.use((req, res, next) => {
//     req.time = new Date(Date.now());
//     console.log(req.method, req.time);
//     next();
// });

app.get("/", (req,res) => {
    res.send("Hi, this is root");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

app.get("/err", (req, res) => {
    abcd == abcd;
});

app.get("/admin", (req, res) => {
    throw new expressError(403, "Access Forbidden!");
}) 

app.use((err, req, res, next) => {
    // console.log("========= ERROR ========");
    let {status, message} = err;
    res.status(status).send(message);
    // next(err);
    res.send(err);
});

// app.use((err, req, res, next) => { 
//    res.status(404).send("Page Not Found");
// });

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});
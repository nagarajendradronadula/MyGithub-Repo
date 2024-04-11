const express = require("express");
const app = express();
// console.dir(app);
let port = 8080; //3000 can also be used

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request recieved");
//     // res.send("This is a basic response");
//     // res.send({
//     //     name: "apple",
//     //     color:"red"
//     // });
//     res.send("<h1>This is a basic response</h1>");
// });

app.get("/", (req, res) => {
    res.send("You are on root path");
})
// app.get("/one", (req, res) => {
//     res.send("You are on first path");
// })
// app.get("/two", (req, res) => {
//     res.send("You are on second path");
// })
// app.get('*', (req, res) => {
//     res.send("Page not found");
// })

// app.post("/", (req, res) => {
//     res.send("You sent a post request");
// })
app.get("/:username/:id",(req,res) => {
    console.log(req.params);
    let code = `<h1>Hello and welcome to the page of @${req.params.username}!</h1>`
    res.send(code);
})

app.get("/search", (req, res) => {
    // console.log(req.query);
    let {q} = req.query;
    res.send(`no results generated for ${q}`);
})
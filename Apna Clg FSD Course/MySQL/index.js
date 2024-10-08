const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "dronadula103"
});

// let getRandomUser = () => {
//     return [
//         faker.datatype.uuid(),
//         faker.internet.userName(),
//         faker.internet.email(),
//         faker.internet.password()
//     ];
// };

// let q = "SHOW TABLES";
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [["123a", "123_newusera", "abac@gmail.com", "abca"],["123b", "123_newuserb", "abbc@gmail.com", "abcb"]];

// let data = [];
// for(let i  = 0; i <= 100; i++){
//     data.push(getRandomUser()); //creating 100 fake users
// };

// try{
//     connection.query(q, [data], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();

app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // console.log(result[0]["count(*)"]);
            let count = result[0]["count(*)"];
            // res.send("Success");
            res.render("home.ejs", { count })
        });
    } catch (err) {
        console.log(err);
        // res.send("Error at Data Base");
    }
});

app.get("/users", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            // console.log(result);
            // res.send(result);
            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        // res.send("Error at Data Base");
    }
});

//Edit route
app.get("/user/:id/edit" , (req,res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    // console.log(id);
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]);
            let user = result[0];
            res.render("edit.ejs", { user });
            // console.log(result);
        });
    } catch (err) {
        console.log(err);
        res.send("Internal Server Error");
    }
});

//update (db) route
app.patch("/user/:id", (req, res) => {
    // res.send("updated");
    let { id } = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // console.log(result[0]);
            let user = result[0];
            if(formPass != user.password){
                res.send("Wrong Password");
            }else{
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/users");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("Internal Server Error");
    }
});

//delete form
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        console.log(result[0]);
        let user = result[0];
        res.render("delete.ejs", { user });
      });
    } catch (err) {
      res.send("some error with DB");
    }
});

//delete db route
app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/users");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });

app.post("/users/add", (req, res) => {
    let { id, username, email, password } = req.body;
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("add.ejs");
        });
    } catch (err) {
        console.log(err);
        res.send("Internal Server Error");
    }
});

let port = 8080;
app.listen(port, () => {
    console.log(`server is listening to port ${port}`);
});
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("../database/sample1.db", (err)=>{
    if(err){
        console.log( err.message );
    }
    console.log("Connection successfully");
});

console.log("--- CREATE TABLES ---");
db.run("CREATE TABLE IF NOT EXISTS USER (username text, password text);");
db.run("CREATE TABLE IF NOT EXISTS PROJECT (name text, value int);");


console.log("--- INSERT DATA ---");

db.run("INSERT INTO USER (username, password) VALUES (?, ?)", ["jefferson", "1234"], (err)=>{
    if(err){
        console.log(err.message);
    }
    console.log("Has been inserted")
});

db.run("INSERT INTO USER (username, password) VALUES (?, ?)", ["lucas", "lucaslucas"])
db.run("INSERT INTO USER (username, password) VALUES (?, ?)", ["manuel", "contraManuel3"])
db.run("INSERT INTO USER (username, password) VALUES (?, ?)", ["david", "david1234"])

db.run("INSERT INTO PROJECT (name, value) VALUES (?, ?)", ["Mision TIC", "3000000"])
db.run("INSERT INTO PROJECT (name, value) VALUES (?, ?)", ["Investigacion 1", "9000000"])


console.log("--- READ DATA ---");

db.all("SELECT * from USER", (err, rows) => {
    if(err){
        console.log( err.message );
    }
    console.log( rows );
});

db.all("SELECT username from USER", (err, rows) => {
    if(err){
        console.log( err.message );
    }
    console.log( rows );
});


console.log("--- UPDATE DATA ---");

db.run("UPDATE USER set password = ? WHERE username = ? ", ["david123456", "david"] , (err) => {
    if(err){
        console.log( err.message );
    }
});

console.log("--- READ DATA ---");

db.all("SELECT * from USER", (err, rows) => {
    if(err){
        console.log( err.message );
    }
    console.log( rows );
});

console.log("--- DELETE DATA ---");

db.run("DELETE FROM USER WHERE username = ? ", ["lucas"], (err)=>{
    if(err){
        console.log(err.message);
    }
    console.log("Has been deleted")
});

// CRUD
// C Create
// R Read
// U Update
// D Delete

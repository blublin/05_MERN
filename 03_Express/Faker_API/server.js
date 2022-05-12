// const { faker } = require('@faker-js/faker');
const express = require("express");
const User = require("./User")
const Company = require("./Company")
const app = express();
const port = 8000;



app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/", (_, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new/", (_, burger) =>{
    burger.json( new User() );
})
app.get("/api/companies/new/", (_, burger) =>{
    burger.json( new Company() );
})
app.get("/api/user/company/", (_, burger) =>{
    burger.json({user: new User(), company: new Company()});
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );
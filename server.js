const express = require("express");
const path=require("path");
const { faker }=require("@faker-js/faker")


const app = express(); // Correctly instantiate the app
const port = 3000;

app.get("/", ( req,res ) => {
    res.sendFile(path.join(__dirname, "index.html"))
});


app.get("/random-data" , ( req,res ) => {
   
    const data={
        name: faker.person.fullName(),
        email: faker.internet.email(),
        address:faker.location.country(),
        company:faker.company.buzzVerb(),
    }
    res.json(data);
});



app.listen(port, () => 
    console.log(`Server is started on port: ${port}`) // Use backticks for template literals
);

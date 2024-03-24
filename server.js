const express = required("express");
const app = express();
appuse(express.static("public"));

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("api/crafts",(req,res) =>{
    console.log("someone is requesting our api");
    const crafts = [];
    
})
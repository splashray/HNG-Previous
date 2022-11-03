const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({name: 'John'})
});

app.get("/json", (req, res) => {
    res.status(200).json({type: 'Json-Format'})
});



app.listen(3000, ()=>{
    console.log("connected to backend");
});
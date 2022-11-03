const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({name: 'John'})
});

app.get("/json", (req, res) => {
    res.status(200).json({type: 'Json-Format'})
});


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`connected to backend, ${port}`);
});
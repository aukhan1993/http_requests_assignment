const express = require("express");
const cors = require('cors');
const res = require("express/lib/response");

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true}));


let books = [];

app.get("/get_request", (req, res) => {
    //res.send('This is get request');
    res.json({"message": "This is GET request."});
   });

app.post('/post_request', (req, res) => {
    // console.log(req);
    res.json({"message":"This is POST request."});
});

app.put('/put_request', (req, res) => {
    res.json({"message":"This is a PUT request."});
});

app.delete('/delete_request', (req, res) => {
    //const isbn = req.params.isbn;
    //console.log(`The isbn passed in the URL is ${isbn} ${bo}`);
    res.json({"message":"This is a DELETE request."});
});

app.get('/time_now', (req, res) =>{
    const timeNow = new Date()
    res.json({"time":timeNow.toTimeString()})
});

app.listen(3000, () => {
    console.log("The server is running on port 3000");
});
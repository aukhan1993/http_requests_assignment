const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));


let users = [];

app.get("/get_request", (req, res) => {
    //res.send('This is get request');
    res.json({ "message": "This is GET request." });
});

app.post('/post_request', (req, res) => {
    // console.log(req);
    res.json({ "message": "This is POST request." });
});

app.put('/put_request', (req, res) => {
    res.json({ "message": "This is a PUT request." });
});

app.delete('/delete_request', (req, res) => {
    res.json({ "message": "This is a DELETE request." });
});

app.get('/time_now', (req, res) => {
    const timeNow = new Date()
    res.json({ "time": timeNow.toTimeString() })
});

// Method for Sign Up request.
app.post('/sign_up', (req, res) => {
    const user = req.body;
    if (user.name.length === 0 || user.email.length === 0 || user.password.length === 0) {
        res.send("<h3>Sign Up failed...! Please add values for all parameters</h3>");
        return
    }
    else {
        users.push(user);
        res.send("<h3>Sign up Successfully!</h3>");
    }
})

// Method for Sign in request.
app.post('/sign_in', (req, res) => {
    const user = req.body;
    if(user.email.length === 0 || user.password.length === 0) {
        res.send("<h3>Sign In failed...! Please add values for all parameters</h3>");
    }
    else{
        for(let u of users){
            if(u.email === user.email && u.password === user.password){
                console.log(u);
                res.send("<h3>Sign In Successfully...!</h3>");
                return;
            }
        }
        res.send("<h3>Your password or email is incorrect.</h3>");
    }
})


app.listen(3000, () => {
    console.log("The server is running on port 3000");
});
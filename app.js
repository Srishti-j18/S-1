const express = require("express")
const path = require("path");
const fs = require("fs");
// const { name } = require("ejs");
const port = 3000;
const app = express();

// Express specific stuff
app.use('/static', express.static('static'))// For serving static files
app.use(express.urlencoded())
// Pug specific stuff
app.set('view engine', 'pug')// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//Set the view directory

// Endpoints
app.get('/', (req, res) => {
    const con = "Hey How are you?"
    const params ={'title':'nodemon is the best command',"content":con}
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res) => {
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputToWrite = `The name of the client is ${name},${age}years old,${gender}, residing at ${address}. More about her/him : ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);
    const con = "Thankyou";
    const params = { 'message': 'Your form has been submitted successfully',"content":con };
    res.status(200).render('index.pug', params);
})


// Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
}); 

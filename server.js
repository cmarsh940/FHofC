const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

app.use (express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
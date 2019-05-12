var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var routes = require('./controllers/controller.js');

app.use(static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(routes);
var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});
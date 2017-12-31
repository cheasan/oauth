const express = require("express");
const app = express();
const routes = require("./routes/auth");
//set up view engine
app.set('view engine', 'ejs');

//Routes
app.use('/auth', routes);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, ()=> {
    console.log("App listening to port 3000...");
});
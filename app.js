const express = require('express'),
    path = require('path'),
    morgan = require('morgan');

const app = express(),
    port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const home = require('./routes/home'),
    about = require('./routes/about');

app.all('/', home);
app.all('/about', about);


app.use((req, res) => res.status(404).render('./err/404'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).render('./err/500');
});

app.listen(port, () => {
    console.log('Express started from localhost: ' + port);
});


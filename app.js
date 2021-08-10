require('dotenv').config();

const express = require('express'),
    path = require('path'),
    morgan = require('morgan');

const app = express(),
    port = process.env.PORT || 3000;

app.use(morgan(process.env.LOG_LEVEL));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.all('/', require('./routes/home'));
app.all('/about', require('./routes/about'));
app.post('/login', require('./routes/login'));

app.use((req, res) => res.status(404).render('./err/404'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).render('./err/500');
});

app.listen(port, () => {
    console.log('Express started from ' + process.env.DOMAIN + ': ' + port);
});


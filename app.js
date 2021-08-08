const express = require('express'),
    path = require('path'),
    morgan = require('morgan');

const app = express(),
    port = 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const home = require('./routes/home'),
    about = require('./routes/about');

app.all('/', home);
app.all('/about', about);

app.post('/login', (req, res) => {
    
    const data = [
        { login : 'admin', password : 'admin' },
        { login : 'admin1', password: '12345' }
    ];

    let user = data.find(el => {
        return el.login === req.body.login && el.password === req.body.password;
    });
    

    user ? res.send('Login is complited') :
    res.status(401).send('Login is failed');
});




app.use((req, res) => res.status(404).render('./index', { title: "404" }));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).render('./index', { title: "Error" });
});

app.listen(port, () => {
    console.log('Express started from localhost: ' + port);
});


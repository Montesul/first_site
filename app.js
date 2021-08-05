const express = require('express'),
path = require('path');

const app = express(),
    port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => res.render('index', { title: "Home" }));

app.get('/about', (req, res) => res.render('index', { title: "Home" }));

app.use((req, res) => res.status(404).render('index', { title: "Home" }));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).render('index', { title: "Home" });
});

app.listen(port, () => {
    console.log('Express started from localhost: ' + port);
});


const express = require('express'),
    path = require('path');

const app = express(),
    port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.render('./layouts/index', { title: "Home" }));

app.get('/about', (req, res) => res.render('./layouts/index', { title: "About" }));

app.use((req, res) => res.status(404).render('./layouts/index', { title: "404" }));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).render('./layouts/index', { title: "Error" });
});

app.listen(port, () => {
    console.log('Express started from localhost: ' + port);
});


const express = require('express'),
    routes = express.Router();

const menu = require('./menu');

// Home page    
routes.get('/', (req, res) => res.render('./layouts/home', {menu: menu, title: menu[0].title}))
    .post('/', (req, res) => res.render('./layouts/home', {menu: menu, title: menu[0].title}))
    .put('/', (req, res) => res.render('./layouts/home', {menu: menu, title: menu[0].title}))
    .delete('/', (req, res) => res.render('./layouts/home', {menu: menu, title: menu[0].title}));

// About page
// routes.get('/about', (req, res) => res.render('index', { title: 'About' }));
// routes.post('/about', (req, res) => res.render('index', { title: 'About' }));
// routes.put('/about', (req, res) => res.render('index', { title: 'About' }));
// routes.delete('/about', (req, res) => res.render('index', { title: 'About' }));

module.exports = routes;




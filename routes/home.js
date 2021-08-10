const express = require('express'),
    routes = express.Router();

const menu = require('./menu');

// Home page    
routes.get('/', (req, res) => res.render('./layouts/home', {name: 'Gust', menu: menu, title: menu[0].title}))
    .post('/', (req, res) => res.render('./layouts/home', {name: 'Up', menu: menu, title: menu[0].title}))
    .put('/', (req, res) => res.render('./layouts/home', {menu: menu, title: menu[0].title}))
    .delete('/', (req, res) => res.render('./layouts/home', {menu: menu, title: menu[0].title}));

module.exports = routes;




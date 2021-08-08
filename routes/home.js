
const express = require('express'),
    routes = express.Router();
   
// Home page    
routes.get('/', (req, res) => res.render('index', { title: 'Home' }));
routes.post('/', (req, res) => res.render('index', { title: 'Home' }));
routes.put('/', (req, res) => res.render('index', { title: 'Home' }));
routes.delete('/', (req, res) => res.render('index', { title: 'Home' }));

// About page
routes.get('/about', (req, res) => res.render('index', { title: 'About' }));
routes.post('/about', (req, res) => res.render('index', { title: 'About' }));
routes.put('/about', (req, res) => res.render('index', { title: 'About' }));
routes.delete('/about', (req, res) => res.render('index', { title: 'About' }));

module.exports = routes;




const express = require('express');

const express = require('express'),
    routes = express.Router();

const url = '/about';


routes.get(url, (req, res) => {
    res.render('index', {title: 'About'});
})

routes.post(url, (req, res) => {
    
    const users = [
        { login : 'admin', password : 'admin' },
        { login : 'admin1', password: '12345' }
    ];

    let user = users.find(el => {
        return el.login === req.body.login && el.password === req.body.password;
    });
    
    user ? res.render('index', {title: 'Login is complited'}):
    res.status(401).render('index', {title: 'Login is failed'});
})

module.exports = routes;
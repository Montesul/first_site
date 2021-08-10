const express = require('express'),
    routes = express.Router();

const url = '/about',
    menu = require('./menu');


routes.get(url, (req, res) => {
    res.render('./layouts/about', {name: 'Gust', menu: menu, title: menu[1].title});
})

routes.post(url, (req, res) => {
    
    const users = [
        { login : 'admin', password : 'admin' },
        { login : 'admin1', password: '12345' }
    ];

    let user = users.find(el => {
        return el.login === req.body.login && el.password === req.body.password;
    });
    
    user ? res.render('./layouts/about', {title: 'Login is complited'}):
    res.status(401).render('./layouts/about', {title: 'Login is failed'});
    // user ? res.json({title: 'Login is complited'}):
    // res.status(401).json({title: 'Login is failed'});
})

module.exports = routes;
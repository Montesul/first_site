const express = require('express'),
    routes = express.Router();


routes.post('/login', (req, res) => {
    const users = [ 
        { login: 'Alex', password: '12345qwer' },
        { login: 'Sam', password: 'qazwsx122333' } 
    ]; 
    
    console.log(req.body);

    let user = users.find(el => {
        return el.login === req.body.login && el.password === req.body.password;
    });

    if (user) {
        res.json({ "loggined" : "complited" });
    } else {
        res.json({ "loggined" : "fail" });
    }


});

module.exports = routes;
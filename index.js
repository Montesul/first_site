const express = require('express'),
          app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res) => {
    res.type('text/html');
    res.status(404);
    res.send('404 - Not found');
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.type('text/html');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), () => {
    console.log('Express started from localhost: ' + app.get('port'));
});

// page 48
const express = require('express');
const app = express();
const bodyParser = require('body-parser').json();
const port = 5656;

app.use(bodyParser);

app.use((req, res, next) => {
   // console.log(JSON.stringify((req, null, 2)));
   console.log(`Handling ${req.method} request for ${req.originalUrl}`);
   next();
});

app.get('/', (req, res, next) => {
    console.info('In /');
    res.send('Welcome to the jungle!'); // Handle the request
});

app.post('/data', (req, res, next) => {
    console.info('I am way in the data');
    console.info(`Data ${JSON.stringify(req.body)}`); // Handle the request
    res.send(`Data ${JSON.stringify(req.body)}`); // Handle the request
});

app.use((req, res, next) => {
    console.error(`unknown route: ${req.method} ${req.originalUrl}`);
    res.status(404).send('Dude, that is an unsupported method/route');
});

const server = app.listen(port, err => {
    if (err) {
        console.error(`Error listening: ${err}`);
        process.exit(1);
    }
    console.info(`Listening on port ${port}`);
});


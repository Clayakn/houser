const c = require('./controller');
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

require('dotenv').config();

const app = express(); 

app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
}).catch(error => {
    console.log('error from massive connection', error)
})

app.get('/api/houses', c.readAll);
app.post('/api/houses', c.create);
app.delete('/api/houses/:id', c.delete);


PORT = 4000
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
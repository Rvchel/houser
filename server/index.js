require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controllers/houseController');

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected.');
});

//endpoints
app.get('/api/houses', controller.getHouse);
app.delete('/api/house/:id', controller.deleteHouse);
app.put('/api/house/:id', controller.updateHouse);
app.post('/api/house', controller.addHouse);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
});
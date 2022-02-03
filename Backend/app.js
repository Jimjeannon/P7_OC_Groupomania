const express = require('express');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const app = express();


app.use((req, res, next) => {
    // Ce header permet  à notre API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    // à notre API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // Envoyer des requêtes avec les méthodes mentionnées
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', userRoutes);

module.exports = app;
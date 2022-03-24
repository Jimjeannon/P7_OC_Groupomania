const path = require("path");
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const comRoutes =  require ('./routes/comment');

const cookieParser = require("cookie-parser");
const express = require('express');

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

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/like', postRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', comRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
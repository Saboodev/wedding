const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

const password = '051024'; // Mot de passe prédéfini

// Middleware pour l'authentification de base
const basicAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Basic ')) {
        const credentials = Buffer.from(authHeader.slice('Basic '.length), 'base64').toString().split(':');
        const username = credentials[0];
        const userPassword = credentials[1];

        if (username === 'admin' && bcrypt.compareSync(userPassword, password)) {
            next(); // Authentification réussie, passez à la prochaine middleware
        } else {
            res.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
            res.status(401).send('Authentication required');
        }
    } else {
        res.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
        res.status(401).send('Authentication required');
    }
};

// Route protégée
app.get('/protected', basicAuth, (req, res) => {
    res.send('Content protected by password');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

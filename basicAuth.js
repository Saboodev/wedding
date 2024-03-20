const bcrypt = require('bcrypt');
const config = require('../config');

const basicAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Basic ')) {
        const credentials = Buffer.from(authHeader.slice('Basic '.length), 'base64').toString().split(':');
        const username = credentials[0];
        const userPassword = credentials[1];

        if (username === 'admin' && bcrypt.compareSync(userPassword, config.passwordHash)) {
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

module.exports = basicAuth;

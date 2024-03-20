// config.js

const bcrypt = require('bcrypt');

const config = {
    // Autres configurations...
    passwordHash: bcrypt.hashSync('votre_mot_de_passe', 10)
};

module.exports = config;

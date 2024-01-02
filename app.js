const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'sql.freedb.tech',
    user: process.env.DB_USERNAME || 'freedb_node-ejs',
    password: process.env.DB_PASSWORD || '!%$x8j2D!QFRy&t',
    database: process.env.DB_NAME || 'freedb_dbnodejs',
});


// Connexion à la base de données
pool.getConnection((err, con) => {
    if (err) console.error('Erreur de connexion à la base de données:', err);
    console.log('Connecté à la base de données MySQL');
    
});

module.exports = pool.promise()

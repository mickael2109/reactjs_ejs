import express from 'express'
import cors from 'cors'
import ProjetRoute from './routes/ProjetRoute.js'

/**
 *  VARIABLE
 */
const app = express()
const port = 3001


/**
 *  DEFINITION DU MIDDLEWARE PUR CONNEXION AVEC BD
 */
app.use(express.json())
app.use(cors())

/*
 * ROUTES
 */
app.use(ProjetRoute)

app.listen(port, () => {
    console.log('Server is listening on port : http://localhost:'+port.toString())
})

// const express = require('express')
// const app = express()
// const { status } = require('express/lib/response')
// const morgan = require('morgan')
// const mysql = require('mysql2')
// const myConnection = require('express-myconnection')
// const Connection = require('mysql/lib/Connection')
// const notesRoutes = require('./routes/notesRoutes')

// require('dotenv').config()


// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });


// // Connexion à la base de données
// pool.getConnection((err, con) => {
//     if (err) console.error('Erreur de connexion à la base de données:', err);
//     console.log('Connecté à la base de données MySQL');
    
// });

// /*
//  *  DEFINITION DU MIDDLEWARE PUR CONNEXION AVEC BD
//  */
// app.use(myConnection(mysql,pool,'pool')) //pool c'est la stratégie

// /*
//  *  RESSOURCES STATIC
//  */
// app.use(express.static('public'))

// /*
//  *  TEMPS D'EXECUTION
//  */
// app.use(morgan('dev'))


// /*
//  *  EXTRACTION DES DONNEES DU FORMULAIRE
//  */
// app.use(express.urlencoded({extended : false}))


// /*
//  * ROUTES
//  */ 

// // Définition des routes pour notes
// app.use(notesRoutes)
 


// const port = 3001;

// app.listen(port, () => {
// console.log(`Serveur écoutant sur le port ${port}`);
// });


// module.exports = pool.promise()



//---------
// const mysql = require('mysql2')
// require('dotenv').config()

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });


// // Connexion à la base de données
// pool.getConnection((err, con) => {
//     if (err) console.error('Erreur de connexion à la base de données:', err);
//     console.log('Connecté à la base de données MySQL');
    
// });

// module.exports = pool.promise()
const express = require('express')
const app = express()
const { status } = require('express/lib/response')
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const Connection = require('mysql/lib/Connection')
const notesRoutes = require('./routes/notesRoutes')
const port = 3001
const optionBd = {
    host : 'localhost',
    user : 'root',
    password : '',
    port : '3306',
    database : 'db_notes_nodejs_express'
};

/*
 *  DEFINITION DU MIDDLEWARE PUR CONNEXION AVEC BD
 */
app.use(myConnection(mysql,optionBd,'pool')) //pool c'est la stratégie


/*
 *  DEFINITION DU MOTEUR D'AFFICHAGE
 */
app.set('view engine', 'ejs')
app.set('views', 'IHM')



/*
 *  RESSOURCES STATIC
 */
app.use(express.static('public'))



/*
 *  TEMPS D'EXECUTION
 */
app.use(morgan('dev'))


/*
 *  EXTRACTION DES DONNEES DU FORMULAIRE
 */
app.use(express.urlencoded({extended : false}))


/*
 * ROUTES
 */ 

// Définition des routes pour notes
app.use(notesRoutes)
 
app.use((req, res, next) => {
    console.log("Requête effectué : "+Date().toString())
    next();
})


app.get('/apropos', (req, res) =>{
    res.status(200).render('apropos')
})


app.use((req, res) =>{
    res.status(404).render('pageIntrouvable')
})



/*
 * CONNEXION A LA PORT 3001
 */
app.listen(port, () => {
    console.log('Server is listening on port : http://localhost:'+port.toString())
})
console.log('Erreur lors de la création du serveur')
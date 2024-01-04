export const getNote = (req, res) => {
    try {
        req.get((erreur, connection) => {
            if(erreur){
                console.log(erreur)
            }else{
                connection.query('SELECT * FROM notes', [], (erreur, resultat) => {
                    if(erreur){
                        console.log(erreur)
                    }else{
                        users = resultat
                        res.json(response)
                        
                    }
                })
            }
        })
        res.json(response)
    } catch (error) {
        console.log(error.message)
    } 
}
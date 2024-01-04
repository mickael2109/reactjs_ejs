import Projet from "../models/ProjetModel.js"

export const getProjet = async(req, res) => {
    try {
        const response = await Projet.findAll()
        res.json(response)
    } catch (error) {
        console.log(error.message)
    } 
}

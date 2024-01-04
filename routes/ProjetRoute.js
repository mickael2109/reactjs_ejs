import express from 'express'
import { getProjet } from '../controllers/ProjetController.js'

const router = express.Router()

router.get('/projet', getProjet)

export default router;
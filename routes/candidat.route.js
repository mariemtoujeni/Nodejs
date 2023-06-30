import express from 'express'
import {createCandidat, getAllCandidats, getCandidatById, updateCandidat, deleteCandidat} from '../controllers/candidat.controller.js'

const router = express.Router()

 router
    .route('/')    
    .post(createCandidat)
    .get(getAllCandidats)

 router
    .route('/:id')
    .get(getCandidatById)
    .put(updateCandidat)
    .delete(deleteCandidat)
    

export default router;
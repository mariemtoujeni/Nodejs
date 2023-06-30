import express from 'express'

import { createOffre,getAllOffres, getOffreById,updateOffre,deleteOffre, getCandidatsSouscrits } from '../controllers/appelOffre.controller.js'

const router = express.Router()

 router
    .route('/')    
    .post(createOffre)
    .get(getAllOffres)
 router
    .route('/:id')
    .get(getOffreById)
    .put(updateOffre)
    .delete(deleteOffre)

router
    .route('/:id/candidats')
    .get(getCandidatsSouscrits)
export default router;
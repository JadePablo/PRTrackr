import express from 'express'

//import controllers here
import {getGyms,submitGym,getPrs,submitPr} from '../controllers/controller.js'
const router = express.Router()

//app uses /gyms as default route, so / = /gyms
//gym routes
router.get("/",getGyms)
router.post("/",submitGym)

// gym/pr routes
router.get("/:gymName",getPrs)
router.patch("/:gymName",submitPr)

export default router
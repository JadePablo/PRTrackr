import express from 'express'

//import controllers here
import {getGyms,submitGym,getPrs,submitPr} from '../controllers/controller.js'
const router = express.Router()

//app uses /gyms as default route, so / = /gyms
//gym routes
router.get("/",getGyms)
router.post("/",submitGym)

//pr routes
router.get("/:gymName",getPrs)
router.patch("/:gymName",submitPr)

//video routes

export default router
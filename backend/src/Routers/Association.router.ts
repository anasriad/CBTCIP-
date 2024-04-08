import express from 'express'
import { getAllAssociations } from '../controllers/Association.controller'
const Association = express()
Association.get('/getAll', getAllAssociations)
export default Association
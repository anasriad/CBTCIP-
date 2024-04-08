import express from 'express'
import { createSessionController } from '../controllers/User.controller'

const Users = express()

Users.post('/login', createSessionController)

export default Users
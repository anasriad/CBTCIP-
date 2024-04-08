import express from 'express'
import Association from './Association.router'
import Users from './Users.router'
import Events from './Events.router'
const Router = express()

Router.use('/Association', Association)
Router.use('/User', Users)
Router.use('/Event', Events)

export default Router
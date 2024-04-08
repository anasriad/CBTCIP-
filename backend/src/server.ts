import express from 'express'
import ApplyGlobalMiddlewares from './middlewares/Global'
import log from './helpers/logger'

const app = express()

ApplyGlobalMiddlewares(app)

app.listen(5000, () => {
    log.info(`Server is Running on Port 5000`)
})


import express from 'express'

const Events = express()

Events.post('/addEvent')

export default Events
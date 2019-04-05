const express = require('express')
const app = express()
const handlers = require('./handlers')
const port = 5000
const cars = require('../MOCK_DATA.json')

app.listen(port, () =>{
    console.log('start listening')
})

app.get('/api/cars/fulllist', handlers.getAllCars)

app.get('/api/cars/id/:id', handlers.getCarById)

app.put('/api/cars/change/:id=:textin', handlers.updateCarCall)

app.get('/api/cars/nato-sign', handlers.getCarsByCall)

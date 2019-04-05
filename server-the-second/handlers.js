const cars = require('../MOCK_DATA.json')

function getAllCars(req, res){
    console.log(cars)
    res.status(200).send(cars)
}

function getCarById(req, res){
    let {id} = req.params
    let idTarget = cars.filter(function(ele){
        return ele.id === id
    })
    res.status(200).send(idTarget)
}

function getCarsByCall(req, res){
    let callQ = req.query.callSign
    let callTarget = []
    callTarget = cars.filter(function(ele){
        for(let i = 0; i < callQ.length; i++){
            if(ele.callSign.includes(callQ[i])){
                return ele
            }
        }
    })
    if(callTarget != []){
        res.status(200).send(callTarget)
    } else {
        res.status(500).send('No match')
    }
}

function updateCarCall(req, res){
    console.log(req.params)
}




module.exports = {
    getAllCars,
    getCarById,
    getCarsByCall,
    updateCarCall
}
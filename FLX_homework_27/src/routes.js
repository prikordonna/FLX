const express = require('express');
const routes = express.Router();

const data = require('../db/data.json');
const CarHandler = require('./handlers/car');
const deleteAuth = require('./middlewares/delete-authorization');

routes.get('/', (req,res) => {
    res.status(200).send(data);
  });

routes.get('/:id', (req,res) => {
  const car = data.find((carItem) => carItem.id == req.params.id);
  if(car) {
    return res.status(200).send(car);
  } else {
    return res.status(404).send({message: "Car with such id has not been found"});
  }
});

router.post('/', (req,res) => {
    const addCar = new CarHandler(req.body);
    const car = data.find(carItem => carItem.brand === addCar.brand);
      if(car) {
       res.status(409).send({"message": "Car already exists."});
      }

      data.push(addCar);
      res.status(201).send(addCar);
});

router.put('/:id', (req,res) => {
    const id = req.params.id;
    const updatedCar = req.body;
    const carIndex = data.findIndex((car) => car.id == id);
    const car = data[carIndex];
    if(car) {
        data.splice(carIndex, 1, {...car, ...updatedCar});
        return res.status(200).send({...car, ...updatedCar});
    } else {
        return res.status(404).send({message: "Index not found"});
    }
});
  
router.delete('/:id', deleteAuth, (req,res) => {
    const carIndex = data.find((car) => car.id == req.params.id);
  
    if(!carIndex) {
      return res.status(404).send("Index not found");
    } 
    data.splice(carIndex, 1);
    res.status(200).send({"message": "Successfully removed"})
});

module.exports = routes;
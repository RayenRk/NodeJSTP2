const express = require('express');
const router = express.Router();

let voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}];

// Get all voitures
router.get('/', (req, res) => {
  res.json(voitures);
});

// get car by id
router.get('/:id', (req, res) => {
  const voitureId = parseInt(req.params.id);
  const voiture = voitures.find(v => v.id === voitureId);
  if (voiture) {
    res.json(voiture);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});

// add a new car
router.post('/add', (req, res) => {
  const newVoiture = req.body;
  voitures.push(newVoiture);
  res.status(201).json(newVoiture);
});

// update car by id
router.put('/update/:id', (req, res) => {
  const voitureId = parseInt(req.params.id);
  const updatedVoiture = req.body;
  const index = voitures.findIndex(v => v.id === voitureId);
  if (index !== -1) {
    voitures[index] = updatedVoiture;
    res.json(updatedVoiture);
    // res.send({message: 'car updated',data:voitures})
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});

// delete car by id
router.delete('/delete/:id', (req, res) => {
  const voitureId = parseInt(req.params.id);
  const index = voitures.findIndex(v => v.id === voitureId);
  if (index !== -1) {
    const deletedVoiture = voitures.splice(index, 1)[0];
    res.json(deletedVoiture);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});

module.exports = router;
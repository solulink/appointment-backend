const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services
router.get('/', async (req, res) => {
  try {
    res.json('Check Service');
    //const services = await Service.find();
    //res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add other CRUD operations as needed

module.exports = router;
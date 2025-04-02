const express = require('express');
const router = express.Router();
const auth = require('../routes/middleware/auth');
const Appointment = require('../models/Appointment');

// Create appointment
router.post('/', auth, async (req, res) => {
  try {
    const appointment = new Appointment({
      ...req.body,
      user: req.user.id
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get user appointments
router.get('/my-appointments', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user.id })
      .populate('service');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add other endpoints (update, delete, availability check)

module.exports = router;
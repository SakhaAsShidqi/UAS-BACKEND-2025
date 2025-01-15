// import PatientController
const PatientController = require('../controllers/PatientController');

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient
router.get("/patients", PatientController.getAllPatients);

router.post("/patients", PatientController.addPatient);

router.put("/patients/:id", PatientController.updatePatient);

router.delete("/patients/:id", PatientController.deletePatient);



// export router
module.exports = router;
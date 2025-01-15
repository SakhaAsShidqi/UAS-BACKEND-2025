// import Model Patient
const Patient = require('../models/Patient');

// buat class PatientController
class PatientController {
  // buat fungsi untuk mendapatkan semua pasien
  getAllPatients(req, res) {
    Patient.getAllPatients((err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).json(results);
    });
  }

  // buat fungsi untuk menambahkan pasien baru
  addPatient(req, res) {
    const patientData = req.body;
    Patient.addPatient(patientData, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).json(results);
    });
  }

  // buat fungsi untuk mengupdate data pasien berdasarkan ID
  updatePatient(req, res) {
    const id = req.params.id;
    const patientData = req.body;
    Patient.updatePatient(id, patientData, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).json(results);
    });
  }

  // buat fungsi untuk menghapus pasien berdasarkan ID
  deletePatient(req, res) {
    const id = req.params.id;
    Patient.deletePatient(id, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).json(results);
    });
  }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
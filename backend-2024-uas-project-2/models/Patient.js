// import database
const db = require('../config/database');

// membuat class Patient
class Patient {
  // buat fungsi untuk mendapatkan semua pasien
  static getAllPatients(callback) {
    const query = 'SELECT * FROM patients';
    db.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }

  // buat fungsi untuk menambahkan pasien baru
  static addPatient(patientData, callback) {
    const query = 'INSERT INTO patients SET ?';
    db.query(query, patientData, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }

  // buat fungsi untuk mengupdate data pasien berdasarkan ID
  static updatePatient(id, patientData, callback) {
    const query = 'UPDATE patients SET ? WHERE id = ?';
    db.query(query, [patientData, id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }

  // buat fungsi untuk menghapus pasien berdasarkan ID
  static deletePatient(id, callback) {
    const query = 'DELETE FROM patients WHERE id = ?';
    db.query(query, id, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }
}

// export class Patient
module.exports = Patient;
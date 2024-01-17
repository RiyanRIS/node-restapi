const { v4: uuid } = require("uuid");
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_api",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const getAllBootcamps = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM bootcamp");
    return rows;
  } catch (error) {
    throw error;
  }
};

const getOneBootcamp = async (bootcampId) => {
  try {
    const [rows] = await pool.query("SELECT * FROM bootcamp WHERE id = ?", [bootcampId]);
    if (!rows.length) {
      throw {
        status: 400,
        message: `Can't find bootcamp with the id '${bootcampId}'`,
      };
    }
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const createNewBootcamp = async (newBootcamp) => {
  try {
    const [rows] = await pool.query("INSERT INTO bootcamp SET ?", [newBootcamp]);
    return { ...newBootcamp, id: rows.insertId };
  } catch (error) {
    throw error;
  }
};

const updateOneBootcamp = async (bootcampId, changes) => {
  try {
    await pool.query("UPDATE bootcamp SET ? WHERE id = ?", [changes, bootcampId]);
    const [rows] = await pool.query("SELECT * FROM bootcamp WHERE id = ?", [bootcampId]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const deleteOneBootcamp = async (bootcampId) => {
  try {
    await pool.query("DELETE FROM bootcamp WHERE id = ?", [bootcampId]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBootcamps,
  createNewBootcamp,
  getOneBootcamp,
  updateOneBootcamp,
  deleteOneBootcamp,
};

import { pool } from "../config/db.js";

export const getDishes = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM carta");
  if (result.length) {
    res.status(200).json(result);
  } else {
    res.status(404).json("Something went wrong");
  }
};

export const getCategorie = async (req, res) => {
  const [result] = await pool.query(
    `SELECT * FROM carta WHERE categoria = "${req.params.cat}"`
  );
  if (result.length) {
    res.status(200).json(result);
  } else {
    res.status(404).json("Something went wrong");
  }
};

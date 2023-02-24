import { pool } from "../config/db.js";

export const listCategorie = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const [result] = await pool.query(
    `SELECT * FROM carta WHERE categoria = "${req.params.cat}"`
  );
  if (result.length) {
    res.status(200).json(result);
  } else {
    res.status(404).json("Something went wrong");
  }
};

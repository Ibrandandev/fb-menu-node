import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

export const pool = createPool(process.env.DATABASE_URL);

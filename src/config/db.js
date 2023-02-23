import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

export const pool = createPool({
    database: "familiabrandan",
    user: "nxwgdcsrvkc1ju7c1kke",
    host: "us-east.connect.psdb.cloud",
    password: "pscale_pw_FX8tyS0V6Dm26YjiDPQfXayiiyo6CYf3CZAMiDgKacf",
    ssl: {
      rejectUnauthorized: true,
    },
  });

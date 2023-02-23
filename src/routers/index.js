import { Router } from "express";
import { listCategorie } from "../controllers/index.js";

const app = Router();

app.get("/:cat", listCategorie);

export default app;

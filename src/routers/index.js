import { Router } from "express";
import { getDishes, getCategorie } from "../controllers/index.js";

const app = Router();

app.get("/", getDishes);

app.get("/:cat", getCategorie);

export default app;

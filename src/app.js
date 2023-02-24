import Express from "express";
import router from "./routers/index.js";
import cors from "cors";
const app = Express();

const whitelist = ["http://localhost:5173"];

app.use(cors({ origin: whitelist }));

app.use("/api", router);

app.get("*", function (req, res) {
  res.status(404).json("Not-found");
});

export default app;

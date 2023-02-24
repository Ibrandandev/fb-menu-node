import Express from "express";
import router from "./routers/index.js";
import cors from "cors";
const app = Express();

app.use(cors());

app.use("/api", router);

app.get("*", function (req, res) {
  res.status(404).json("Not-found");
});

export default app;

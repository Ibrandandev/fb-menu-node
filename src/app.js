import Express from "express";
import router from "./routers/index.js";

const app = Express();

app.use("/api", router);

app.get("*", function (req, res) {
  res.status(404).json("Not-found");
});

export default app;

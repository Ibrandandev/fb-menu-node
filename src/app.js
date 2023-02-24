import Express from "express";
import router from "./routers/index.js";
import cors from "cors";
const app = Express();

const whitelist = ["https://menu-react-kappa.vercel.app"];

app.use(cors({ origin: whitelist }));

app.get("/", (req, res) => {
  res.send("Bienvenido a FB MENU API");
});

app.use("/api", router);

app.get("*", function (req, res) {
  res.status(404).json("Not-found");
});

export default app;

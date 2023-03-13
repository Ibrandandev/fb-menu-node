import Express from "express";
import router from "./routers/index.js";
import cors from "cors";
const app = Express();

const whitelist = [
  "https://fb-menu-front.vercel.app/",
  "http://localhost:5500",
  "http://127.0.0.1:5500"
];

app.use(cors({ origin: whitelist }));

app.get("/", (req, res) => {
  res.json("Bienvenido a FB MENU API");
});

app.use("/api", router);

app.get("*", function (req, res) {
  res.status(404).json("Not-found");
});

export default app;

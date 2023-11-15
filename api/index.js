import express from "express";
import { conectdb } from "./config/db.js";
import morgan from "morgan";
import router from "./routes/user.routes.js";
import cors from "cors";
const app = express();
const port = 3000;
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/api", router);
app.use(express.json());
conectdb();

app.listen(port, () => {
  console.log(`Server on port  ${port}!`);
});

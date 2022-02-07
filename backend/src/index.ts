import bodyParser from "body-parser";

import cors from "cors";
import morgan from "morgan";
import express from "express";
import { UserRouter } from "./controllers";
import { Database } from "./database";

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use("/users", UserRouter);

Database.connect();

app.listen(8000, () => {
  console.log("The application is listening on http://localhost:8000!");
});

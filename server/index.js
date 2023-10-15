import express from "express";
import cors from "cors";
const app = express();
import * as dotenv from "dotenv";
import dbConnection from "./src/db/connection.js";
import allRoutes from "./src/modules/all.routes.js";
import errorHandling from "./src/utils/errorHandeling.js";
dotenv.config({ path: "./src/config/.env" });
app.use(express.json());
app.use(cors());
app.use(allRoutes);
const port = 5000;
dbConnection();
app.use(errorHandling);
app.listen(port, () => {
  console.log(`server is reuunig on port  ${port}`);
});

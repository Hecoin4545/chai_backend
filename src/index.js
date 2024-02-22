import dotenv from "dotenv";
import mongodb_connection from "./db/db.js";

dotenv.config({
  path: "./env",
});

mongodb_connection();

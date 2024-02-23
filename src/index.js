import dotenv from "dotenv";
import mongodb_connection from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

mongodb_connection()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("The site is live on port", process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(
      "error occured while conecting to the database please try again...",
      e
    );
  });

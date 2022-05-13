import express from "express";

import connect_to_database from "./config/db/db.js";
import middlewares from "./middlewares/index.js";
import router from "./routes/index.js";

const app = express();

// database
connect_to_database();

// middlewares
middlewares.map((middleware) => app.use(middleware));

// router
app.use("/api/v1", router);

export default app;

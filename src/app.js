import express from "express";

import middlewares from "./middlewares/index.js";
import router from "./routes/index.js";

const app = express();

// middlewares
middlewares.map((middleware) => app.use(middleware));

// router
app.use("/api/v1", router);

export default app;

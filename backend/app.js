import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import indexRouter from "./routes/index.js";
import urlsRouter from "./routes/url.js";

connectDB();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/api", urlsRouter);

// Server Setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

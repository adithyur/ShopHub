const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const http = require('http').Server(app);

const db = require("./Db/index");

app.use(cors());
app.use(express.json());

db.getDb();

app.get("/", (req, res) => {
  res.send("Hello, MongoDB and Express!");
});

const userRouter = require("./Routes/user");
app.use("/api/user", userRouter);

const productRouter = require("./Routes/products");
app.use("/api/products",productRouter);

const reviewRouter = require("./Routes/review");
app.use("/api/review", reviewRouter);

const PORT = process.env.PORT || 8000;

http.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});

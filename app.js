import http from "http";
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

// import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import dotenv from "dotenv";
import { connection } from "./dbConnect.js";

dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use("/", indexRouter);
app.use("/", (req, res) => res.send('Hello Work'));
app.use("/user", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

connection();

server.listen(7676, () => {
  console.log("Connected server successfully!");
});

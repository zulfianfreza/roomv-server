var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

var AppRouter = require("./src/v1/routes");

var app = express();

const v1 = "/api/v1";

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
    res.send("Welcome to roomv api server");
});
app.use(v1, AppRouter);

module.exports = app;

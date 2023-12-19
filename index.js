const express = require("express");
require("dotenv").config();

const fileupload = require("express-fileupload");
const app = express();
app.use(express.json());
app.use(fileupload());

const dbConnect = require("./config/databse");

const fileHandling = require("./routes/fileUpload");
app.use("/api/v1", fileHandling);

app.listen(process.env.PORT, () => {
  console.log("server instantiated");
});

dbConnect();

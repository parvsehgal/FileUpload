const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/databse");
const fileupload = require("express-fileupload");
const app = express();
const fileHandling = require("./routes/fileUpload");

//setup middlewares
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1", fileHandling);

//start server
app.listen(process.env.PORT, () => {
  console.log("server instantiated");
});
//connect to cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();
console.log("cloudinary connected");
// connect to database
dbConnect();

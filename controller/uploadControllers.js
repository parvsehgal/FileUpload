const File = require("../models/file");
const cloudinary = require("cloudinary").v2;

async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.uploadHandler = async (req, res) => {
  try {
    const file = req.files.parv;
    const PATH =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    file.mv(PATH, (err) => {
      console.log(err);
    });
    res.status(200).json("File uploaded sucessfully");
  } catch (err) {
    console.log(err);
    res.status(500).json("error uploading file");
  }
};

exports.imageUpload = async (req, res) => {
  const file = req.files.ourFile;
  const ext = file.name.split(".")[1];
  if (ext !== "jpg" && ext !== "jpeg" && ext !== "png") {
    res.status(500).json("file format not supported");
  }
  const response = await uploadFileToCloudinary(file, "myFolder");
  const ourFileInDb = await File.create({
    title: file.name,
    url: response.url,
  });
  res.status(200).json(ourFileInDb);
};

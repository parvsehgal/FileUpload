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

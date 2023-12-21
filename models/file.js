const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("File", fileSchema);

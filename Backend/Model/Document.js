const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const DocumentSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
});

module.exports = model("Document", DocumentSchema);

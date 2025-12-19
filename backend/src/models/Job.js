const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  salary: String,
  location: String,
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  }
});

module.exports = mongoose.model("Job", jobSchema);

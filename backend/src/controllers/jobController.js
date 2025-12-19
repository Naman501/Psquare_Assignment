const Job = require("../models/Job");

exports.addJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
};

exports.getJobsByCompany = async (req, res) => {
  const jobs = await Job.find({ companyId: req.params.companyId });
  res.json(jobs);
};

exports.updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(job);
};

exports.deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
};

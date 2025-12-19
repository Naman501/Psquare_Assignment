const Company = require("../models/Company");
const Job = require("../models/Job");

exports.getCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
};

exports.createCompany = async (req, res) => {
  const company = await Company.create(req.body);
  res.json(company);
};

exports.deleteCompany = async (req, res) => {
  const { id } = req.params;
  await Job.deleteMany({ companyId: id });
  await Company.findByIdAndDelete(id);
  res.json({ message: "Company and related jobs deleted" });
};

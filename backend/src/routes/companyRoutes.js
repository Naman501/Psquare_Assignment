const router = require("express").Router();
const c = require("../controllers/companyController");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.get("/", c.getCompanies);
router.post("/", auth, admin, c.createCompany);
router.delete("/:id", auth, admin, c.deleteCompany);

module.exports = router;

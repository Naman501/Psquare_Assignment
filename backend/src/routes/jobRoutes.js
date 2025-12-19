const router = require("express").Router();
const c = require("../controllers/jobController");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.post("/", auth, admin, c.addJob);
router.get("/company/:companyId", c.getJobsByCompany);
router.put("/:id", auth, admin, c.updateJob);
router.delete("/:id", auth, admin, c.deleteJob);

module.exports = router;

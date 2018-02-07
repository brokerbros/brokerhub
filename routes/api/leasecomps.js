const router = require("express").Router();
const leaseController = require("../../controllers/leaseController");

// Instantiate Controller Routes In Local Files
// // Matches with "/api/leasecomps"

router.route("/")
	.get(leaseController.findAll)
	.post(leaseController.create)

// // Matches with "/api/leasecomps/:id"
router.route("/:id")
	.get(leaseController.findById)
	.put(leaseController.update)
	.delete(leaseController.remove);

module.exports = router;
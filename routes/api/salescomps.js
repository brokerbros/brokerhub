const router = require("express").Router();
const salesController = require("../../controllers/salesController");

// Instantiate Controller Routes In Local Files
// // Matches with "/api/salescomps"

router.route("/")
	.get(salesController.findAll)
	.post(salesController.create)

// // Matches with "/api/salescomps/:id"
router.route("/:id")
	.get(salesController.findById)
	.put(salesController.update)
	.delete(salesController.remove);

module.exports = router;
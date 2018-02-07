const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");

// Instantiate Controller Routes In Local Files
// // Matches with "/api/property"

router.route("/")
	.get(propertyController.findAll)
	.post(propertyController.create)

// // Matches with "/api/property/:id"
router.route("/:id")
	.get(propertyController.findById)
	.put(propertyController.update)
	.delete(propertyController.remove);

module.exports = router;
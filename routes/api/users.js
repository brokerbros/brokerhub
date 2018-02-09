const router = require("express").Router();
const userController = require("../../controllers/userController");

// Instantiate Controller Routes In Local Files
// // Matches with "/api/users"

router.route("/")
	.get(userController.findAll)
	.post(userController.create)

router.route("/email/:email")
	.get(userController.findByEmail)


// // Matches with "/api/users/:id"
router.route("/:id")
	.get(userController.findById)
	.put(userController.update)
	.delete(userController.remove);

module.exports = router;
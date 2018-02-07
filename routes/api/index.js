const router = require("express").Router();
const LeaseCompRoutes = require("./leasecomps");
const SalesCompRoutes = require("./salescomps");
const PropertyRoutes = require("./properties");
const UserRoutes = require("./users");

// Routes
router.use("/leasecomps", LeaseCompRoutes);
router.use("/salescomps", SalesCompRoutes);
router.use("/properties", PropertyRoutes);
router.use("/users", UserRoutes);

module.exports = router;
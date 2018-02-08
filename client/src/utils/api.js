import axios from "axios";

export default {
	// // LEASE API DATA // //
	getLeases: function() {
		return axios.get("/api/leasecomps");
	},
	getLease: function(id) {
		return axios.get("/api/leasecomps/" + id);
	},
	updateLease: function(id) {
		return axios.put("/api/leasecomps/" + id);
	},
	// Possibly incomplete. I created this one from memory
	deleteLease: function(id) {
		return axios.delete("/api/leasecomps/" + id);
	},
	createLease: function(leaseData) {
		return axios.post("/api/leasecomps", leaseData);
	},
	// ...
	// // SALES API DATA // //
	getSales: function() {
		return axios.get("/api/salescomps");
	},
	getSale: function(id) {
		return axios.get("/api/salescomps" + id);
	},
	updateSale: function(id) {
		return axios.put("/api/salescomps" + id);
	},
	deleteSale: function(id) {
		return axios.delete("/api/salescomps" + id);
	},
	createSale: function(saleData) {
		return axios.post("/api/salescomps", saleData);
	},
	// ...
	// // PROPERTY API DATA // //
	getProperties: function() {
		return axios.get("/api/properties");
	},
	getProperty: function(id) {
		return axios.get("/api/properties/" + id);
	},
	updateProperty: function(id) {
		return axios.put("/api/properties" + id);
	},
	deleteProperty: function(id) {
		return axios.delete("/api/properties" + id);
	},
	createProperty: function(propertyData) {
		return axios.post("/api/properties", propertyData);
	},
	// ...
	// // USER API DATA // //
	getUsers: function() {
		return axios.get("/api/users");
	},
	getUser: function(id) {
		return axios.get("/api/users" + id);
	},
	updateProperty: function(id) {
		return axios.put("/api/users" + id);
	},
	deleteProperty: function(id) {
		return axios.delete("/api/users" + id);
	},
	createProperty: function(userData) {
		return axios.post("/api/users", userData);
	}
};
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
	// ...
	// // PROPERTY API DATA // //
	getProperties: function() {
		return axios.get("/api/properties");
	},
	// ...
	// // USER API DATA // //
	getUsers: function() {
		return axios.get("/api/users");
	},
	getUserByEmail: function(email) {
		return axios.get("/api/users/email/" + email);
	},
	createUser: function(user) {
		return axios.post("/api/users/", user);
	}


}
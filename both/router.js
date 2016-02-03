if (Meteor.isClient) {
	Router.configure({
		templateNameConverter: "upperCamelCase",
		routeControllerNameConverter: "upperCamelCase",
		layoutTemplate: "layout",
		notFoundTemplate: "notFound",
		loadingTemplate: "loading"
	});
}

Router.map(function () {
	this.route("home", {path: "/", controller: "HomeController"});	
	this.route("students", {path: "/students", controller: "StudentsController"});
    this.route("add-student", {path: "/students/add", controller: "AddStudentController"});
});
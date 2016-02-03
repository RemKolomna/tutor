this.StudentsController = RouteController.extend({
	template: "Students",
    
    data: function() {
        return { students: Students.find() };
    }  
})

Template.Students.events( {
    "click #btn-add": function(e, t) {
		e.preventDefault();
        Router.go("add-student");
	}
});
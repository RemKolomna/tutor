this.AddStudentController = RouteController.extend({
	template: "AddStudent"         
})

Template.AddStudent.events({
	"submit": function(e, t) {
        e.preventDefault();
        validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				Students.insert(values, function(e) {  });
                Router.go("students");
			}
		);

		return false;
    }
    
});
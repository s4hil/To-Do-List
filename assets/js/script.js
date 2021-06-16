/*
	Script By: Sahil Parray
	Email: s4hilp4rr4y@gmail.com
*/

$(document).ready(()=>{
	$(".addToDo").click(()=>{
		let toDoText = $(".toDo-text").val();
		if (toDoText == "" || toDoText == null) {
			alert("Task can not be empty!");
			$(".toDo-text").focus();
		}
		else {
			var toDoItem = $("<div>", {class: "toDoItem"});
			let toDoContent = "<div class='toDoItem'><div class='toDoItemText'>"+ toDoText +"</div><div class='delToDoItem'><button class='del btn btn-danger'><i class='fas fa-trash-alt'></i></button></div></div>";
			toDoItem.html(toDoContent);
			$(".toDos").append(toDoItem);
			$(".toDo-text").val("");
			$(".toDo-text").focus();
			$("#tasksLen").text($(".btn").length - 1);
		}
	});

	$(".toDos").on('click', '.del', function() {
		let toDoItem = this.closest('.toDoItem');
		let item = $(toDoItem).parent();
		$(item).fadeOut();
		let newTasksLen = $("#tasksLen").text() - 1;
		$("#tasksLen").text(newTasksLen);
	});


}); //Main
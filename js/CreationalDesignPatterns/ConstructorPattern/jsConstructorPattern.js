// JavaScript - Design Patterns
// Constructor Pattern

/* 
"new" keyword:
in front of a function, it creates a constructor of that function, creates a brand new object,
links to an object prototype, binds "this" to the new object scope, implicity return this
*/

// Constructor
var Task = function(name) {
	this.name = name;
	this.completed = false;

	this.complete = function() {
		console.log('completing task: ' + this.name);
		this.completed = true;
	}

	this.save = function() {
		console.log('saving Task: ' + this.name);
	}
}

// New instances of Task object or copies of the object
var Task1 = new Task('create a demo of Task1');
var Task2 = new Task('create a demo of Task2');
var Task3 = new Task('create a demo of Task3');
var Task4 = new Task('create a demo of Task4'); 

Task1.complete();
Task2.save();
Task3.save();
Task4.save();

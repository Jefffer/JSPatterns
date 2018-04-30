//var task = Object.create(Object.prototype);
var task = {
	title : 'My Task',
	description : 'Task Description'
};


Object.defineProperty(task, 'concat', {
	value: function(){
			return this.title + ' -> ' + this.description;
	},
	writable: false, //do not let overwrite the property
	enumerable: false, //do not show this property
	configurable: false 
});

var urgentTask = Object.create(task) // urgentTask inherint from task

Object.defineProperty(urgentTask, 'concat', {
	value: function(){
			return this.title + ' -> ' + 'sopas';
	},
	writable: false, //do not let overwrite the property
	enumerable: false, //do not show this property
	configurable: false 
});

console.log(urgentTask.concat());

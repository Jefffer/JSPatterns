//var task = Object.create(Object.prototype);
var task = {
	title : 'My Task',
	description : 'Task Description'
};


Object.defineProperty(task, 'concat', {
	value: function(){
			return this.title + ' -> ' + this.description;
	},
	writable: false,
	enumerable: true,
	configurable: true
});

console.log(task.concat());

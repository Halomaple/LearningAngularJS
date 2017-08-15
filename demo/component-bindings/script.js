angular.module('componentBindingsApp', []).controller('Controller', [function() {
	var vm = this;

	vm.one = 'One';
	vm.two = {
		name: 'Jeff'
	};

	vm.three = function() {
		alert('I am Mr.three');
	};

	vm.four = {
		name: 'Doyle'
	};
}]).component('myComponent', {
	templateUrl: 'myComponent.html',
	controller: myComponentController,
	bindings: {
		one: '<',
		two: '=',
		three: '&',
		four: '<',
		five: '@'
	}
});

function myComponentController() {
	var ctrl = this;
}
var app = angular.module('DirectiveRequireExample', []);

app.controller('firstDirectiveController', function() {
	var vm = this;
	vm.name = 'firstDirectiveController';

	vm.showRequireControllerName = function(name) {
		vm.name += ' - Require by ' + name;
	};
}).directive('firstDirective', function() {
	return {
		controller: 'firstDirectiveController',
		controllerAs: 'vm',
		restrict: 'E',
		templateUrl: 'first-controller.html'
	};
});

app.controller('SecondController', function() {
	var vm = this;
	vm.name = 'SecondController';
});

app.controller('CustomizeDirectiveController', function() {
	var vm = this;
	vm.name = 'CustomizeDirectiveController';
	vm.showRequireControllerName = function(name) {
		vm.name += ' - Require by ' + name;
	};
}).directive('customizeDirective', function() {
	return {
		restrict: 'E',
		controller: 'CustomizeDirectiveController',
		controllerAs: 'vm',
		scope: {},
		require: ['^firstDirective'],
		templateUrl: 'customize-directive.html',
		link: function(scope, element, attrs, controllers) {
			console.log(scope);
			var parentController = controllers[0];
			parentController.showRequireControllerName(scope.vm.name);
		}
	};
});
var module = angular.module('DirectiveRequireExample', []);

module.directive('firstController', [function () {
	return {
		restrict: 'E',
		templateUrl: 'first-controller.html',
		link: function (scope, ele, attrs) {
			
		}
	};
}]);

module.controller('SecondController', function(){
	var vm = this;
	vm.name = 'SecondController';
});

module.controller('CustomizeDirectiveController', function() {
	var vm = this;
	vm.name = 'CustomizeDirectiveController';
	vm.showRequireControllerName = function(){
		vm.name += 'require controller : CustomizeDirectiveController';
	};
}).directive('customizeDirective', function() {
	return {
		restrict: 'E',
		controller: 'CustomizeDirectiveController',
		controllerAs: 'vm',
		scope: {},
		require: ['^^firstController'],
		templateUrl: 'customize-directive.html',
		link: function(scope, element, attrs, controllers){
			var parentController = controllers[0];
			console.log(parentController);
			parentController.showRequireControllerName();
		}
	};
});
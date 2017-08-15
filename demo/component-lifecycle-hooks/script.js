angular.module('componentLifeCycleHooks', []).controller('mainCtrl', ['$scope', function($scope) {
	var vm = this;

	vm.one = 'one';
	vm.two = {
		name: 'jeff',
		sex: 'male'
	};

	vm.newTwo = function() {
		var temp = {
			name: 'new name',
			sex: 'male'
		};

		vm.two = temp;
	};
}]).component('myComponent', {
	templateUrl: 'myComponent.html',
	controller: myComponentController,
	bindings: {
		one: '<',
		two: '<'
	}
});

function myComponentController() {
	var ctrl = this;

	ctrl.$onInit = function() {
		console.log('$onInit');
	};

	ctrl.$onChanges = function(changesObj) {
		if (!changesObj) return;
		console.log(changesObj.two.currentValue);
		console.log(changesObj.two.previousValue);
		console.log('is first change', changesObj.two.isFirstChange());
	};

}
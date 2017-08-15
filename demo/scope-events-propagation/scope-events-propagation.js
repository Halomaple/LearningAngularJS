angular.module('scopeEventsPropagation', [])
	.controller('EventController', ['$scope', function($scope) {
		$scope.count = 0;
		$scope.$on('MyEvent', function() {
			$scope.count++;
		});
}]);
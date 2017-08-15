angular.module('docsRestrictDirective', []).controller('Controller', ['$scope', function($scope) {
	$scope.customer = {
		name: 'Naomi',
		address: '1600 Amphitheatre'
	};
}]).directive('myCustomer', function() {
	return {
		restrict: 'AE',
		templateUrl: 'my-customer.html'
	};
});
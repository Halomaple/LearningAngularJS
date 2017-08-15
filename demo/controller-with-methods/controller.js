var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyController', ['$scope', function($scope) {
	$scope.spice = 'very';

	$scope.chiliSpicy = function() {
		$scope.spice = 'chili';
	};

	$scope.jalapenoSpicy = function() {
		$scope.spice = 'jalapeno';
	};
}]);

myApp.controller('SpicyController1', ['$scope', function($scope) {
	$scope.customSpice = "wasabi";
	$scope.spice1 = 'very';

	$scope.spicy = function(spice) {
		$scope.spice1 = spice;
	};
}]);

myApp.controller('MainController', ['$scope', function($scope) {
	$scope.timeOfDay = 'morning';
	$scope.name = 'Nikki';
}]);

myApp.controller('ChildController', ['$scope', function($scope) {
	$scope.name = 'Mattie';
}]);

myApp.controller('GrandChildController', ['$scope', function($scope) {
	$scope.timeOfDay = 'evening';
	$scope.name = 'Gingerbread Baby';
}]);
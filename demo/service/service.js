angular.module('myServiceModule', []).controller('MyServiceController', ['$scope', 'notify', function($scope, notify) {
	$scope.callNotify = function(msg) {
		notify(msg);
	};
}]).factory('notify', ['$window', function(win) {
	var msgs = [];
	var testObj = {};
	return function(msg) {
		msgs.push(msg);
		if (msgs.length === 3) {
			win.alert(msgs.join("\n"));
			msgs = [];
		}
	};
}]);
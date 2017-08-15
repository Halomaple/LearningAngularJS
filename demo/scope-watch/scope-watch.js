angular.module('scopeWatchModule', []).controller('scopeWatchModuleCtrl', ['$scope', function($scope) {
	var vm = this;

	function WatchObject(len) {
		var result = [{
			name: 'john smith',
			sex: 'male'
		}, {
			name: 'bill gates',
			sex: 'male'
		}, {
			name: 'sara bahara',
			sex: 'female'
		}];

		result.length = len || 3;

		return result;
	}

	function randomString(len) {　　
		len = len || 31;　　
		var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
		var maxPos = $chars.length;　　
		var pwd = '';　　
		for (i = 0; i < len; i++) {　　　　
			pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
		}　　
		return pwd;
	}

	vm.watchObjRefer = new WatchObject();
	vm.watchObjContentCollect = new WatchObject();
	vm.watchObjValue = new WatchObject();

	vm.triggerWatchReference = function() {
		vm.watchObjRefer = new WatchObject(2);
	};

	vm.triggerWatchContentCollection = function() {
		vm.watchObjContentCollect.push({
			name: randomString(5) + " " + randomString(4),
			sex: 'unknown'
		});
		if (vm.watchObjContentCollect.length > 5)
			vm.watchObjContentCollect = new WatchObject();
	};

	vm.triggerWatchValue = function() {
		vm.watchObjValue[0].name = randomString(5) + " " + randomString(4);
	};

	//watch reference
	$scope.$watch(function() {
		return vm.watchObjRefer;
	}, function() {
		console.log('vm.watchObjRefer');
		console.table(vm.watchObjRefer);
	});

	//watch content collection
	$scope.$watchCollection(function() {
		return vm.watchObjContentCollect;
	}, function() {
		console.info('vm.watchObjContentCollect');
		console.table(vm.watchObjContentCollect);
	});

	//watch value
	$scope.$watch(function() {
		return vm.watchObjValue;
	}, function() {
		console.log('vm.watchObjValue');
		console.table(vm.watchObjValue);
	}, true);
}]);
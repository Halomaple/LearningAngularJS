angular.module('modificationCheckApp', []).controller('Controller', function() {
	this.testData1 = 'Halo';
	this.testData2 = 'could not be changed';
	this.testObj1 = {
		name: 'halo',
		sex: 'male'
	};
});


function HeroDetailController() {
	var ctrl = this;
	ctrl.testData1 = 'maple';

	ctrl.testData2 = 'try to change testData2 but failed';

	ctrl.changeTestObj1 = function() {
		ctrl.testObj1.name = 'hello';
	};

}

angular.module('modificationCheckApp').component('modificationCheck', {
	templateUrl: 'testTemplate.html',
	controller: HeroDetailController,
	bindings: {
		testData1: '=',
		testObj1: '='
	}
});
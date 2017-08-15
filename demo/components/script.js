angular.module('heroAppComponent', []).controller('mainCtrl', function() {
	this.hero = {
		name: 'Spawn'
	};
});


function HeroDetailController() {

}

angular.module('heroAppComponent').component('heroDetail', {
	templateUrl: 'heroDetail.html',
	controller: HeroDetailController,
	bindings: {
		hero: '='
	}
});
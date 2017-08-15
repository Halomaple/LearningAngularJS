angular.module('selectDemoSelectHeader', ['ngMaterial'])
	.controller('SelectHeaderController', function($scope, $element) {
		$scope.selections = [
			{
				id: '1',
				name: 'vergetables',
				isChecked: false,
				choise: ['Corn', 'Onions', 'Kale', 'Arugula', 'Peas', 'Zucchini']

			},
			{
				id: '2',
				name: 'color',
				isChecked: false,
				choise: ['green', 'blue', 'orange', 'red', 'gray', 'black', 'purple']
			},
			{
				id: '3',
				name: 'weather',
				isChecked: false,
				choise: ['sunny', 'windy', 'rainy']
			}
		];
		$scope.currentSelections = [];
		$scope.currentGroup = undefined;

		$scope.searchTerm = '';
		$scope.clearSearchTerm = function() {
			$scope.searchTerm = '';
		};

		$scope.$watchCollection(function() {
			return $scope.currentSelections;
		}, function(newValue, oldValue, scope) {
			if (newValue)
				updateSelections();
		});

		$scope.getCurrentGroupValue = function(group) {
			$scope.currentGroup = group;
		};

		$scope.updateGroupCheck = function(group) {
			if (group) {
				toggleGroupSelection(group.isChecked, group);
			}
		};

		function toggleGroupSelection(checked, group) {
			group.choise.forEach(function(c) {
				var index = $scope.currentSelections.indexOf(c);
				if (checked && index === -1)
					$scope.currentSelections.push(c);
				if (!checked && index > -1)
					$scope.currentSelections.splice(index, 1);
			});
		}

		function updateSelections() {
			if (!$scope.currentGroup) return;
			if ($scope.currentGroup.choise.every(function(i) {
					return $scope.currentSelections.indexOf(i) > -1;
				}))
				$scope.currentGroup.isChecked = true;
			else
				$scope.currentGroup.isChecked = false;
		}


		// // The md-select directive eats keydown events for some quick select
		// // logic. Since we have a search input here, we don't need that logic.
		$element.find('input').on('keydown', function(ev) {
			ev.stopPropagation();
		});
	});
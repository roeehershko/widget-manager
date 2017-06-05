'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.widget')
	.controller('app.core.widget.detailsCtrl',
	function ($scope, $stateParams, widgetStorage, $state) {
		$scope.widgetId = $stateParams.widgetId;
        $scope.widget = widgetStorage.getWidget($scope.widgetId);
	});

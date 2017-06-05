'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.widget')
	.controller('app.core.widget.deleteConfirmCtrl',
	function ($scope, $stateParams, widgetStorage, widget,  $uibModalInstance) {
		$scope.widget = widget;
		$scope.confirmedClicked = function () {
            widgetStorage.deleteWidget(widget.id);
            $uibModalInstance.close();
        };

        $scope.cancelClicked = function () {
            $uibModalInstance.close();
        };
	});

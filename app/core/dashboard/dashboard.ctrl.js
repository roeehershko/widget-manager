'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.dashboard')
	.controller('app.core.dashboardCtrl',
	function ($scope, widgetStorage, $uibModal) {
		$scope.widgets = widgetStorage.getWidgets();

		$scope.deleteWidgetClicked = function (widget) {

            $uibModal.open({
                templateUrl: '/app/core/widget/delete-confirm/widget-delete-confirm.tpl.html',
                controller: 'app.core.widget.deleteConfirmCtrl',
                resolve: {
                    widget: function() {
                        return widget;
                    }
                }
            });
        };
	});

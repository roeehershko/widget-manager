'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('app.core.widget')
	.controller('app.core.widget.editCtrl',
	function ($scope, $stateParams, widgetStorage, $state, $timeout) {
		$scope.widgetId = $stateParams.widgetId;
        $scope.submitted = false;
        $scope.newField = {};
        $scope.alert = {
            visible: false,
            msg: '',
            type: 'danger'
        };

        function showAlert(type, msg, duration) {
            $scope.alert.type = type;
            $scope.alert.msg = msg;
            $scope.alert.visible = true;

            $timeout(function () {
                $scope.alert.visible = false;
            }, duration || 3000)
        }

        if ($stateParams.newlyCreated) {
            showAlert('success', 'Widget added successfully, you have been redirected to the edit page');
        }

        if ($scope.widgetId) {
            $scope.widget = widgetStorage.getWidget($scope.widgetId);
        }
        else {
            $scope.widget = {
                name: '',
                value: '',
                textFields: []
            };
        }

		$scope.addCustomField = function () {
			if ($scope.addCustomFieldForm.$valid) {
                $scope.widget.textFields.push({
                    key: $scope.newField.key,
                    value: $scope.newField.value,
                });

                $scope.newField.key = '';
                $scope.newField.value = '';

                $scope.addCustomFieldForm.newFieldValue.$touched = false;
                $scope.addCustomFieldForm.newFieldKey.$touched = false;

                $scope.addFieldClicked = false;
            }
            else {
                $scope.addFieldClicked = true;
            }
        };

        $scope.removeCustomField = function (idx) {
			$scope.widget.textFields.splice(idx, 1);
        };

        $scope.saveClicked = function () {

            $scope.alert.msg = 'Success!';

            if ( ! $scope.editWidget.$valid) {
                $scope.submitted = true;
                showAlert('danger', 'Some fields are invalid, please fix them');
            }
            else {
                $scope.submitted = false;

                if ($scope.widgetId) {
                    widgetStorage.editWidget($scope.widgetId, $scope.widget);

                    showAlert('success', 'Widget Edited Successfully!');

                }
                else {
                    var newWidgetId = widgetStorage.addWidget($scope.widget);
                    $state.go('app.widget.edit', { widgetId: newWidgetId, newlyCreated: true });
                }
            }


        };

	});

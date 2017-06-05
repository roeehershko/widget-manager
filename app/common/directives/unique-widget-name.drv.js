/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .directive('uniqueWidgetName', function (widgetStorage) {
            return {
                type: 'A',
                require : 'ngModel',
                scope: {
                    uniqueWidgetName: '='
                },
                link : function(scope, element, attrs, ngModel) {
                    var widgets = widgetStorage.getWidgets();

                    function validateName(name) {
                        var valid = true;

                        widgets.forEach(function (element) {

                            if (scope.uniqueWidgetName == element.name) return;

                            if (element.name == name) {
                                valid = false;
                            }
                        });

                        return valid;
                    }

                    ngModel.$parsers.push(function(value) {
                        if( ! value || value.length == 0) return;


                        ngModel.$setValidity('uniqueName', validateName(value));

                        return value;
                    });
                }
            };
        }
    );

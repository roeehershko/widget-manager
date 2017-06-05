'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.dashboard', [ 'ui.router' ])
	.config(function ($stateProvider) {

        $stateProvider.state('app.dashboard', {
            url: '',
            views: {
                'content@app': {
                    templateUrl: '/app/core/dashboard/dashboard.tpl.html',
                    controller: 'app.core.dashboardCtrl'
                }
            }
        });

        $stateProvider.state('app.dashboard.widgetDetails', {
            url: ':widgetId',
            views: {
                'widgetDetails@app.dashboard': {
                    templateUrl: '/app/core/widget/details/widget-details.tpl.html',
                    controller: 'app.core.widget.detailsCtrl'
                }
            }
        });
	});


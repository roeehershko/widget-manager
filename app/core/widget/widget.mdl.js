'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 */
angular.module('app.core.widget', [ 'ui.router' ])
	.config(function ($stateProvider) {

        $stateProvider.state('app.widget', {
            url: '',
			abstract: true
        });

        $stateProvider.state('app.widget.add', {
            url: 'edit',
            views: {
                'content@app': {
                    templateUrl: '/app/core/widget/edit/widget-edit.tpl.html',
                    controller: 'app.core.widget.editCtrl'
                }
            }
        });

        $stateProvider.state('app.widget.edit', {
            url: 'edit/:widgetId',
            views: {
                'content@app': {
                    templateUrl: '/app/core/widget/edit/widget-edit.tpl.html',
                    controller: 'app.core.widget.editCtrl'
                }
            },
            params: {
                newlyCreated: false
            }
        });
	});

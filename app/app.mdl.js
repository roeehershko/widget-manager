'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular.module('app', [
    'ngTouch',
    'ngMessages',
    'LocalStorageModule',
    'ui.bootstrap',
    'ui.bootstrap.accordion',
    'ui.router',
    'app.layout',
    'app.common.services',
    'app.common.directives',
    'app.core.dashboard',
    'app.core.widget',
])
    .config(function ($urlRouterProvider) {

        // Redirect to default page
        $urlRouterProvider.otherwise('/');
    });

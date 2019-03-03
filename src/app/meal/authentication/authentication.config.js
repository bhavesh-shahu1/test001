(function() {
    'use strict';
    angular.module('app.meal.authentication').config(authenticationConfig);
    /* @ngInject */
    function authenticationConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('authentication', {
            abstract: true, 
            templateUrl: 'app/meal/authentication/layout/authentication.tmpl.html',
        }),
        $stateProvider.state('authentication.login', {
            url: '/login',
            templateUrl: 'app/meal/authentication/login/login.tmpl.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        }),
        $stateProvider.state('authentication.loginactive', {
            url: '/login/:parameter',
            templateUrl: 'app/meal/authentication/login/login.tmpl.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        }),
        $stateProvider.state('authentication.signup', {
            url: '/signup',
            templateUrl: 'app/meal/authentication/signup/signup.tmpl.html',
            controller: 'SignupController',
            controllerAs: 'vm'
        }),$stateProvider.state('authentication.forgot', {
            url: '/forgot',
            templateUrl: 'app/meal/authentication/forgot/forgot.tmpl.html',
            controller: 'ForgotController',
            controllerAs: 'vm'
        })
    }
})();
(function() {
    'use strict';
    angular.module('app.meal.home').config(homeConfig);
    /* @ngInject */
    function homeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('default-layout.admin-layout.user', {
            url: '/user',
            templateUrl: 'app/meal/home/user/user.tmpl.html',
            controller: 'UserController',
            controllerAs: 'vm'
        })
        .state('default-layout.admin-layout.profile', {
            url: '/profile/:parameter',
            templateUrl: 'app/meal/profile/profile.tmpl.html',
            controller: 'ProfileController',
            controllerAs: 'vm'
        })
        .state('default-layout.admin-layout.history', {
            url: '/history',
            templateUrl: 'app/meal/home/history/history.tmpl.html',
            controller: 'historyController',
            controllerAs: 'vm'
        })
        .state('default-layout.admin-layout.home', {
            url: '/home',
            templateUrl: 'app/meal/home/home.tmpl.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
    }
})();
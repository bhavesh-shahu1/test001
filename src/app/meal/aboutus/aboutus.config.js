(function() {
    'use strict';
    angular.module('app.meal.home').config(aboutUsConfig);
    /* @ngInject */
    function aboutUsConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('default-layout.admin-layout.aboutus', {
            url: '/aboutus',
            templateUrl: 'app/meal/aboutus/aboutus.tmpl.html',
            controller: 'AboutUsController',
            controllerAs: 'vm'
        })
    }
})();
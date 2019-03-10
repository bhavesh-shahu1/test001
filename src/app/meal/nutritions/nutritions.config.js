(function() {
    'use strict';
    angular.module('app.meal.home').config(nutritionsConfig);
    /* @ngInject */
    function nutritionsConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('default-layout.admin-layout.nutritions', {
            url: '/nutritions',
            templateUrl: 'app/meal/nutritions/nutritions.tmpl.html',
            controller: 'NutritionsController',
            controllerAs: 'vm'
        })
    }
})();
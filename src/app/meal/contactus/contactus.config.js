(function() {
    'use strict';
    angular.module('app.meal.home').config(contactUsConfig);
    /* @ngInject */
    function contactUsConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('default-layout.admin-layout.contactus', {
            url: '/contactus',
            templateUrl: 'app/meal/contactus/contactus.tmpl.html',
            controller: 'ContactUsController',
            controllerAs: 'vm'
        })
    }
})();
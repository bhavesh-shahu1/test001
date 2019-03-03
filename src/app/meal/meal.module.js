(function() {
    'use strict';

    angular.module('app.meal', [
            'app.meal.common', 'app.meal.authentication', 'app.meal.layout','app.meal.home' ,'app.meal.component', 'ngAnimate', 'ngCookies',
            'ngSanitize', 'ui.router', 'nvd3', 'pascalprecht.translate', 'ngFileUpload', 'base64', 'restangular','ui.bootstrap','ngTagsInput','toaster'
            // 'ngMaterial'
        ]).constant('HTTP_STATUS', {
            'OK': 200,
            'PARTIAL_CONTENT': 206,
            'UNAUTHORIZED': 401,
            'FORBIDDEN': 403,
            'NOT_FOUND': 404,
            'SERVER_ERROR': 500
        }) // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            // 'url': 'https://impactcloud.herokuapp.com/api.php/',
            // url:'http://thankingli.com/',
            url: 'http://test.thankingli.com/',
            'grant_type': 'password',
            'client_id': '4',
            'client_secret': 'P3VcYBlzekJznAeVXCRNb8oGtBsQ0usIAdl31K1k',
            'username': 'madprabh@thankingli.com',
            'password': 'red123',
            'scope': ''
                // 'api_key': 'local_key',
                // 'client_secret': '100010134',
                // 'client_password': 'admin@123'
        }).config(function($httpProvider) {
            $httpProvider.defaults.headers.common = {};
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
        })
        .run(function(chatToken) {
            //Get token on client login
            //Add interceptors for setting url and jwt token
            //if (!angular.isDefined($cookies.get('token'))) {
            chatToken.getToken();
        });
})();
// (function() {
//     'use strict';
//     angular.module('app.meal').config(webServiceAuthentication);
//     /* @ngInject */
//     function webServiceAuthentication(RestangularProvider, API_CONFIG) {
//         RestangularProvider.setBaseUrl(API_CONFIG.url);
//         // RestangularProvider.setBaseUrl('http://localhost:9000/');
//         RestangularProvider.setDefaultHeaders({
//             //'Content-Type': 'application/x-www-form-urlencoded'
//             'Content-Type': 'application/json'
//         });
//         // RestangularProvider.setDefaultHttpFields({
//         //     'withCredentials': true

//         // });
//     }
// })();
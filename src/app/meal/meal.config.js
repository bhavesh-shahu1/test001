(function() {
    'use strict';
    angular.module('app.meal').config(moduleConfig);
    /* @ngInject */
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('default-layout', {
                abstract: true,
                //url: '/layout',
                templateUrl: 'app/meal/layout/default-layout.tmpl.html',
                controller: 'DefaultLayoutController',
                controllerAs: 'vm'
            })
            .state('default-layout.admin-layout',{
                 abstract: true,
                views: {
                    sidebarLeft: {
                        templateUrl: 'app/meal/components/left-menu/left-menu.tmpl.html',
                        controller: 'LeftMenuController',
                        controllerAs: 'vm'
                    },
                    sidebarRight: {
                        templateUrl: 'app/meal/components/right-menu/right-menu.tmpl.html',
                        controller: 'RightMenuController',
                        controllerAs: 'vm'
                    },
                    toolbar: {
                        templateUrl: 'app/meal/components/toolbar/toolbar1.tmpl.html',
                        controller: 'ToolbarController',
                        controllerAs: 'vm'
                    },
                    content: {
                         template: '<div flex ui-view></div>'
                    }
                    ,
                    belowContent: {
                        templateUrl: 'app/meal/components/footer/footer.tmpl.html',
                        controller: 'FooterController',
                        controllerAs: 'vm'
                    }
                }
            })
    }
})();

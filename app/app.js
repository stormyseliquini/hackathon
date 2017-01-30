(function() {
    'use strict';

    var hackApp = angular.module('hackApp', ['toastr', 'ui.router', 'ngSanitize']);

    hackApp.filter('trustThisUrl', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]);

    hackApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/linked");

        $stateProvider


            .state('linked', {
                url: "/linked",
                templateUrl: "app/partials/linked.html",
                controller: "mainController",
                controllerAs: "vm"

            })
            .state('video', {
                url: "/video",
                templateUrl: "app/partials/video.html",
                controller: "indeedController",
                controllerAs: "vm"
            });
    });
})();

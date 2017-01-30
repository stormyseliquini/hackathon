(function() {
    'use strict';

    angular
        .module('hackApp')
        .factory('hackFactory', hackFactory);

    hackFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function hackFactory($http, $q) {
        var service = {
            getLinked: getLinked,
            getVideo: getVideo
        };
        return service;

        ////////////////

        function getLinked(name) {
            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: 'http://api.icndb.com/jokes/random?',
                    params: {
                        firstName: name
                    }
                })
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);


                        } else {
                            defer.reject(response);
                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);

                    });

            return defer.promise;
        }



        function getVideo(searchVideo) {
            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: 'https://www.googleapis.com/youtube/v3/search?',
                    params: {
                        key: 'AIzaSyCdySoUC9L_MLisdIrwbSsKODEtBdJKwGg',
                        part: 'snippet',
                        q: searchVideo
                    }
                })
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);


                        } else {
                            defer.reject(response);
                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);

                    });

            return defer.promise;
        }

    }


})();

(function() {
    'use strict';

    angular
        .module('hackApp')
        .controller('indeedController', indeedController);

    indeedController.$inject = ['hackFactory', 'toastr'];

    /* @ngInject */
    function indeedController(hackFactory, toastr) {
        var vm = this;
        vm.title = 'indeedController';



        ////////////////
        vm.getIframeSrc = function(videoId) {
            return 'https://www.youtube.com/embed/' + videoId;
        };
        vm.videoSearch = function(searchVideo) {
            hackFactory.getVideo(searchVideo).then(
                function(response) {
                    vm.videoResponse = response.data;

                    console.log(vm.videoResponse);
                    toastr.success("we've got videos");
                },
                function(error) {
                    if (error.data) {
                        toastr.error("You lack videos" + error.data);
                    } else {
                        toastr.info('Who stole our videos?');
                    }
                }

            )
            vm.searchVideo = '';
        };




    }

})();

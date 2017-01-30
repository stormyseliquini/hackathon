(function() {
    'use strict';

    angular
        .module('hackApp')
        .controller('mainController', mainController);

    mainController.$inject = ['hackFactory', 'toastr'];

    /* @ngInject */
    function mainController(hackFactory, toastr) {
        var vm = this;
        vm.title = 'mainController';

        vm.jokeSearch = function(searchJoke) {
            hackFactory.getLinked(searchJoke).then(
                function(response) {
                    console.log(response.data.value.joke);
                    vm.jokeResponse = response.data.value.joke.replace(/&quot;/g, '"');
                    console.log(vm.jokeResponse);
                    toastr.success("we've got memes");
                },
                function(error) {
                    if (error.data) {
                        toastr.error("You lack manliness" + error.data);
                    } else {
                        toastr.info('Who stole our memes?');
                    }
                }

            )
            vm.searchJoke = '';
        };




    }

})();

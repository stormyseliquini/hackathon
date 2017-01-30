(function() {
    'use strict';

    angular
        .module('hackApp')
        .controller('crunchBaseController', crunchBaseController);

    crunchBaseController.$inject = ['hackFactory', 'toastr'];

    /* @ngInject */
    function crunchBaseController(hackFactory, toastr) {
        var vm = this;
        vm.title = 'crunchBaseController';

        activate();

        ////////////////

        function activate() {}
    }
})();

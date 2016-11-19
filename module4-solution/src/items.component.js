(function() {
    'use strict';

    angular.module('MenuApp')
    .component('items', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
      var itemsCtrl = this;
      itemsCtrl.items = items;
    }

  })();

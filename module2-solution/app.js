(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
      var toBuyCtrl = this;

      toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

      toBuyCtrl.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };

      toBuyCtrl.itemsStillToBuy = function() {
        return ShoppingListCheckOffService.getToBuyItems().length > 0;
      }
        }

        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtCtrl = this;

      boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();

      boughtCtrl.someItemsBought = function() {
        return ShoppingListCheckOffService.getBoughtItems().length > 0;
      }
    }

    function ShoppingListCheckOffService() {
      var service = this;

      var toBuyItems = [
        {name: "Cookies", quantity: 10},
        {name: "Apples", quantity: 5},
        {name: "Bananas", quantity: 6},
        {name: "Pints of Milk", quantity: 4},
        {name: "Toilet Rolls", quantity: 9}
    ];

      var boughtItems = [];

      service.getToBuyItems = function() {
        return toBuyItems;
      }

      service.getBoughtItems = function() {
        return boughtItems;
      }

      service.buyItem = function(itemIndex) {
        var boughtItem = toBuyItems[itemIndex];
        toBuyItems.splice(itemIndex, 1);
        boughtItems.push(boughtItem);
      }
    }
})();

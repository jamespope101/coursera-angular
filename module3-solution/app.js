(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'dirCtrl',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var dirCtrl = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;

    narrowCtrl.searchTerm = "";
    narrowCtrl.found = [];

    this.getFoundItems = function() {
      var promise = MenuSearchService.getMatchedMenuItems();

      promise.then(function (result) {
                var menuItems = result.data.menu_items;
                var matchedMenuItems = [];
                for (var i = 0; i < menuItems.length; i++) {
                  if (menuItems[i].description.toLowerCase().indexOf(narrowCtrl.searchTerm.toLowerCase()) !== -1) {
                    matchedMenuItems.push(menuItems[i]);
                  }
                }
                narrowCtrl.found = matchedMenuItems;
              }).catch(function error() {
                console.log("Oops");
              });
    }

    this.removeItem = function(itemIndex) {
        narrowCtrl.found.splice(itemIndex, 1);
    }

    this.isFoundListEmpty = function() {
      return narrowCtrl.found.length === 0;
    }
}

    MenuSearchService.$inject=['$http', 'ApiBasePath'];
      function MenuSearchService($http, ApiBasePath) {
        var service = this;

        var found = [];

        service.getMatchedMenuItems = function() {
            var response = $http({
              method: "GET",
              url: (ApiBasePath + "/menu_items.json")
            });

            return response;
        }
      }

  })();

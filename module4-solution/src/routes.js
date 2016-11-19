(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as catsCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items page
  .state('categories.items', {
    url: '/items/{category}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    params: {
      category: null
    },
    resolve: {
      items: ['$stateParams', 'MenuDataService',
        function (stateParams, MenuDataService) {
          return MenuDataService.getItems($stateParams.category);
      }]
    }
  });

}

})();

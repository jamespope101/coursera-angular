(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$q', 'SignUpService', 'MenuService'];
function SignUpController($q, SignUpService, MenuService) {
  var reg = this;
  reg.completed = false;
  reg.invalidFavorite = false;

  reg.submit = function () {
    var promise = MenuService.getMenuItem(reg.user.favorite);
    $q.all([promise]).
      then(function (response) {
        reg.invalidFavorite = false;
        reg.completed = true;
        SignUpService.saveUser(reg.user);
      })
      .catch(function (errorResponse) {
        reg.invalidFavorite = true;
      });
    };    
  };

})();

(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['user', 'favorite'];
function UserInfoController(user, favorite) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.favorite = favorite;
}

})();

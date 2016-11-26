(function () {
"use strict";

angular.module('public')
.component('userDetails', {
  templateUrl: 'src/public/userinfo/userdetails.html',
  bindings: {
    user: '<',
    favorite: '<'
  },
  controller: UserDetailsController
});

UserDetailsController.$inject = ['ApiPath'];
function UserDetailsController(ApiPath) {
  var $ctrl = this;
  $ctrl.ApiPath = ApiPath;
};

})();

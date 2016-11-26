(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);

SignUpService.$inject = [];
function SignUpService() {
  var service = this;
  service.user = null;

  service.saveUser = function (user) {
    service.user = user;
  }

  service.isUserRegistered = function() {
    console.log("user registered is " + (user !== null));
    return user !== null;
  }

  service.getUser = function () {
    return service.user;
  }
}



})();

(function() {
    'use strict';

    angular.module('Module1App', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
            $scope.message = "";
            $scope.items = "";
            $scope.color = "";

            $scope.checkIfTooMuch = function() {
                var numItems = calculateNumItems($scope.items);
                if (numItems === 0) {
                    $scope.message = "Please enter data first";
                    $scope.color = "red";
                } else if (numItems <= 3) {
                    $scope.message = "Enjoy!";
                    $scope.color = "green";
                } else {
                    $scope.message = "Too much!";
                    $scope.color = "green";
                }
            };

            function calculateNumItems(items) {
                if (items === "") {
                    return 0;
                } else {
                    var itemsArray = items.split(",");
                    var nonEmptyItems = 0;
                    for (var index=0; index < itemsArray.length; index++) {
                        if (itemsArray[index].trim() !== "") {
                            nonEmptyItems++;
                        }
                    }
                    return nonEmptyItems;
                }
            }
        }
})();
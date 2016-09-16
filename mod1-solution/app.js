(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.message = "";
    $scope.DisplayMessage = function() {
        var input = $scope.lunchinput;
        if(input == undefined) {
            input = "";
        }
        if( input == "") {
            $scope.message = "Please enter data first";
            $scope.mystyle = {"color":"red"}
            $scope.myborderstyle = {"border-color":"red"}
        }
        else if(input.split(',').length >3) {
            $scope.message = "Too much!";
            $scope.mystyle = {"color":"green"}
             $scope.myborderstyle = {"border-color":"green"}
        }
        else {
            $scope.message = "Enjoy!";
            $scope.mystyle = {"color":"green"}
             $scope.myborderstyle = {"border-color":"green"}
        }
    };


}

})();

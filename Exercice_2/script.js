var app = angular.module('testApp', []);
app.controller('voituresCtrl', function($scope, $http){
    $http.get("voiture.json").then(function(response) {
        $scope.voitures = response.data;
      });
});

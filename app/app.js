(function(){
  var app = angular.module('guide', []);

  app.controller('GuideController',['$scope', '$http', function($scope, $http){
    $scope.movies = [];

    $http.get('data/movies.json')
    .then(function (response){
      $scope.movies = response.data;
   },function (error){
     console.log("Soucis sa maman");
   });
  }]);
})();

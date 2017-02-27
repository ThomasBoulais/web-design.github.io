(function(){
  var app = angular.module('guide', []);

  app.controller('GuideController', function($scope, $http){
// Appel du JSON
  $http({
    method:"GET",
    url:"data/movies.json"
  }).then(function mySuccess(response){
    $scope.movies = response.data;
  });

  // Quelques variables :
  $scope.showReview = false; // pour afficher ou non la colonne review
  $scope.reviewsFilm =  []; // stocke les reviews
  $scope.numFilm = -1;
    // Pour les noms de classe dynamique
  $scope.dimensionCadreMin = 'list-group-item col-lg-4';
  $scope.dimensionImageMin = 'resizePoster';
  $scope.dimensionCadreMax = 'list-group-item col-lg-12';
  $scope.dimensionImageMax = 'bigPicture';

  // Quelques fonctions
  $scope.remplirReview = function(){

        $scope.reviewsFilm = $scope.movies[$scope.numFilm].reviews;
  }

// Récupération de l'indice d'un film sélectionné
$scope.getNumFilm = function(nomFilm){
  for(var i = 0; i<$scope.movies.length; i++){
    if($scope.movies[i].name === nomFilm){
      $scope.numFilm = i;
    }
  }
};

// Affichage des infos d'un film sélectionné, l'image est agrandie
  $scope.clickFilm = function(nomFilm){
    var numFilm =  $scope.getNumFilm(nomFilm);
    $scope.showReview = true;
    $scope.remplirReview();
    $scope.movies[$scope.numFilm].showInfo = !$scope.movies[$scope.numFilm].showInfo;
    $scope.dimensionner();
  };

// Fonction de dimensionnement d'un poster par rapport à l'info de sélection/désélection
    $scope.dimensionner = function(){
      if($scope.movies[$scope.numFilm].showInfo){
        $scope.movies[$scope.numFilm].dimensionCadre = $scope.dimensionCadreMin;
        $scope.movies[$scope.numFilm].dimensionImage=  $scope.dimensionImageMin;
      }
      else{
        $scope.movies[$scope.numFilm].dimensionCadre=  $scope.dimensionCadreMax;
        $scope.movies[$scope.numFilm].dimensionImage = $scope.dimensionImageMax;

      }
    }

    // Fonction d'ajout d'une review
    $scope.ajouterReview = function(review){
      $scope.movies[$scope.numFilm].reviews.push({'stars':review.note,'body':review.contenu,'author':review.email});
      $scope.review= {};
    }

  });

})();

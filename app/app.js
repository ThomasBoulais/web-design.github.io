(function(){
  var app = angular.module('guide', []);

  app.controller('GuideController', function($scope, $http){
    $scope.fiche = {
      nom :"",
      afficher : false,
      plot :""
    };
    $scope.dimensionner = function(boolean){
      if(boolean == true){
        return 'list-group-item col-lg-3';
      }
      else{
        return 'list-group-item col-lg-6'
      }

    }
    $scope.movies = [
      {
        name: "The Shawshank Redemption",
        yearRelease: 1994,
        director: "Frank Darabont",
        rating: 9.3,
        mature: false,
        plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        thumb: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
        trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
        reviews: [
          {
            stars: 5,
            body: "I love this movie!",
            author: "joe@thomas.com"
          },
          {
            stars: 1,
            body: "This movie sucks!",
            author: "tim@hater.com"
          }
        ]
      },
      {
        name: "Pulp fiction",
        yearRelease: 1994,
        director: "Quentin Tarantino",
        rating: 8.9,
        mature: true,
        plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        thumb: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
        trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
        reviews: [
          {
            stars: 3,
            body: "Pretty neat!",
            author: "zoe@thomas.com"
          }
        ]
      },
      {
        name: "The Godfather",
        yearRelease: 1972,
        director: "Francis Ford Coppola",
        rating: 9.2,
        mature: true,
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        thumb: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
        trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
        reviews: [
          {
            stars: 4,
            body: "He made me an offer i couldn't resist!!",
            author: "zaga@more.de"
          }
        ]
      },
      {
        name: "The Godfather: Part II",
        yearRelease: 1974,
        director: "Francis Ford Coppola",
        rating: 9.0,
        mature: true,
        plot: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        thumb: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,702,1000_AL_.jpg",
        trailer: "https://www.youtube.com/watch?v=9O1Iy9od7-A",
        reviews: [
          {
            stars: 2,
            body: "Plutôt décevant, comme toutes les suites en général en fait.. :/",
            author: "barbara@boug.ri"
          }
        ]
      },
      {
        name: "The Dark Knight",
        yearRelease: 2008,
        director: "Christopher Nolan",
        rating: 9.0,
        mature: true,
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        thumb: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        reviews: [
          {
            stars: 5,
            body: "My fav movie of all time. A true masterpiece!",
            author: "thomas.wayne@rip.de"
          }
        ]
      }
    ];

  });
})();

(function(){
  var app = angular.module('guide', [ ]);

  // définition de movies
  app.controller('GuideController', function(){
    this.movies = [
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
            body: "I love this product!",
            author: "joe@thomas.com"
          },
          {
            stars: 1,
            body: "This product sucks!",
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
      }
    ];
  });

  // définition des fonctions onglets
  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  

})();

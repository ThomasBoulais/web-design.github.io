var app = angular.module('guide', []);

app.controller('GuideController', function(){
  this.movies = [
    {
      name: "The Shawshank Redemption",
      yearRelease: 1994,
      rating: 9.3,
      mature: false,
      thumb: "content/img/??",
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
      rating: 8.9,
      mature: true,
      thumb: "content/img/??",
      trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
      reviews: [
        {
          stars: 3,
          body: "Pretty neat!",
          author: "zoe@thomas.com"
        }
      ]
    }
  ]
})

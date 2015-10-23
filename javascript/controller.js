angular.module('movieDBControllers',[])
.controller('HomeController',function($scope,$location, MovieListService,myMovieConfig) {
 $scope.loading = true;
 $scope.title = 'Home Page'
 var url = myMovieConfig.moviesEndpoint + '/upcoming?api_key=' + myMovieConfig.apiKey;
 MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
           $location.path('/error/' +error.data.status_message+' /' +error.status)
        });
})
.controller('MovieDetailsController', function($scope, $location,
$routeParams, MovieListService, myMovieConfig) {
//    
      $scope.title = 'Movie Details';
      var id = $routeParams.movieId;
      var url = myMovieConfig.moviesEndpoint + '/' + id + '?api_key=' + myMovieConfig.apiKey;
      MovieListService.getList(url).then(
      function(result){
      $scope.movie = result.data;

      }
        ).catch(
        function(error) {
        $location.path('/error/'+error.data.status_message+' /' +error.status)
        });
})

.controller('MovieListController',function($scope, MovieListService,myMovieConfig) {
 $scope.loading = true;
 $scope.title = 'Popular Movies'
 var url = myMovieConfig.moviesEndpoint + '/popular?api_key=' + myMovieConfig.apiKey;
 MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
           $location.path('/error/' +error.data.status_message+' /' +error.status)
        });
})

.controller('MovieUpcomingController',function($scope, MovieListService,myMovieConfig) {
 $scope.loading = true;
 $scope.title = 'Upcoming Movies'
 var url = myMovieConfig.moviesEndpoint + '/upcoming?api_key=' + myMovieConfig.apiKey;
 MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
           $location.path('/error/' +error.data.status_message+' /' +error.status)
        });
})
.controller('MovieNowPlayingController',function($scope, $location, MovieListService,myMovieConfig) {
 $scope.loading = true;
 $scope.title = 'Now Playing Movies'
 var url = myMovieConfig.moviesEndpoint + '/now_playing?api_key=' + myMovieConfig.apiKey;
 MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error);
          $location.path('/error/'+error.data.status_message+'/'+error.status)
        });
})
.controller('MovieTopRatedController',function($scope,$location, MovieListService,myMovieConfig) {
 $scope.loading = true;
 $scope.title = 'Top Rated Movies'
 var url = myMovieConfig.moviesEndpoint + '/top_rated?api_key=' + myMovieConfig.apiKey;
 MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
           $location.path('/error/' +error.data.status_message+' /' +error.status)
        });

})
.controller("MovieErrorController",function($scope, $routeParams){
          $scope.message = $routeParams.message;
          $scope.status = $routeParams.status;
        
 });
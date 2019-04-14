
export class MoviesService {
  constructor($http) {
    this.$http = $http;
  }

  findMovieById(id) {
    return Promise.resolve(
      this.$http.get('https://reactjs-cdp.herokuapp.com/movies')
        .then(result => result.data.data.find(element => Number(element.id) === Number(id))));
  }


  getAllMovies() {
    return Promise.resolve(
      this.$http.get('https://reactjs-cdp.herokuapp.com/movies').then(result => result.data.data));
  }
}

MoviesService.serviceName = 'moviesService';
MoviesService.$inject = ['$http'];

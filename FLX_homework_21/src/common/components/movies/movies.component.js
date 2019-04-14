import { MoviesController } from "./movies.controller";
import './movies.component.scss';

export const MoviesComponent = {
  selector: 'movies',
  bindings: {
    movies: '<'
  },
  template: require(`./movies.template.html`),
  //template: '<div>Custom template </div>'
  controller: MoviesController
};

import 'babel-polyfill'; // features babel can't transpile. -- best to choose just what is needed instead of the entire package
import React from 'react';
import { render } from 'react-dom'; // render function for the browser
import { Router, browserHistory } from 'react-router'; // removes the need for # based urls
import { Provider } from 'react-redux';
import routes from './routes';
import { loadCourses } from './actions/courseAction';
import { loadAuthors } from './actions/authorActions';
// Webpack can import CSS files too:
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';


// passing initialState here would overwrite default state set in reducers.
// However it could be useful if hydrating state from the server.
const store = configureStore();
// initial load without server-rendering:
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
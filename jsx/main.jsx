
var React = require('react/addons');
var App = require('./components/App');

var Router = require('react-router');
var Route = Router.Route;

var routes = (
  <Route path="/" handler={App}>
  </Route>
);

Router.run(routes, Router.RefreshLocation, function(Root) {
  React.render(<Root {...window.INITIAL_PROPS} />, document.body);
});
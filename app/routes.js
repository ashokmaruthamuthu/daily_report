var Router = require('director').Router;
var App = require('./js/app.jsx');
var ReactDOM = require('react-dom');
var React = require('react');
var renderPage = function(){
    ReactDOM.render(React.createElement(App, {}), document.getElementById('container'));
  };
var routes = {
  '/': function(){
    window.routesOpts = {
      page: 'root'
    };
    renderPage();
  },
  'login': function(){
    window.routesOpts = {
      page: 'login'
    };
    renderPage();
  },
  '/report': function(){
    window.routesOpts = {
      page: 'report'
    };
    renderPage();
  }
};
module.exports = Router(routes);;

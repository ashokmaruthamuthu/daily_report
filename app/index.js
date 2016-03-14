var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./js/app.jsx');
var $ = require('jquery');
$(function(){
  window.ROUTER = require('./routes.js');
  window.ROUTER.init('/');
});

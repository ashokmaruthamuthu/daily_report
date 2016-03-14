var React = require('react');
var LoginForm = require('./login_form.jsx');
var App = React.createClass({
  render(){
    var component;
    if(window.routesOpts.page === 'login'){
      component = (<LoginForm/>);
    }else if(window.routesOpts.page === 'report') {
      component = (<h1>Login successfull</h1>);
    } else {
      component = (<h1>Root</h1>);
    }
    return component;
  }
});

module.exports = App;

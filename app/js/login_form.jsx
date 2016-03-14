var React = require('react');
var LoginForm = React.createClass({
  getInitialState(){
    return {
      formValues: {
        userName: null,
        password: null,
      },
      formErrorMsg: null
    };
  },
  onSubmit(){
    if(this.state.formValues.userName !== null && this.state.formValues.password !== null){
      window.ROUTER.setRoute('/report');
    }else{
      this.setState({'formErrorMsg': 'Fill mandatory field'});
    }
  },
  onFieldChange(field, value){
    var formValues = {
      userName: this.state.formValues.userName,
      password: this.state.formValues.password
    };
    formValues[field] = value.trim();
    this.setState({'formValues': formValues});
    this.setState({'formErroMsg': null});
},
  render(){
    return (<div className='login-form'>
      <div className='login-field'>
        <span>Username:</span>
        <span>
          <input type='text' value={this.state.formValues.userName} onChange={(e) => { this.onFieldChange('userName', e.target.value)}}/>
        </span>
      </div>
      <div className='login-field'>
        <span >Password:</span>
        <span>
          <input type='password' value={this.state.formValues.password} onChange={(e) => { this.onFieldChange('password', e.target.value)}}/>
        </span>
      </div>
      <div className='login-field'>
        <span>
          <span className='btn btn-primary' onClick={this.onSubmit}>Login</span>
        </span>
      </div>
      <div className = 'login-field'>
        <span className='error'>{this.state.formErrorMsg}</span>
      </div>
    </div>);
  }
});

module.exports = LoginForm;

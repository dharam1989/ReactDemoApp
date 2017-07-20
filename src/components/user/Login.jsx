import React from 'react';
import {Link  } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkAuth } from '../../actions/user-actions';
var divStyle = {
  display:"inline-block"
};
class Login extends React.Component {
    constructor(props) {
            super(props);
            this.state = {loading:false, type: '', message:'',  email:'', password:'', errors: {email:false, password:false} };
            
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        let id = this.props.userState.formdata.id || localStorage.getItem('id');
        let email =  this.props.userState.formdata.email || localStorage.getItem('email');
        let username =  this.props.userState.formdata.username || localStorage.getItem('username');
        let name =  this.props.userState.formdata.name || localStorage.getItem('name');
        this.redirectToDashboard(id, email, username, name);
    }
    componentDidUpdate(prevProps, prevState){
	    }
    componentWillReceiveProps(nextProps){
         this.setState({ type: nextProps.userState.type, message: nextProps.userState.message, loading:false });
         if(this.props.userState.formdata.id !== nextProps.userState.formdata.id  && nextProps.login){
             this.setState({email: '', password:'' });
             this.redirectToDashboard(nextProps.userState.formdata.id, nextProps.userState.formdata.email, nextProps.userState.formdata.username, nextProps.userState.formdata.name);
         }
    }
    redirectToDashboard = (id, email, username, name) => {
      if((id && id !== null &&  id !== '') && (email && username && name)) {
        localStorage.setItem('id', id);
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        localStorage.setItem('name', name);
        this.props.history.push('/Dashboard');
    }
  }
    componentDidReceiveProps(nextProps){
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
         
        this.setState({
        [name]: value
        });
    }
    handleSubmit(e) {
            e.preventDefault();
            var errors = this._validate();
            
            if(Object.keys(errors).length !== 0) {
            this.setState({
                errors: errors
            });
            this.setState({ type: 'danger', message: 'Some form field empty or invalid...' });
            return;
            } 
            errors = {email:'',password:''}
            this.setState({errors: errors});
            this.setState({loading: true});
            let request = {};
            this.setState({ type: 'info', message: 'Authenticating...' });
            request.email = this.state.email;
            request.password = this.state.password;

            this.props.checkAuth(request);
           //Some validation here

           
    }
    hideLoading() {
        this.setState({loading: false});
    }
    handleCancel(){
      //browserHistory.push('/about');
    }
    _validate() {
        var errors = {}
        if(this.state.email === "") {
        errors.email = "Email is required";
        }
        if(this.state.password === "") {
        errors.password = "Password is required";
        }
        
        return errors;
    }
   
  render() {
      if (this.state.type && this.state.message) {
            var classString = 'alert alert-' + this.state.type;
            var status = <div id="status" className={classString} ref="status">
            {this.state.message}
            </div>;
        }
    return ( <div className="container">
                <div className="row main">
                    <div className="main-login main-center">
                    <h2>Login</h2>
                        {status}
                        <form className="" method="post" action="#">
                            
                            <div className="form-group">
                                <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter your Email"/>
                                    </div>
                                    <span className="text-danger">{this.state.errors.email}</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" name="password" id="password" value={this.state.password} onChange={this.handleInputChange}  placeholder="Enter your Password"/>
                                        
                                    </div>
                                    <span className="text-danger">{this.state.errors.password}</span>
                                </div>
                            </div>

                            <div className="form-group" style={divStyle}>
                                <div className="col-md-6">
                                    <a href="#" onClick={ this.handleSubmit} type="button" id="signButton" disabled={this.state.loading} className="btn btn-primary btn-lg btn-block login-button">Login</a>
                                </div>
                                 <div className="col-md-6 alreadyregistered">
                                    <Link to={`/register`}>New Signup</Link>
                                </div>
                            </div>
                            <span className='fa-spinner fa-spin'></span>
                        </form>
                    </div>
                </div>
            </div>
            )
  }
}

function mapStateToProps(state, ownProps) {
  return {
 	userState: state.AppReducer.userState,
    loading: state.loading,
    login: state.AppReducer.login,
    islogout: state.AppReducer.islogout,
    
  };
}

function mapDispachToProps(dispatch){
	return bindActionCreators({
		checkAuth
	}, dispatch);
}
export default connect(mapStateToProps, mapDispachToProps)(Login)

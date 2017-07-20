import React from 'react';
//import { reduxForm } from 'redux-form';
import {Link  } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../../actions/user-actions';
var divStyle = {
  display:"inline-block"
};
class RegistrationFields extends React.Component {
    constructor(props) {
            super(props);
            console.log(props, 'prop');
            this.state = {loading:false, type: '', message:'', name:'', username:'', email:'', password:'', confirm:'', errors: {name:false, username:false, email:false, password:false,confirm:false} };
            
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleCancel = this.handleCancel.bind(this);
    }
    componentWillMount(){
        //this.redirectToDashboard(token,cId,uId,email,userFirstName,userLastName);
    }
    componentDidUpdate(prevProps, prevState){
	    }
    componentWillReceiveProps(nextProps){
         this.setState({ type: nextProps.userState.type, message: nextProps.userState.message });
         if(nextProps.userState.registrationSuccess){
             this.setState({ name: '', email: '', username:'',password:'',confirm:'' });
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
            errors = {name:'', email:'',username:'',password:'',confirm:''}
            this.setState({errors: errors});
            this.setState({loading: true});
            let request = {};
            this.setState({ type: 'info', message: 'Sending...' });
            request.name = this.state.name;
            request.username = this.state.username;
            request.email = this.state.email;
            request.password = this.state.password;

            this.props.addUser(request);
           //Some validation here

           
    }
    hideLoading() {
        this.setState({loading: false});
    }
    handleCancel(){
       //this.props.history.push('/login');
    }
    _validate() {
        var errors = {}
        if(this.state.name === "") {
          errors.name = "Name is required";
        }
        if(this.state.username === "") {
        errors.username = "Username is required";
        }
        if(this.state.email === "") {
        errors.email = "Email is required";
        }
        if(this.state.password === "") {
        errors.password = "Password is required";
        }
        if(this.state.confirm === "") {
        errors.confirm = "Confirm password is required";
        }
        if(this.state.confirm !== this.state.password) {
        errors.confirm = "Confirm must be identical with password";
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
                    <h2>Sign up</h2>
                        {status}
                        <form className="" method="post" action="#">
                            
                            <div className="form-group">
                                <label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="name" id="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Enter your Name"/>
                                    </div>
                                    <span className="text-danger">{this.state.errors.name}</span>
                                </div>
                            </div>

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
                                <label htmlFor="username" className="cols-sm-2 control-label">Username</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="username" id="username" value={this.state.username} onChange={this.handleInputChange}  placeholder="Enter your Username"/>
                            
                                    </div>
                                    <span className="text-danger">{this.state.errors.username}</span>
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

                            <div className="form-group">
                                <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" name="confirm" id="confirm" value={this.state.confirm} onChange={this.handleInputChange}  placeholder="Confirm your Password"/>
                                        
                                    </div>
                                    <span className="text-danger">{this.state.errors.confirm}</span>
                                </div>
                            </div>

                            <div className="form-group" style={divStyle}>
                                <div className="col-md-5">
                                    <a href="#" onClick={ this.handleSubmit} type="button" id="signButton" disabled={this.state.loading} className="btn btn-primary btn-lg btn-block login-button">Register</a>
                                </div>
                                <div className="col-md-7 alreadyregistered">
                                    <Link to={`/login`}>Already Registered?</Link>
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
    loading: state.loading
    
  };
}

function mapDispachToProps(dispatch){
	return bindActionCreators({
		addUser
	}, dispatch);
}
export default connect(mapStateToProps, mapDispachToProps)(RegistrationFields)

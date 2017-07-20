import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout, userlist } from '../../actions/user-actions';

class Dashboard extends React.Component {
    constructor(props) {
            super(props);
            this.state = {loading:false, type: '', message:'' };
            this.handleLogout = this.handleLogout.bind(this);
    }
    componentWillMount(){
        let id = this.props.userState.formdata.id || localStorage.getItem('id');
        let email =  this.props.userState.formdata.email || localStorage.getItem('email');
        let username =  this.props.userState.formdata.username || localStorage.getItem('username');
        let name =  this.props.userState.formdata.name || localStorage.getItem('name');
        this.redirectToDashboard(id, email, username, name);
    }
   
    componentWillReceiveProps(nextProps){
          //this.setState({ type: nextProps.userState.type, message: nextProps.userState.message, loading:false });
          //console.log(nextProps, 'nextProps');
          this.setState({list:nextProps.alluserlist
                 });
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    if(this.props.islogout === true){
        localStorage.clear();
        this.props.history.push('/login');
    }
  }
    redirectToDashboard = (id, email, username, name) => {
      if((id === null ||  id === '') && ((email==='' && username ==='' && name ==='') || (email===null && username ===null && name ===null))) {
        this.props.history.push('/login');
    }
    
    if(typeof this.state.list == "undefined" || this.state.list == null){
        console.log(this.state.list, 'API CALL');
        this.props.userlist();
    }
    this.setState({list:[]
                 });
   this.setState({ type: 'info', message: 'Logined in as a '+name });
  }
    componentDidReceiveProps(prevProps){
        console.log(prevProps, 'prevProps');
    }
    handleLogout(){
      this.props.logout();
    }
  render() {
      if (this.state.type && this.state.message) {
            var classString = 'alert alert-' + this.state.type;
            var status = <div id="status" className={classString} ref="status">
            {this.state.message}
            </div>;
        }
    return ( <div className="container dashboard-center">
                <div className="row main">
                    <div className="logout pull-right bg-success text-white">
                    <a href="#" type="button" onClick={ this.handleLogout} id="" className="cancel-button">Logout</a>
                    </div>
                    <div className="main-dashboard">
                    <h2>Dashboard</h2>
                    
                    {status}
                    <div className="container1">
                            <div className="data-header row">
                               <div className="col-md-3">#</div>
                               <div className="col-md-3">Name</div>
                               <div className="col-md-3">Email</div>
                               <div className="col-md-3">UserName</div>
                            </div>
                            {
                            this.state.list.map(function(user, i){
                                return <div className={(i%2 ? "data-row row even":"data-row row odd")} key={i}>
                                            <div className="col-md-3">{++i}</div>
                                            <div className="col-md-3">{user.name}</div>
                                            <div className="col-md-3">{user.email}</div>
                                            <div className="col-md-3">{user.username}</div>
                                       </div>
                            })
                           }
                    </div>
                    </div>
                </div>
            </div>
            )
  }
}

function mapStateToProps(state, ownProps) {
  return {
 	userState: state.AppReducer.userState,
     login: state.AppReducer.login,
     islogout: state.AppReducer.islogout,
     alluserlist : state.AppReducer.alluserlist,
     loading: state.loading
    
  };
}

function mapDispachToProps(dispatch){
	return bindActionCreators({
		logout,
        userlist
	}, dispatch);
}
export default connect(mapStateToProps, mapDispachToProps)(Dashboard)

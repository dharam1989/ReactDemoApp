import React from 'react';
import {Link  } from 'react-router-dom'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <header>
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/" title="Webdunia React"><img alt='logo' src="http://www.webdunia.net//Portals/0/Images/wd_logo.png?ver=2015-11-25-143621-190" />
                    </a>
                </div>
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                        <Link to={`/register`}>Signup</Link>
                        </li>
                        <li>
                        <Link to={`/login`}>Login</Link>
                        </li>
                        <li>
                        <Link to={`/service`}>Services</Link>
                        </li>
                        <li>
                        <Link to={`/pricing`}>Pricing Table</Link>
                        </li>
                        <li>
                        <Link to={`/about`} >About</Link>
                        </li>
                        <li>
                         <Link to={`/faq`} >FAQ</Link>
                        </li>
                        <li>
                        <Link to={`/form`}>Form</Link>
                        </li>
                        <li><a href="#">Contact</a>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">Blog <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><Link to={`/blog`}>Blog</Link>
                                </li>
                                <li><Link to={`/blog/post`}>View One Post</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;
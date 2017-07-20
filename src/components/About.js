import React from 'react';
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentyear: new Date().getFullYear()};
  }
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">About
                        <small>It's Nice to Meet You!</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="../index.html">Home</a>
                        </li>
                        <li className="active">About</li>
                    </ol>
                </div>
            </div>

    <div className="row"><div className="col-md-6"><img alt='' className="img-responsive" src="http://placehold.it/750x450"/></div>
        <div className="col-md-6">
            <h2>Welcome to 'Modern Business'</h2>
            <p>This is a great place to introduce your company or project and describe what you do. This about page
                features general company information, employee bios, and other helpful elements.</p>
            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats
                vitaes nemo minima rerums unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.</p>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-12">
            <h2 className="page-header">Our Team</h2>
        </div>
        <div className="col-sm-4">
            <img alt='' className="img-responsive" src="http://placehold.it/750x450"/>
            <h3>John Smith
                <small>Job Title</small>
            </h3>
            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>
            <ul className="list-unstyled list-inline list-social-icons">
                <li className="tooltip-social facebook-link"><a href="#facebook-profile" data-toggle="tooltip"
                                                            data-placement="top" title="Facebook"><i
                        className="fa fa-facebook-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social linkedin-link"><a href="#linkedin-profile" data-toggle="tooltip"
                                                            data-placement="top" title="LinkedIn"><i
                        className="fa fa-linkedin-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social twitter-link"><a href="#twitter-profile" data-toggle="tooltip"
                                                           data-placement="top" title="Twitter"><i
                        className="fa fa-twitter-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social google-plus-link"><a href="#google-plus-profile" data-toggle="tooltip"
                                                               data-placement="top" title="Google+"><i
                        className="fa fa-google-plus-square fa-2x"></i></a>
                </li>
            </ul>
        </div>
        <div className="col-sm-4">
            <img alt='' className="img-responsive" src="http://placehold.it/750x450"/>
            <h3>John Smith
                <small>Job Title</small>
            </h3>
            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>
            <ul className="list-unstyled list-inline list-social-icons">
                <li className="tooltip-social facebook-link"><a href="#facebook-profile" data-toggle="tooltip"
                                                            data-placement="top" title="Facebook"><i
                        className="fa fa-facebook-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social linkedin-link"><a href="#linkedin-profile" data-toggle="tooltip"
                                                            data-placement="top" title="LinkedIn"><i
                        className="fa fa-linkedin-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social twitter-link"><a href="#twitter-profile" data-toggle="tooltip"
                                                           data-placement="top" title="Twitter"><i
                        className="fa fa-twitter-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social google-plus-link"><a href="#google-plus-profile" data-toggle="tooltip"
                                                               data-placement="top" title="Google+"><i
                        className="fa fa-google-plus-square fa-2x"></i></a>
                </li>
            </ul>
        </div>
        <div className="col-sm-4">
            <img alt='' className="img-responsive" src="http://placehold.it/750x450"/>
            <h3>John Smith
                <small>Job Title</small>
            </h3>
            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>
            <ul className="list-unstyled list-inline list-social-icons">
                <li className="tooltip-social facebook-link"><a href="#facebook-profile" data-toggle="tooltip"
                                                            data-placement="top" title="Facebook"><i
                        className="fa fa-facebook-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social linkedin-link"><a href="#linkedin-profile" data-toggle="tooltip"
                                                            data-placement="top" title="LinkedIn"><i
                        className="fa fa-linkedin-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social twitter-link"><a href="#twitter-profile" data-toggle="tooltip"
                                                           data-placement="top" title="Twitter"><i
                        className="fa fa-twitter-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social google-plus-link"><a href="#google-plus-profile" data-toggle="tooltip"
                                                               data-placement="top" title="Google+"><i
                        className="fa fa-google-plus-square fa-2x"></i></a>
                </li>
            </ul>
        </div>
        <div className="col-sm-4">
            <img alt='' className="img-responsive" src="http://placehold.it/750x450"/>
            <h3>John Smith
                <small>Job Title</small>
            </h3>
            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>
            <ul className="list-unstyled list-inline list-social-icons">
                <li className="tooltip-social facebook-link"><a href="#facebook-profile" data-toggle="tooltip"
                                                            data-placement="top" title="Facebook"><i
                        className="fa fa-facebook-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social linkedin-link"><a href="#linkedin-profile" data-toggle="tooltip"
                                                            data-placement="top" title="LinkedIn"><i
                        className="fa fa-linkedin-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social twitter-link"><a href="#twitter-profile" data-toggle="tooltip"
                                                           data-placement="top" title="Twitter"><i
                        className="fa fa-twitter-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social google-plus-link"><a href="#google-plus-profile" data-toggle="tooltip"
                                                               data-placement="top" title="Google+"><i
                        className="fa fa-google-plus-square fa-2x"></i></a>
                </li>
            </ul>
        </div>
        <div className="col-sm-4">
            <img alt='' className="img-responsive" src="http://placehold.it/750x450"/>
            <h3>John Smith
                <small>Job Title</small>
            </h3>
            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>
            <ul className="list-unstyled list-inline list-social-icons">
                <li className="tooltip-social facebook-link"><a href="#facebook-profile" data-toggle="tooltip"
                                                            data-placement="top" title="Facebook"><i
                        className="fa fa-facebook-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social linkedin-link"><a href="#linkedin-profile" data-toggle="tooltip"
                                                            data-placement="top" title="LinkedIn"><i
                        className="fa fa-linkedin-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social twitter-link"><a href="#twitter-profile" data-toggle="tooltip"
                                                           data-placement="top" title="Twitter"><i
                        className="fa fa-twitter-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social google-plus-link"><a href="#google-plus-profile" data-toggle="tooltip"
                                                               data-placement="top" title="Google+"><i
                        className="fa fa-google-plus-square fa-2x"></i></a>
                </li>
            </ul>
        </div>
        <div className="col-sm-4">
            <img alt='' className="img-responsive" src="http://placehold.it/750x450"/>
            <h3>John Smith
                <small>Job Title</small>
            </h3>
            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>
            <ul className="list-unstyled list-inline list-social-icons">
                <li className="tooltip-social facebook-link"><a href="#facebook-profile" data-toggle="tooltip"
                                                            data-placement="top" title="Facebook"><i
                        className="fa fa-facebook-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social linkedin-link"><a href="#linkedin-profile" data-toggle="tooltip"
                                                            data-placement="top" title="LinkedIn"><i
                        className="fa fa-linkedin-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social twitter-link"><a href="#twitter-profile" data-toggle="tooltip"
                                                           data-placement="top" title="Twitter"><i
                        className="fa fa-twitter-square fa-2x"></i></a>
                </li>
                <li className="tooltip-social google-plus-link"><a href="#google-plus-profile" data-toggle="tooltip"
                                                               data-placement="top" title="Google+"><i
                        className="fa fa-google-plus-square fa-2x"></i></a>
                </li>
            </ul>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-12">
            <h2 className="page-header">Our Customers</h2>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
            <img alt='' className="img-responsive img-customer" src="http://placehold.it/500x300"/>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
            <img alt='' className="img-responsive img-customer" src="http://placehold.it/500x300"/>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
            <img alt='' className="img-responsive img-customer" src="http://placehold.it/500x300"/>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
            <img alt='' className="img-responsive img-customer" src="http://placehold.it/500x300"/>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
            <img alt='' className="img-responsive img-customer" src="http://placehold.it/500x300"/>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
            <img alt='' className="img-responsive img-customer" src="http://placehold.it/500x300"/>
        </div>
    </div>
</div>
    );
  }
}
export default About;
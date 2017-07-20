import React from 'react';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentyear: new Date().getFullYear()};
  }

  render() {
    return (
            <div className="container">
            <div className="row">

                <div className="col-lg-12">
                    <h1 className="page-header">Pricing Table
                        <small>Our Pricing Options</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="../index.html">Home</a>
                        </li>
                        <li className="active">Pricing Table</li>
                    </ol>
                </div>

            </div>

            <div className="row">

                <div className="col-sm-3">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <strong>Basic</strong>
                        </div>
                        <div className="panel-body">
                            <h3 className="panel-title price">$9
                                <span className="price-cents">99</span>
                                <span className="price-month">mo.</span>
                            </h3>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">5 Projects</li>
                            <li className="list-group-item">5 GB of Storage</li>
                            <li className="list-group-item">Up to 100 Users</li>
                            <li className="list-group-item">10 GB Bandwidth</li>
                            <li className="list-group-item">Security Suite</li>
                            <li className="list-group-item"><a className="btn btn-primary">Sign Up Now!</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <strong>Plus</strong>
                        </div>
                        <div className="panel-body">
                            <h3 className="panel-title price">$19
                                <span className="price-cents">99</span>
                                <span className="price-month">mo.</span>
                            </h3>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">10 Projects</li>
                            <li className="list-group-item">10 GB of Storage</li>
                            <li className="list-group-item">Up to 250 Users</li>
                            <li className="list-group-item">25 GB Bandwidth</li>
                            <li className="list-group-item">Security Suite</li>
                            <li className="list-group-item"><a className="btn btn-primary">Sign Up Now!</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <strong>Premium <span className="label label-success">Best Value!</span></strong>
                        </div>
                        <div className="panel-body">
                            <h3 className="panel-title price">$29
                                <span className="price-cents">99</span>
                                <span className="price-month">mo.</span>
                            </h3>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">Unlimited</li>
                            <li className="list-group-item">50 GB of Storage</li>
                            <li className="list-group-item">Up to 1000 Users</li>
                            <li className="list-group-item">100 GB Bandwidth</li>
                            <li className="list-group-item">Security Suite</li>
                            <li className="list-group-item"><a className="btn btn-primary">Sign Up Now!</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <strong>Ultimate</strong>
                        </div>
                        <div className="panel-body">
                            <h3 className="panel-title price">$49
                                <span className="price-cents">99</span>
                                <span className="price-month">mo.</span>
                            </h3>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">Unlimited</li>
                            <li className="list-group-item">150 GB of Storage</li>
                            <li className="list-group-item">Unlimited</li>
                            <li className="list-group-item">500 GB Bandwidth</li>
                            <li className="list-group-item">Security Suite</li>
                            <li className="list-group-item"><a className="btn btn-primary">Sign Up Now!</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
  }
}

export default Pricing;
import React from 'react';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentyear: new Date().getFullYear()};
  }
  render() {
    return (
        <div className="container">
            <div id="myCarousel" className="carousel slide">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <div className="fill carousel-first"></div>
                        <div className="carousel-caption">
                            <h1>Reduce costs of finishing operations by 65%</h1>
                        </div>
                    </div>
                    <div className="item">
                        <div className="fill carousel-second"></div>
                        <div className="carousel-caption">
                            <h1>International Buyer Financing Available</h1>
                        </div>
                    </div>
                    <div className="item">
                        <div className="fill carousel-third"></div>
                        <div className="carousel-caption">
                            <h1>Family Owned for Four Generations</h1>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="icon-prev"></span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="icon-next"></span>
                </a>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <h3><i className="fa fa-check-circle"></i> Bootstrap 3 Built</h3>
                            <p>The 'Modern Business' website template by <a href="http://startbootstrap.com">Start Bootstrap</a> is built with <a href="http://getbootstrap.com">Bootstrap 3</a>. Make sure you're up to date with latest Bootstrap documentation!</p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h3><i className="fa fa-pencil"></i> Ready to Style &amp; Edit</h3>
                            <p>You're ready to go with this pre-built page structure, now all you need to do is add your own custom stylings! You can see some free themes over at <a href="http://bootswatch.com">Bootswatch</a>, or come up with your own using <a href="http://getbootstrap.com/customize/">the Bootstrap customizer</a>!</p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h3><i className="fa fa-folder-open"></i> Many Page Options</h3>
                            <p>This template features many common pages that you might see on a business website. Pages include: about, contact, portfolio variations, blog, pricing, FAQ, 404, services, and general multi-purpose pages.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-colored text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Modern Business: A Clean &amp; Simple Full Website Template by Start Bootstrap</h2>
                            <p>A complete website design featuring various single page templates from Start Bootstraps library of free HTML starter templates.</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Display Some Work on the Home Page Portfolio</h2>
                            <hr/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img alt="" className="img-responsive img-home-portfolio" src="http://placehold.it/700x450"/>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img alt="" className="img-responsive img-home-portfolio" src="http://placehold.it/700x450"/>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img alt="" className="img-responsive img-home-portfolio" src="http://placehold.it/700x450"/>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img alt="" className="img-responsive img-home-portfolio" src="http://placehold.it/700x450"/>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img alt="" className="img-responsive img-home-portfolio" src="http://placehold.it/700x450"/>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img alt="" className="img-responsive img-home-portfolio" src="http://placehold.it/700x450"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-colored">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h2>Modern Business Features Include:</h2>
                            <ul>
                                <li>Bootstrap 3 Framework</li>
                                <li>Mobile Responsive Design</li>
                                <li>Predefined File Paths</li>
                                <li>Working PHP Contact Page</li>
                                <li>Minimal Custom CSS Styles</li>
                                <li>Unstyled: Add Your Own Style and Content!</li>
                                <li>Font-Awesome fonts come pre-installed!</li>
                                <li>100% <strong>Free</strong> to Use</li>
                                <li>Open Source: Use for any project, private or commercial!</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img alt="" className="img-responsive" src="http://placehold.it/700x450/ffffff/cccccc"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img alt="" className="img-responsive" src="http://placehold.it/700x450"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h2>Modern Business Features Include:</h2>
                            <ul>
                                <li>Bootstrap 3 Framework</li>
                                <li>Mobile Responsive Design</li>
                                <li>Predefined File Paths</li>
                                <li>Working PHP Contact Page</li>
                                <li>Minimal Custom CSS Styles</li>
                                <li>Unstyled: Add Your Own Style and Content!</li>
                                <li>Font-Awesome fonts come pre-installed!</li>
                                <li>100% <strong>Free</strong> to Use</li>
                                <li>Open Source: Use for any project, private or commercial!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row well">
                    <div className="col-lg-8 col-md-8">
                        <h4>'Modern Business' is a ready-to-use, Bootstrap 3 updated, multi-purpose HTML theme!</h4>
                        <p>For more templates and more page options that you can integrate into this website template, visit Start Bootstrap!</p>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <a className="btn btn-lg btn-primary pull-right" href="http://startbootstrap.com">See More Templates!</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default Home;
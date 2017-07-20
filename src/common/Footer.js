import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentyear: new Date().getFullYear()};
  }

  render() {
    return (
      <footer>
        <div className="container">
            <p>Copy Right {this.state.currentyear}</p>
        </div>
     </footer>
    );
  }
}

export default Footer;
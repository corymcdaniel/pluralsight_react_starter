// Handles the app template for each page
import React, { PropTypes } from 'react';
import Header from './common/Header';

// children are the child routes passed into App (ie: AboutPage.js)
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
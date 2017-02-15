import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>Result from Cory House @ Pluralsight's React-Redux-Router series.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
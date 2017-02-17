import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    // Don't bind in render, it will hurt performance.
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}
               />
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// ownProps references this component's own props
function mapStateToProps(state, ownProps) {
  return {
    //defines this.props.courses:
    courses: state.courses // .courses comes from the rootReducer courses prop
  };
}

// manual way to use dispatch:
/*
function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}
*/

// Sets actions to this.props.action
// Optionally could return each action the same as above too:
// createCourse: bindActionCreators(courseActions.createCourse, dispatch);
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

/*
the below style is shorthand for:
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);
 */
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseAction';


class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    // Don't bind in render, it will hurt performance.
    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
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
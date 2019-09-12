import React from "react"
import PropTypes from "prop-types";

const CoursesList = (props) => {
  debugger;
  return(<table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>  
      </thead>
      <tbody>

      { props.courses.map(course => {
        return(
          <tr key={course.id}>
            <td>{course.title}</td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
          </tr>
        )
        })
      }
      
      </tbody>
  </table>)
}

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired
};


export default CoursesList;
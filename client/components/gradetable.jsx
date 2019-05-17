import React from 'react';

class GradeTable extends React.Component {

  render() {
    const row = this.props.grades.map(grade => {
      return (
        <tr key={grade.id.toString()}>
          <td>{grade.id}</td>
          <td>{grade.name}</td>
          <td>{grade.course}</td>
          <td>{grade.grade}</td>
        </tr>
      );
    });

    return (
      <div className="table-responsive-sm">
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Course</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
        </table>
      </div>
    );
  }

}

export default GradeTable;

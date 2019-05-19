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
          <td scope="col"><button onClick={this.props.delete} data-id={grade.id} className="btn btn-danger">X</button></td>
        </tr>
      );
    });

    return (
      <div className="col-sm-9">
        <div className="table-responsive-sm">
          <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Course</th>
                <th scope="col">Grade</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {row}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GradeTable;

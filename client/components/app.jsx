import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(grades => grades.json())
      .then(grades => {
        this.setState({ grades: grades });
      });
  }

  addNewGrade(newGrade) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', req)
      .then(newGrade => newGrade.json())
      .then(grade => {
        const allGrades = this.state.grades.concat(grade);
        this.setState({ grades: allGrades });
      });
  }

  getAverageGrade() {
    const stateGrades = this.state.grades;
    let sum = 0;
    for (let grade of stateGrades) {
      sum += parseInt(grade.grade);
    }
    const avg = sum / stateGrades.length;
    const newAvg = avg.toFixed(0);
    return newAvg;
  }

  render() {
    let newAvg = this.getAverageGrade();
    return (
      <div className='wrapper'>
        <Header avg={newAvg}/>
        <div className="row">
          <GradeTable grades={this.state.grades}/>
          <GradeForm submit={this.addNewGrade}/>
        </div>
      </div>
    );
  }
}

export default App;

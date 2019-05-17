import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  getAverageGrade() {
    const stateGrades = this.state.grades;
    let sum = 0;
    for (let grade of stateGrades) {
      sum += grade.grade;
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
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;

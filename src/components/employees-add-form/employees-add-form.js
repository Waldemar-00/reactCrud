import { Component } from 'react'
import './employees-add-form.scss'
class EmployeesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeName: '',
      salary: ''
    }
  }
  onChangeInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.employeeName.length < 4 || this.state.salary.length < 3) {
      alert('Please write he/she name and salary')
    } else {
      this.props.onCreate(this.state.employeeName, this.state.salary)
    }
    this.setState({
      employeeName: '',
      salary: ''
    })
  }
  render() {
    const { salary, employeeName } = this.state
    return (
      <div className="app-add-form">
        <h3>Adding a new employee</h3>
        <form className='add-from d-flex'>
          <input onChange={this.onChangeInputs} name='employeeName' type="text" value={employeeName} className='form-control new-post-label' placeholder='What is it name?'/>
          <input onChange={this.onChangeInputs} name='salary' type="number" value={salary} className='form-control new-post-label' placeholder='Salary in $?' />
          <button type="submit" className='btn btn-outline-light' onClick={this.onSubmit}></button>
        </form>
      </div>
    )
  }
}
export default EmployeesAddForm
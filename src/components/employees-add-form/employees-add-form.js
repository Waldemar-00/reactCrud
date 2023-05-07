import { Component } from 'react'
import './employees-add-form.css'
class EmployeesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeName: '',
      salary: ''
    }
  }
  onChangeInputs = (e) => {
    //e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
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
          <button type="submit" className='btn btn-outline-light'></button>
        </form>
      </div>
    )
  }
}
export default EmployeesAddForm
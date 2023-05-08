import { Component } from 'react'
import AppInfo from '../app-info/app-info'
import SeachPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:  [
        { name: 'Pavel Kulesh', salary: 11000, id: 1},
        { name: 'Alex Brown', salary: 9000, id: 2 },
        { name: 'Uladzimir Gorochovsky', salary: 12000, id: 3 }
      ]
    }
    this.dataId = 4
  }
  deleteElement = (id) => {
    this.setState(({ data }) => {
      //const index = data.findIndex(elem => elem.id === id)
      // const before = data.slice(0, index)
      // const after = data.slice(index + 1)
      // const newData = [...before, ...after]
      return {
        data : data.filter(elem => elem.id !== id)
      }
    })
  }
  createEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      id: this.dataId++
    }
    this.setState(({ data }) => {
      return { data: [...data, newEmployee] }
    })
      
  }
  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="seach-panel">
          <SeachPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={ this.deleteElement }
        />
        <EmployeesAddForm onCreate={this.createEmployee}/>
      </div>
  )
  }
}

export default App
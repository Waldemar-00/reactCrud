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
        { name: 'Pavel Kulesh', salary: 11000, increase: false, rise: false, id: 1},
        { name: 'Alex Brown', salary: 9000, increase: false, rise: false, id: 2 },
        { name: 'Uladzimir Gorochovsky', increase: false, rise: false, salary: 12000, id: 3 }
      ]
    }
    this.dataId = 4
  }
  deleteElement = (id) => {
    this.setState(({ data }) => {
      return {
        data : data.filter(elem => elem.id !== id)
      }
    })
  }
  createEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.dataId++
    }
    this.setState(({ data }) => {
      return { data: [...data, newEmployee] }
    })
      
  }
  onToggleIncrease = (id) => {
    // this.setState(({ data }) => {
      // const index = data.findIndex(elem => elem.id === id)
      // const initial = data[index]
      // const newInitialState = { ...initial, increase: !initial.increase }
      // const newData = [...data.slice(0, index), newInitialState, ...data.slice(index + 1)]
      // return {
        // data: newData
      // }
    // })
    this.setState(({ data }) => ({
      data: data.map(obj => {
        if (obj.id === id) {
          return { ...obj, increase: !obj.increase }
        }
        return obj
      })
    }))
  }
  onToggleRise = (id) => {
    console.log(`Rise this ${id}`)
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
          onDelete={this.deleteElement}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onCreate={this.createEmployee}/>
      </div>
  )
  }
}

export default App
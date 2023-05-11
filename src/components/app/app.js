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
      ],
      term: '',
      filter: 'all'
    }
    this.dataId = 4
    this.counter = 0
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
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(obj => {
        if (obj.id === id) {
          return { ...obj, [prop]: !obj[prop] }
        }
        return obj
      })
    }))
  }
  searchEmployee = (items, term) => {
    if (term.lenght === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }
  onUpDateSearch = (term) => {
    this.setState({term})
  }
  filteres = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise)
      case 'salaryMoreThen1000':
        return items.filter(item => item.salary > 1000)      
      default: 
        return items
    }
  }
  onFilterSelect = (filter) => {
    this.setState(({filter})) //filter : filter
  }
  render() {
    const  {data, term, filter} = this.state
    const employees = data.length
    const increase = data.filter(obj => obj.increase).length
    const visibleData = this.filteres( this.searchEmployee(data, term), filter )
    return (
      <div className="app">
        <AppInfo
          number={ employees }
          award={ increase }
        />
        <div className="seach-panel">
          <SeachPanel
            onUpDateSearch={this.onUpDateSearch}
          />
          <AppFilter filter={filter}
          onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployeesList
          data={ visibleData }
          onDelete={ this.deleteElement }
          onToggleProp={ this.onToggleProp }
        />
        <EmployeesAddForm onCreate={ this.createEmployee }/>
      </div>
  )
  }
}

export default App
import AppInfo from '../app-info/app-info'
import SeachPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import './app.css'

function App() {
  const data = [
    { name: 'Pavel Kulesh', salary: 11000, id: 1},
    { name: 'Alex Brown', salary: 9000, id: 2 },
    { name: 'Uladzimir Gorochovsky', salary: 12000, id: 3 }
  ]
  return (
    <div className="app">
      <AppInfo />
      <div className="seach-panel">
        <SeachPanel />
        <AppFilter />
      </div>
      <EmployeesList data = { data }/>
      <EmployeesAddForm />
    </div>
  )
}

export default App
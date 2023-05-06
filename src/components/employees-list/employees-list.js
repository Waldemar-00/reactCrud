// import EmployeesListItem from "../employees-list-item/employees-list-item"
import EmployeesListItemClass from "../employees-list-item/employees-list-item-class"
import './employees-list.css'
const EmployeesList = ({ data }) => {
  const employees = data.map(item => {
    const {id, ...restItem} = item
    return (
      // <EmployeesListItem key={id} {...restItem} />
      <EmployeesListItemClass key = { id } { ...restItem } />
    )
  })
  return (
    <ul className="app-list list-group">
      { employees }
    </ul>
  )
}
export default EmployeesList
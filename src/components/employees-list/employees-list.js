// import EmployeesListItem from "../employees-list-item/employees-list-item"
import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'
const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const employees = data.map(item => {
    const {id, ...restItem} = item
    return (
      // <EmployeesListItem key={id} {...restItem} />
      <EmployeesListItem
        key={id} {...restItem} // from object data
        onDelete={() => onDelete(id)}
        onToggleProp={ (e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )}
      />
    )
  })
  return (
    <ul className="app-list list-group">
      { employees }
    </ul>
  )
}
export default EmployeesList
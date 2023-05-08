// import EmployeesListItem from "../employees-list-item/employees-list-item"
import EmployeesListItemClass from "../employees-list-item/employees-list-item-class"
import './employees-list.css'
const EmployeesList = ({ data, onDelete }) => {
  const employees = data.map(item => {
    const {id, ...restItem} = item
    return (
      // <EmployeesListItem key={id} {...restItem} />
      <EmployeesListItemClass
        key={id} {...restItem} // from object data
        onDelete={() => onDelete(id)}
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
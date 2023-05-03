import './employees-add-form.css'
function EmployeesAddForm () {
  return (
    <div className="app-add-form">
      <h3>Adding a new employee</h3>
      <form className='add-from d-flex'>
        <input type="text" className='form-control new-post-label' placeholder='What is it name?'/>
        <input type="number" className='form-control new-post-label' placeholder='Salary in $?' />
        <button type="submit" className='btn btn-outline-light'></button>
      </form>
    </div>
  )
}
export default EmployeesAddForm
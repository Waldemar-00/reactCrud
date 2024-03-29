import './employees-list-item.css'
const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, rise } = props
    let classList = "list-group-item d-flex justify-content-between"
    if (increase) {
      classList += ' increase'
    }
    if (rise) {
      classList += ' like'
  }
  //! it is dynamic classes
    return (
      <li className={classList}>
        <span className="list-group-item-label"
          data-toggle="rise"
          onClick={onToggleProp}
          // style={{ fontSize: '36px', color: 'red', transition: 'all', WebkitTransition: 'all', msTransition: 'all' }}
          //! it is not good practice - in line styles
        >{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button" className="btn-cookie btn-sm"
            data-toggle="increase"
            onClick={onToggleProp}>
            <i className='fas fa-cookie'></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    )
}

export default EmployeesListItem
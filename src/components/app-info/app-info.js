import './app-info.css'

const AppInfo = ({number, award}) => {
  return(
    <div className="app-info">
      <h1>Accounting for employees in your company</h1>
      <h2>Total number of employees: {number} </h2>
      <h2>Will recive the award: {award} </h2>
    </div>
  )
}
export default AppInfo
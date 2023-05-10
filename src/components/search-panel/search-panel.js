import { Component } from 'react'
import './seach-panel.css'
class SeachPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }
  onUpTerm = (e) => {
    this.setState({ term: e.target.value})
    this.props.onUpDateSearch(e.target.value)
  }
  render() {
    return (
      <input
      type="text"
      className="seach-input form-control"
      placeholder="Find employee"
      value={this.state.term}
      onInput={this.onUpTerm}
      />        
    )
  }
}
export default SeachPanel
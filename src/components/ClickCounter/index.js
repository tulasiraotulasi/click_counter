import {Component} from 'React'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <div className="mainDiv">
        <h1>The Button has been clicked {this.state.count} times</h1>
        <p>Click the button to increase the count</p>
        <div>
          <button className="btn" onClick={this.onIncrement}>
            Click ME!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter

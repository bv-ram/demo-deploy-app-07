import { Component } from "react"

class Counter extends Component {
state = {count:0}
onIncrement = () => {
    this.setState((prevState) => ({count:prevState.count + 1}))
}
onDecrement = () => {
    this.setState((prevState) => ({count:prevState.count - 1}))
}
    render () {
     const {count} = this.state
        return (
            <div>
                <h1>Count {count} </h1>
                <button onClick={this.onIncrement}>Incraese</button>
                <button onClick={this.onDecrement}>Decxrese</button>
            </div>
        )
    }
}

export default Counter
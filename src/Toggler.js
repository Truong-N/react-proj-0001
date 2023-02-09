import React from "react"

export default class Toggle extends React.Component {
    state = {
        on: false,
        show: true
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on,
                show: !prevState.show
            }
        })
    }

    render() {
        return (
            <div>
                {this.props.render({on: this.state.on, show:this.state.show, toggle:this.toggle})}
            </div>
        )
    }
}
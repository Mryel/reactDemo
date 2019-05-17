import React, {Component} from 'react'
import ReactDOM from 'react-dom'
class Modal extends Component {
    constructor (props) {
        super(props)
        this.container = document.createElement("div")
        document.body.append(this.container)
    }
    componentWillUnmount () {
        document.body.removeChild(this.container)
    }
    render () {
        return ReactDOM.createPortal(
            <div className="modal">
                <span className="close" onClick={this.props.onClose}>
                    &times;
                </span>
                <div className="content">
                    {this.props.children}
                </div>
            </div>,
            this.container
        )
    }
}
export default Modal
import React, {Component} from 'react'
import Header from './Header'
class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: ""
        }
        this.onLogout = this.onLogout.bind(this)
    }
    onLogout () {}
    render () {
        const { match, location } = this.props
        const { username } = this.state
        return (
            <div>
                <Header
                    username={username}
                    onLogout={this.handleLogout}
                    location={location}
                ></Header>
            </div>
            // <Route>

            // </Route>
        )
    }
}
export default Home
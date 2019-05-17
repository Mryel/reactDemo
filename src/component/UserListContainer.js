import React, {Component} from 'react'
import UserList from './UserList'
import UserDetail from './UserDetail'
class UserListContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            users: [],
            currentUserId: null
        }
        this.handleAddUser = this.handleAddUser.bind(this)
        this.handleSetCurrentUser = this.handleSetCurrentUser.bind(this)
    }
    componentDidMount () {
        var that = this
        fetch('http://192.168.0.109:8080/users').then(res => {
            res.json().then(function (data) {
                that.setState({
                    users: data
                })
            })
        })
    }
    handleAddUser (user) {
        var that = this
        fetch('http://192.168.0.109:8080/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"name": user})
        }).then(function (res) {
            res.json().then(function (newUser) {
                that.setState((preState) => 
                    ({users: preState.users.concat([newUser.data])})
                )
            })
        })
    }
    handleSetCurrentUser (userId) {
        this.setState({
            currentUserId: userId
        })
    }
    render () {
        const filterUsers = this.state.users.filter((user) => 
            user.id === this.state.currentUserId
        )
        const currentUser = filterUsers.length > 0 ? filterUsers[0] : null
        return (
            <UserList users={this.state.users}
                currentUserId={this.state.currentUserId}
                onAddUser={this.handleAddUser}
                onSetCurrentUser={this.handleSetCurrentUser}
            />
            // <UserDetail currentUser={currentUser}/>
        )
    }
}
export default UserListContainer
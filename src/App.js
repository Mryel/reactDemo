import React, {Component} from 'react';
// import logo from './logo.svg';
// import PostList from './component/PostList'
// import LoginForm from './component/LoginForm'
// import Modal from './component/Modal'
// import Hello from './component/Hello'
import UserListContainer from './component/UserListContainer'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <PostList/>
//         <LoginForm/>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = { showModal: true }
  // }
  // closeModal = () => {
  //   this.setState({ showModal: false })
  // }
  render () {
    return (
      // <div>
      //   <h2>Dashboard</h2>
      //   {this.state.showModal && (
      //     <Modal onClose={this.closeModal}>Modal Dialog</Modal>
      //   )}
      // </div>
      <UserListContainer/>
    )
  }
}

export default App;

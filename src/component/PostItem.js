// import React, { Component } from 'react'

// class PostItem extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             vote: 0
//         }
//     }
//     handleClick () {
//         let vote = this.state.vote
//         vote++
//         this.setState({
//             vote: vote
//         })
//     }
//     render () {
//         const { title, author, date } = this.props
//         return (
//             <li>
//                 <div>
//                     {title}
//                 </div>
//                 <div>
//                     创建人：<span>{author}</span>
//                 </div>
//                 <div>
//                     创建时间：<span>{date}</span>
//                 </div>
//                 <div>
//                     <button
//                         onClick={ () => {
//                             this.handleClick();
//                         }}
//                     >
//                         点赞
//                     </button>
//                     &nbsp;
//                     <span>
//                         {this.state.vote}
//                     </span>
//                 </div>
//             </li>
//         )
//     }
// }
// function PostItem (props) {
//     const handleClick = () => {
//         props.onVote(props.post.id)
//     }
//     const { post } = props
//     return (
//         <li>
//             <div>
//                 {post.title}
//             </div>
//             <div>
//                 创建人：<span>{post.author}</span>
//             </div>
//             <div>
//                 创建时间：<span>{post.date}</span>
//             </div>
//             <div>
//                 <button onClick={handleClick}>点赞</button>
//                 &nbsp;
//                 <span>{post.vote}</span>
//             </div>
//         </li>
//     )
// }
// class PostItem extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             editing: false,
//             post: props.post
//         }
//         this.handleVote = this.handleVote.bind(this)
//         this.handleEditPost = this.handleEditPost.bind(this)
//         this.handleTitleChange = this.handleTitleChange.bind(this)
//     }
//     componentWillReceiveProps (nextProps) {
//         if (this.props.post !== nextProps.post) {
//             this.setState({
//                 post: nextProps.post
//             })
//         }
//     }
//     handleVote () {
//         this.props.onVote(this.props.post.id)
//     }
//     handleEditPost () {
//         const editing = this.state.editing
//         if (editing) {
//             this.props.onSave ({
//                 ...this.state.post,
//                 date: this.getFormatDate()
//             })
//         }
//         this.setState({
//             editing: !editing
//         })
//     }
//     handleTitleChange (event) {
//         const newPost = {...this.state.post, title: event.target.value}
//         this.setState({
//             post: newPost
//         })
//     }
//     getFormatDate () {

//     }
//     render () {
//         const { post } = this.state
//         return (
//             <li className="item">
//                 <div className="title">
//                     {this.state.editing
//                         ? <form>
//                             <textarea
//                                 value={post.title}
//                                 onChange={this.handleTitleChange}
//                             ></textarea>
//                         </form>
//                         : post.title}
//                 </div>
//                 <div>
//                     创建人：<span>{post.author}</span>
//                 </div>
//                 <div>
//                     创建时间：<span>{post.date}</span>
//                 </div>
//                 <div className="like">
//                     {/* <span>
//                         <img alt="vote" src={like} onClick={this.handleVote}/>
//                     </span> */}
//                     <button onClick={this.handleVote}>点赞</button>
//                     &nbsp;
//                     <span>
//                         {post.vote}
//                     </span>
//                 </div>
//                 <div>
//                     <button onClick={this.handleEditPost}>
//                         {this.state.editing ? "保存" : "编辑 "}
//                     </button>
//                 </div>
//             </li>
//         )
//     }
// }
import React, { Component } from 'react'
import { getFormatDate } from '../utils/date'
import './PostItem.css'

function PostItem (props) {
    const { post } = props
    return (
        <li className="postItem">
            <div className="title">
                {post.title}
            </div>
            <div>
                创建人:<span>{post.author.username}</span>
            </div>
            <div>
                更新时间:<span>{getFormatDate(post.updatedAt)}</span>
            </div>
            <div className="like">
                <span>{post.vote}</span>
            </div>
        </li>
    )
}

export default PostItem
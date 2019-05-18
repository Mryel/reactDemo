// import React, { Component } from 'react'
// import PostItem from './PostItem'

// const data = [
//     {title: "大家一起来讨论React吧", author: "张三", date: "2017-09-01 10:00"},
//     {title: "前端框架，你最爱哪一个", author: "李四", date: "2017-09-01 10:00"},
//     {title: "Web App的时代已经结束", author: "王五", date: "2017-09-01 10:00"}
// ]

// class PostList extends Component {
//     render () {
//         return (
//             <div>
//                 帖子列表：
//                 <ul>
//                     {data.map(item =>
//                       <PostItem 
//                         title={item.title}
//                         author={item.author}
//                         date={item.date}
//                       />
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }
// class PostList extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             posts: []
//         }
//         this.timer = null
//         this.handleVote = this.handleVote.bind(this)
//         this.handleSave = this.handleSave.bind(this)
//     }
//     componentDidMount () {
//         this.timer = setTimeout(() => {
//             this.setState({
//                 posts: [
//                     { id: 1, title: "大家一起来讨论React吧", author: "张三", date: "2017-09-01 10:00", vote: 0 },
//                     { id: 2, title: "前端框架，你最爱哪一个", author: "李四", date: "2017-09-01 10:00", vote: 0 },
//                     { id: 3, title: "Web App的时代已经结束", author: "王五", date: "2017-09-01 10:00", vote: 0}
//                 ]
//             })
//         }, 1000)
//     }
//     componentWillUnmount () {
//         if (this.timer) {
//             clearTimeout(this.timer)
//         }
//     }
//     handleVote (id) {
//         const posts = this.state.posts.map(item => {
//             const newItem = item.id === id ? {...item, vote: ++item.vote} : item
//             return newItem
//         })
//         this.setState({
//             posts
//         })
//     }
//     handleSave (post) {
//         console.log(this.state)
//         const posts = this.state.posts.map(item => {
//             const newItem = item.id === post.id ? post : item
//             return newItem
//         })
//         this.setState({
//             posts
//         })
//     }
//     render () {
//         return (
//             <div>
//                 帖子列表：
//                 <ul>
//                     {this.state.posts.map(item => 
//                         <PostItem
//                             key = {item.id}
//                             post = {item}
//                             onVote = {this.handleVote}
//                             onSave={this.handleSave}
//                         />
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PostsView from './PostsView'
import PostEditor from './PostEditor'
import { get, post } from "../utils/request"
import url from '../utils/url'
import './PostList.css'

class PostList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            posts: [],
            newPost: false
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleNewPost = this.handleNewPost.bind(this)
        this.refreshPostList = this.refreshPostList.bind(this)
    }
    componentDidMount () {
        this.refreshPostList()
    }
    // 获取帖子列表
    refreshPostList () {
        get(url.getPostList()).then(data => {
            if (!data.error) {
                this.setState({
                    posts: data,
                    newPost: false
                })
            }
        })
    }
    // 保存帖子
    handleSave (data) {
        // 当前登录用户的信息和默认的点赞数，同帖子的标题和内容，共同构成最终待保存的帖子对象
         const postData = { ...data, author: this.props.userId, vote: 0 }
         post(url.createPost(), postData).then(data => {
             if (!data.error) {
                this.refreshPostList()
             }
         })
    }
    // 取消新建帖子
    handleCancel () {
        this.setState({
            newPost: false
        })
    }
    // 新建帖子
    handleNewPost () {
        this.setState({
            newPost: true
        })
    }
    render () {
        const { userId } = this.props
        return (
            <div>
                <div>
                    <h2>帖子列表</h2>
                    {userId ? <button onClick={this.handleNewPost}>发帖</button> : null}
                </div>
                {this.state.newPost ? (
                    <PostEditor onSave={this.handleSave} onCancel={this.handleCancel} />
                ): null }
                <PostsView posts={this.state.posts} />
            </div>
        )
    }
}
export default PostList
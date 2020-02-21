import React, { Component } from 'react'
import Post from './Post'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    componentDidMount = () => {
        axios.get('/api/posts').then(res => {
            this.setState({ posts: res.data })
        }).catch(err => { console.log(err) })
    }

    render() {
        // this.getPosts()
        console.log(this.state.posts[0])
        return (
            <div>
                <p>Dashboard.js</p>
                <input /><button>Search</button>
                <ul>
                    {this.state.posts.map(el => <li>Title: {el.title}  img: {el.img}  text: {el.content}</li>)}

                </ul>
            </div>
        )
    }



}
export default Dashboard
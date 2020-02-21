import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            img: '',
            content: '',
            posts: []
        }
    }

    handleTitle = (e) => {
        this.setState({ title: e })
    }

    handleImg = (e) => {
        this.setState({ img: e })
    }

    handleContent = (e) => {
        this.setState({ content: e })
    }

    handleCancel = () => {
        this.setState({
            title: '',
            img: '',
            content: '',
            res: {}
        })
    }

    handleAdd = () => {
        axios.post('/api/newPost', {
            title: this.state.title,
            img: this.state.img,
            content: this.state.content
        }).then(res => this.setState({ res: res.data })).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p>
                    Form.js
                    <input onChange={(e) => this.handleTitle(e.target.value)} value={this.state.title} placeholder='insert title' />
                    <input onChange={(e) => this.handleImg(e.target.value)} value={this.state.img} placeholder='input img url' />
                    <input onChange={(e) => this.handleContent(e.target.value)} value={this.state.content} placeholder='post content' />
                    <button onClick={() => this.handleAdd()}>Add</button>
                    <button onClick={() => this.handleCancel()}>Cancel</button>

                </p>
            </div>
        )

    }
}

export default Form
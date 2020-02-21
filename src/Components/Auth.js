import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }


    }
    handleUsername = (e) => {
        this.setState({
            username: e
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e
        })
    }

    clearFields = () => {
        this.setState({
            username: '',
            password: ''
        })
    }

    handleRegister = () => {
        const { username, password } = this.state
        axios.post('/api/auth/register', {
            username: username,
            password: password
        }).then(res => {
            this.props.history.push('./dashboard')
        }).catch(err => { console.log(err) })
        this.clearFields()
    }

    handleLogin = () => {
        const { username, password } = this.state
        axios.post('/api/auth/login', {
            username: username,
            password: password
        }).then(res => {
            this.props.history.push('./dashboard')
        }).catch(err => {
            console.log(err)
            alert('sry man, password protection too good, get rekt')
        })
        this.clearFields()

    }

    render() {



        return (
            <div>
                <p>Auth.js</p>
                <input onChange={(e) => { this.handleUsername(e.target.value) }} value={this.state.username} placeholder='insert username' />
                <input onChange={(e) => { this.handlePassword(e.target.value) }} value={this.state.password} placeholder='insert password' />
                <button onClick={(e) => { this.handleLogin(e.target.value) }}>Login</button>
                <button onClick={() => this.handleRegister()}>Register</button>
            </div>
        )
    }
}

export default Auth
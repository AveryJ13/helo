import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <div><Link to='/dashboard'>Home</Link></div>
            <div><Link to='/new'>New Post</Link></div>
            <div><Link to='/'>Logout</Link></div>
        </div>
    )
}

export default Nav
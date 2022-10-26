import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Study Areas</h1>
            <div className="links">
                <Link to="/recommender">Classroom Recommendation</Link>
                <Link to="/">Classroom Catalog</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    )
}

export default Header
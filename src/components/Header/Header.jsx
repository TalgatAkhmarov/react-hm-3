import { Link } from "react-router-dom"
import './Header.scss'

const Header =() =>{

    return(
        <header>
            <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="signIn">Sign In</Link>
            </nav>
        </header>
    )
}

export default Header
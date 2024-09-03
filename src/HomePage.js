import loginimage from './assets/loginimage.png'
import searchIcon from './assets/search-icon.png'
import ListDropdown from './assets/ListDropdown.webp'
import './HomePage.css'

import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'

const HomePage=()=>{
    const [windowWidth,setWindowWidth]=useState(window.innerWidth)
    const [isOpen,setIsOpen]=useState(false)
    const handleEvent=()=>{
        setIsOpen(!isOpen)
    }
    useEffect(()=>{
        const handleResize=()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return(
        <div>
            {
                windowWidth>=780?
                    <div className="header">
                        <div className="left">
                            <img src={loginimage} alt="loginimage" className="image"></img>
                            <h1 className="image1">Insta Share</h1>
                        </div>
                        <div className="search">
                            <input type="search" className="parent-text" placeholder="Search Caption"/>
                            <div className="child">
                                <img src={searchIcon} alt="searchIcon" className="child-icon"></img>
                            </div>
                        </div>
                        <Link to="/home" className="links">Home</Link>
                        <Link to="/profile" className="links">Profile</Link>
                        <button className="button"><Link to='/' className="link">Logout</Link></button>
                    </div>
                :
                <div className="header">
                    <div className="left">
                            <img src={loginimage} alt="loginimage" className="image"></img>
                            <h1 className="image1">Insta Share</h1>
                    </div>
                    
                    <div className="dropdown">
                        <button className='dropdown-button'><img src={ListDropdown} alt="dropdown" className="dropdown-menu"/></button>
                        <ul className="dropdown-content">
                            <li>
                                <Link to='/home' className="links">Home</Link>
                            </li>
                            <li>
                                <Link to='/profile' className="links">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            }
            <hr/>
        </div>
    )
}
export default HomePage;
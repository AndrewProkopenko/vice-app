import React from 'react' 
import { NavLink } from 'react-router-dom'; 
import prefixes from './data/prefixes.json'

function Header() {
    return (
        <header className='bg-dark'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark px-0">
                    
                    <div className=" navbar-collapse" >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link pl-0 pr-4" to="/">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link pl-0 pr-4" to={`/${prefixes[0]['laptops']}laptops`}>Ноутбуки</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink  className="nav-link pl-0 pr-4" to={`/${prefixes[0]['washers']}washers`}  >Стиральные машины</NavLink>
                            </li> 
                        </ul>
                        
                    </div>
                </nav>
            </div> 
        </header>
    )
}

export default Header

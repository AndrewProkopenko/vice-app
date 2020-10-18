import React from 'react' 
import { NavLink } from 'react-router-dom'; 
import prefixes from './data/prefixes.json'

function Header() {

    const laptopsPrefix = prefixes[0]['laptops']
    const washersPrefix = prefixes[0]['washers'] 

    return (
        <header className='bg-dark'>
            <div className='container'>
                <nav className="navbar navbar-expand-sm navbar-dark px-0">
                    
                    <div className=" navbar-collapse" >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link pl-0 pr-4" to="/">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link pl-0 pr-4" to={`/${laptopsPrefix}laptops`}>Ноутбуки</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink  className="nav-link pl-0 pr-4" to={`/${washersPrefix}washers`}  >Стиральные машины</NavLink>
                            </li> 
                        </ul>
                        
                    </div>
                </nav>
            </div> 
        </header>
    )
}

export default Header

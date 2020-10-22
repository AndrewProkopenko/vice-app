import React from 'react' 
import { NavLink } from 'react-router-dom'; 
// import prefixes from './data/prefixes.json'

function Header() {

    // const laptopsPrefix = prefixes[0]['laptops']
    // const washersPrefix = prefixes[0]['washers'] 

    return (
        <header className='sura-header'>
            <div className='container'>
                <nav className="navbar-expand-sm">
                    
                    <div className=" navbar-collapse" >
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink exact className=" sura-header-link" to="/">Главная</NavLink>
                            </li>
                            <li>
                                <NavLink className=" sura-header-link" to="/uslugi">
                                    Услуги
                                    <ul>
                                        <li>
                                            <NavLink exact to='/uslugi/garantiynyy-remont'>
                                                Гарантийный ремонт
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to='/uslugi/remont-kompyuterov'>
                                                Ремонт компьютеров
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to='/uslugi/remont-noutbukov'>
                                                Ремонт ноутбуков
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to='/uslugi/remont-istochnikov-bespereboynogo-pitaniya-i-stabilizatorov-napryazheniya'>
                                                Ремонт источников бесперебойного питания и стабилизаторов напряжения
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to='/uslugi/remont-printerov-mfu-kopirov'>
                                                Ремонт принтеров, МФУ, копиров
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to='/uslugi/remont-planshetov-i-smartfonov'>
                                                Ремонт планшетов и смартфонов
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to='/uslugi/platnyy-remont'>
                                                Платный ремонт
                                            </NavLink>
                                        </li>
                                    </ul>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className=" sura-header-link" to={`/price`}>Цены</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink  className=" sura-header-link" to={`/${laptopsPrefix}laptops`}>Ноутбуки</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink  className=" sura-header-link" to={`/${washersPrefix}washers`}  >Стиральные машины</NavLink>
                            </li>  */}
                        </ul>
                        
                    </div>
                </nav>
            </div> 
        </header>
    )
}

export default Header

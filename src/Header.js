import React from 'react' 
import { NavLink , Link} from 'react-router-dom'; 
// import prefixes from './data/prefixes.json'

function Header() { 

    // const laptopsPrefix = prefixes[0]['laptops']
    // const washersPrefix = prefixes[0]['washers'] 

    return (
        <>
        <header className='sura-header'>
            <div className='container'>
                <nav className="navbar-expand-sm">
                    
                    <div className=" navbar-collapse justify-content-between" >
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink exact className=" sura-header-link" to="/">Главная</NavLink>
                            </li>
                            <li>
                                <Link className=" sura-header-link" to="/uslugi">
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
                                </Link>
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
                        <div className="search-wrapper">
                            <div className="search-button"></div>
                            <nav className="form-search">
                                <form action="/search" method="get">
                                    <input type="text" name="search" onBlur="this.value=this.value==''?'Поиск по сайту':this.value" onFocus="this.value=this.value=='Поиск по сайту'?'':this.value;" value="Поиск по сайту" />
                                    <input type="submit" value="" />
                                </form>
                            </nav>
                        </div>
                    </div>
                </nav>
               
            </div> 
        </header> 
            <div className="middle-panel header-mb-60" 
            style={{backgroundImage: "url(../img/fon-2.webp)" }}  
            >
                <div className="middle-top-wrapper">
                    <div className="container">
						<div className='row'>
                            <div className="col-12 col-md-5 col-lg-6">
                                <NavLink to="/" className="logo">АВТОРИЗОВАННЫЙ СЕРВИСНЫЙ ЦЕНТР  &quot;СУРА-СЕРВИС&quot;</NavLink>
                                <div className="site-activity">Ремонт компьютеров и оргтехники</div>						    
                            </div>
                                                        
                            <div className="col-12 col-md-7 col-lg-6">
                                <div className="site-contacts">
                                    <div className="site-time-work">Звонить с 9:00 до 18:00</div>
                                        <div className="phone-title">Телефоны:</div>
                                        <div className="phonesItems">
                                                <a href="tel:+7 (8412) 72-13-01">+7 (8412) 72-13-01</a><br/>
                                                <a href="tel:+7 (8412) 71-20-50">+7 (8412) 71-20-50</a><br/>
                                                <a href="tel:+7 (8412) 32-56-79">+7 (8412) 32-56-79</a><br/>
                                        </div>

                                </div>
                                <div className="site-address">
                                    <div className="address-title">Адрес:</div>
                                    <div className="addressItem">г. Пенза, ул. Богданова, д.10</div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>  
        </div>
        
        </>

    )

    // return (
    //     <header role="banner" className="site-header container">
	// 		<div className="top-panel">
	// 			<div className="top-panel-inner clear-self">
	// 				<div className="menu-wrapper">
	// 					<div className="menu"> 
	// 						<nav className="menu__scroll">
	// 								<ul className="menu__list">
    //                                     <li><NavLink to="/" >Главная</NavLink></li>
    //                                     <li>
    //                                         <NavLink to="/o-nas" >О нас</NavLink>
    //                                         <ul className="level-2">
    //                                             <li>
    //                                                 <NavLink to="/garantiynoye-obsluzhivaniye" >Гарантийное обслуживание</NavLink>
    //                                             </li>
    //                                             <li>
    //                                                 <NavLink to="/nashi-vendory" >Наши авторизации</NavLink>
    //                                             </li>
    //                                         </ul>
    //                                     </li>
    //                                     <li className="">
    //                                         <NavLink to="/uslugi" >Услуги</NavLink>
    //                                         <ul className="">   
    //                                             <li className="">
    //                                                 <NavLink to="/garantiynyy-remont" >Гарантийный ремонт</NavLink>
    //                                             </li>
    //                                             <li><NavLink to="/remont-kompyuterov" >Ремонт компьютеров</NavLink></li>
    //                                             <li><NavLink to="/remont-noutbukov" >Ремонт ноутбуков</NavLink></li>
    //                                             <li><NavLink to="/remont-istochnikov-bespereboynogo-pitaniya-i-stabilizatorov-napryazheniya" >Ремонт источников бесперебойного питания и стабилизаторов напряжения</NavLink></li>
    //                                             <li><NavLink to="/remont-printerov-mfu-kopirov" >Ремонт принтеров, МФУ, копиров</NavLink></li>
    //                                             <li><NavLink to="/remont-planshetov-i-smartfonov" >Ремонт планшетов и смартфонов</NavLink></li>
    //                                             <li><NavLink to="/platnyy-remont" >Платный ремонт</NavLink></li>
    //                                         </ul>
    //                                     </li>
    //                                     <li><NavLink to="/tseny" >Цены</NavLink></li>
    //                                     <li><NavLink to="/novosti" >Новости</NavLink></li>
    //                                     <li><NavLink to="/otzyvy" >Отзывы</NavLink></li><li><NavLink to="/kontakty" >Контакты</NavLink></li>
    //                                 </ul>							
    //                         </nav>
	// 					</div>
	// 					<div className="menu-button"></div>
	// 					<div className="menu__title"></div>
	// 				</div>
	// 				<div className="search-wrapper">
	// 					<div className="search-button"></div>
	// 					<nav className="form-search">
	// 						<form action="/search" method="get">
	// 							<input type="text" name="search" onBlur="this.value=this.value==''?'Поиск по сайту':this.value" onFocus="this.value=this.value=='Поиск по сайту'?'':this.value;" value="Поиск по сайту" />
	// 							<input type="submit" value="" />
	// 						</form>
	// 					</nav>
	// 				</div>
	// 			</div>
	// 		</div>
    //         {/* <div className="middle-panel" 
    //             // style={{backgroundImage: url(/d/fon-2.png) }}
    //         >
    //             <div className="middle-top-wrapper">
    //                 <div className="middle-wrapper-in clear-self">
	// 					<div className="left-part">
    //                         <NavLink to="https://suraservice.ru" className="logo">АВТОРИЗОВАННЫЙ СЕРВИСНЫЙ ЦЕНТР  &quot;СУРА-СЕРВИС&quot;</NavLink>
    //                         <div className="site-activity">Ремонт компьютеров и оргтехники</div>						    
    //                     </div>
													
    //                     <div className="right-part">
    //                         <div className="site-contacts">
    //                             <div className="site-time-work">Звонить с 9:00 до 18:00</div>
    //                                 <div className="phone-title">Телефоны:</div>
    //                                 <div className="phonesItems">
    //                                         <NavLink to="tel:+7 (8412) 72-13-01">+7 (8412) 72-13-01</NavLink><br/>
    //                                         <NavLink to="tel:+7 (8412) 71-20-50">+7 (8412) 71-20-50</NavLink><br/>
    //                                         <NavLink to="tel:+7 (8412) 32-56-79">+7 (8412) 32-56-79</NavLink><br/>
    //                                 </div>

    //                         </div>
    //                         <div className="site-address">
    //                             <div className="address-title">Адрес:</div>
    //                             <div className="addressItem">г. Пенза, ул. Богданова, д.10</div>
    //                         </div>
    //                     </div>
    //                 </div>
	// 			</div>
    //         </div>	 */}
	// 	</header> 
    // )
}

export default Header

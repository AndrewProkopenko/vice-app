import React from 'react'

function Footer() {
    return (
        <footer role="contentinfo" className="site-footer">
            <div className="map-wrapper">
                <div className="map">
                <div id="map">
                    <div id="myMap" style={{height: 400}} />
                </div>
                </div>
                <div className="map-inner-wrapper  clear-self">
                <div className="contacts-wrapper">
                    <div className="site-contacts-footer">
                    <div className="phone-title-footer">Телефоны:</div>
                    <div className="phonesItems">
                        <a href="tel:+7 (8412) 72-13-01">+7 (8412) 72-13-01</a><br />
                        <a href="tel:+7 (8412) 71-20-50">+7 (8412) 71-20-50</a><br />
                        <a href="tel:+7 (8412) 32-56-79">+7 (8412) 32-56-79</a><br />
                    </div>
                    <div className="site-time-work-footer">Звонить с 9:00 до 18:00</div> 
                    </div>
                    footer                                                        <div className="site-address-footer">
                    <div className="address-title-footer">Адрес:</div>
                    <div className="addressItem">г. Пенза, ул. Богданова, д.10</div>
                    </div>
                    <div className="form-call">
                    <div className="form-title-footer">Остались вопросы?</div>
                    <div><div className="call">Задать вопрос</div></div>
                    </div>
                </div> 
                </div>
            </div>
            <div className="footer-bottom-panel">
                <ul>
                <li>
                    <div className="site-name">Copyright © 2019 - 2020 ООО "СУРА-СЕРВИС"</div>
                </li>
                </ul>
            </div>
            </footer>

    )
}

export default Footer

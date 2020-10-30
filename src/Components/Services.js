import React from 'react' 
import { NavLink } from 'react-router-dom'
import MetaTags from 'react-meta-tags';


function Home() {
 
    return (
        <div>
            <MetaTags>
                <title>Услуги по ремонту компьютеров, оргтехники, планшетов в Москве - АСЦ "Сура-Сервис"</title>
                <meta name="keywords" content="ремонт компьютеров цены, ремонт оргтехники в Москве, ремонт планшетов в Москве"></meta>
                <meta name="description" content="Авторизованный сервисный центр &quot;Сура-Сервис&quot; осуществляет гарантийный и послегарантийный ремонт и техническое обслуживание компьютерного оборудования и оргтехники, планшетов и смартфонов, аудио и видео оборудования." /> 
            </MetaTags>
            <div className='container services-container'>
                <h1>Услуги</h1> 
                <p>
                    Авторизованный сервисный центр "Сура-Сервис" более 10 лет  осуществляет гарантийный и послегарантийный  ремонт и техническое обслуживание компьютерного оборудования и оргтехники, планшетов и смартфонов, аудио и видео оборудования.
                </p> 
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
        
            </div>
        </div>
    )
}

export default Home

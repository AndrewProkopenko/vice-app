import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';   
import prefixes from './data/prefixes.json'

import './assets/style/style.scss' ; 
  
import Header from './Header'
import Footer from './Footer'
 
import Home from './Home'
import Price from './Price'
import Services from './Services'

import GarantiynyyRemont from './uslugi/GarantiynyyRemont'
import RemontKompyuterov from './uslugi/RemontKompyuterov'
import RemontIstochnikov from './uslugi/RemontIstochnikov'
import RemontPrinterov from './uslugi/RemontPrinterov'
import RemontPlanshetov from './uslugi/RemontPlanshetov'
import PlatnyyRemont from './uslugi/PlatnyyRemont'


import ErrorPage from './ErrorPage' 

import LaptopsApp from './Laptops/LaptopsApp';    
import WashersApp from './Washers/WashersApp'
 

import LaptopProvider from './context/Laptops/LaptopProvider'
import WasherProvider from './context/Washers/WasherProvider'
  



function RouterComponent() {

    const laptopsPrefix = prefixes[0]['laptops']
    const washersPrefix = prefixes[0]['washers'] 

    return (     
        
        <WasherProvider>
        <LaptopProvider>  
        <div className="mb-4"> 
                <Router > 
                   
                        <Header/>

 

                        <Switch>
                            <Route exact path='/' component={Home} />

                          

                            <Route exact path='/price' component={Price} />

                            {/* Services  -  Uslugi  */}
                            <Route exact path='/uslugi' component={Services} />

                            <Route exact path='/uslugi/garantiynyy-remont' component={GarantiynyyRemont} />
                            <Route exact path='/uslugi/remont-kompyuterov' component={RemontKompyuterov} />
                            <Route exact path='/uslugi/remont-istochnikov-bespereboynogo-pitaniya-i-stabilizatorov-napryazheniya' component={RemontIstochnikov} />
                            <Route exact path='/uslugi/remont-printerov-mfu-kopirov' component={RemontPrinterov} />
                            <Route exact path='/uslugi/remont-planshetov-i-smartfonov' component={RemontPlanshetov} />
                            <Route exact path='/uslugi/platnyy-remont' component={PlatnyyRemont} />


                            <Route exact path={`/uslugi/remont-noutbukov/brand/`}>  <Redirect to={`/uslugi/remont-noutbukov`} /> </Route> 
                            <Route exact path={`/uslugi/remont-noutbukov/service/`}> <Redirect to={`/uslugi/remont-noutbukov`} /> </Route>
                            <Route exact path={`/uslugi/remont-noutbukov/brand/:brandSlug-${laptopsPrefix}`} component={LaptopsApp} />
                            <Route exact path={`/uslugi/remont-noutbukov/service/:serviceSlug-${laptopsPrefix}`} component={LaptopsApp} />
                            <Route exact path='/uslugi/remont-noutbukov' component={LaptopsApp} />

                            {/* Laptops */} 
                            <Route exact path={`/${laptopsPrefix}laptops/brand/:brandSlug`} component={LaptopsApp} /> 
                            <Route exact path={`/${laptopsPrefix}laptops/service/:serviceSlug`} component={LaptopsApp} /> 
                            
                            <Route exact path={`/${laptopsPrefix}laptops/brand/`}>  <Redirect to={`/${laptopsPrefix}laptops`} /> </Route> 
                            <Route exact path={`/${laptopsPrefix}laptops/service/`}> <Redirect to={`/${laptopsPrefix}laptops`} /> </Route>
                            
                            <Route exact path={`/${laptopsPrefix}laptops`} component={LaptopsApp} />
                             

                            {/* Washers */} 
                            <Route exact path={`/${washersPrefix}washers/brand/:brandSlug`} component={WashersApp} /> 
                            <Route exact path={`/${washersPrefix}washers/service/:serviceSlug`} component={WashersApp} />  
                            
                            <Route exact path={`/${washersPrefix}washers/brand/`}> <Redirect to={`/${washersPrefix}washers`} /> </Route> 
                            <Route exact path={`/${washersPrefix}washers/service/`}> <Redirect to={`/${washersPrefix}washers`} /> </Route>  
                            
                            <Route  path={`/${washersPrefix}washers`} component={WashersApp} /> 
                            
                            {/* 404 Error */}
                            <Route  path='*' component={ErrorPage} />
                        </Switch>
                   

                        <Footer/>
                </Router>  
             
        </div> 
        </LaptopProvider>
        </WasherProvider>
    )
}

export default RouterComponent

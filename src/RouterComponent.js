import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';   
import data from './data/database.json' 

import './assets/style/style.scss' ; 
  
import Header from './Components/Header'
import Footer from './Components/Footer'
 
import Home from './Components/Home'
import Price from './Components/Price'
import Services from './Components/Services'

import SinglePageService from './Components/SinglePageService';
 
 
import ErrorPage from './Components/ErrorPage' 
 
import LaptopsApp from './Laptops/LaptopsApp';     
 

import LaptopProvider from './context/Laptops/LaptopProvider' 
  
import ScrollToTop from './ScrollToTop'

 
function RouterComponent() {  
    const laptopsPrefix = data['prefixes'].laptops 
    const servicesList = data.pages.uslugi
    const meta = data.meta
    const price = data.price

    return (     
        <LaptopProvider>  
           <div className="mb-4"> 
                    <Router > 
                    
                            <ScrollToTop/>
                            
                            <Header/> 

                            <Switch>
                                <Route exact path='/' render={() => <Home meta={meta.main} /> } />
 
                                <Route exact path='/price' render={() => <Price price={price} meta={meta.price} /> }  />

                                {/* Services  -  Uslugi  */}
                                <Route exact path='/uslugi' render={() => <Services meta={meta.uslugi} /> } />
                                
                                <Route exact path='/uslugi/remont-noutbukov' render={() => <LaptopsApp meta={meta['uslugi-remont-noutbukov']} /> }   />

                                {
                                    servicesList.map((item, index) => {
                                        if(item.show) return (
                                            <Route key={index} exact path={`/uslugi/${item.slug}`}>
                                                <SinglePageService page={item} data={data} meta={meta[`uslugi-${item.slug}`]} />
                                            </Route>
                                        )
                                    })
                                }

                                {/* <Route exact path='/uslugi/garantiynyy-remont' component={GarantiynyyRemont} />
                                <Route exact path='/uslugi/remont-kompyuterov' component={RemontKompyuterov} />
                                <Route exact path='/uslugi/remont-istochnikov-bespereboynogo-pitaniya-i-stabilizatorov-napryazheniya' component={RemontIstochnikov} />
                                <Route exact path='/uslugi/remont-printerov-mfu-kopirov' component={RemontPrinterov} />
                                <Route exact path='/uslugi/remont-planshetov-i-smartfonov' component={RemontPlanshetov} />
                                <Route exact path='/uslugi/platnyy-remont' component={PlatnyyRemont} /> */}


                                <Route exact path={`/uslugi/remont-noutbukov/brand/`}>  <Redirect to={`/uslugi/remont-noutbukov`} /> </Route> 
                                <Route exact path={`/uslugi/remont-noutbukov/service/`}> <Redirect to={`/uslugi/remont-noutbukov`} /> </Route>
                                <Route exact path={`/uslugi/remont-noutbukov/brand/:brandSlug-${laptopsPrefix}`} render={() => <LaptopsApp meta={meta['uslugi-remont-noutbukov']} /> } />
                                <Route exact path={`/uslugi/remont-noutbukov/service/:serviceSlug-${laptopsPrefix}`} render={() => <LaptopsApp meta={meta['uslugi-remont-noutbukov']} /> } />
                                

                                 
                                <Route  path='*' component={ErrorPage} />
                            </Switch>
                    

                            <Footer/>
                    </Router>  
            </div>  
        </LaptopProvider> 
    )
}

export default RouterComponent


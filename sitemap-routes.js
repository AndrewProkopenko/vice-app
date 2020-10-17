import React from 'react';
import { Route, Redirect } from 'react-router';
 
import Home from './src/Home' 

import LaptopsApp from './src/Laptops/LaptopsApp';    
import WashersApp from './src/Washers/WashersApp'
 
 

import prefixes from './src/data/prefixes.json'

const laptopsPrefix = prefixes[0]['laptops']
const washersPrefix = prefixes[0]['washers'] 

export default (
    
    <Route>
        <Route exact path='/' component={Home} />
 
        <Route exact path={`/${laptopsPrefix}laptops/brand/:brandSlug`} component={LaptopsApp} /> 
        <Route exact path={`/${laptopsPrefix}laptops/service/:serviceSlug`} component={LaptopsApp} /> 
        
        <Route exact path={`/${laptopsPrefix}laptops/brand/`}> 
            <Redirect to={`/${laptopsPrefix}laptops`} />
        </Route> 
        <Route exact path={`/${laptopsPrefix}laptops/service/`}> 
            <Redirect to={`/${laptopsPrefix}laptops`} />
        </Route>
        
        <Route exact path={`/${laptopsPrefix}laptops`} component={LaptopsApp} />


        {/* Washers */}
        <Route exact path={`/${washersPrefix}washers/brand/:brandSlug`} component={WashersApp} /> 
        <Route exact path={`/${washersPrefix}washers/service/:serviceSlug`} component={WashersApp} />  
        
        <Route exact path={`/${washersPrefix}washers/brand/`}> 
            <Redirect to={`/${washersPrefix}washers`} />
        </Route> 
        <Route exact path={`/${washersPrefix}washers/service/`}> 
            <Redirect to={`/${washersPrefix}washers`} />
        </Route>  

        <Route  path={`/${washersPrefix}washers`} component={WashersApp} /> 
  
    </Route>
);
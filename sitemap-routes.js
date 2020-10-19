import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import prefixes from './src/data/prefixes.json'

import laptopsBrands from './src/data/laptops/brands.json'
import laptopsServices from './src/data/laptops/services.json'

import washersBrands from './src/data/washers/brands.json'
import washersServices from './src/data/washers/services.json'

const laptopsPrefix = prefixes[0]['laptops']
const washersPrefix = prefixes[0]['washers'] 

// const 

export default (
    
    <Route>  

        {
            laptopsBrands.map((item, index) => (
                <Route key={index} exact path={`/${laptopsPrefix}laptops/brand/${item.slug}`} />
            ))
        }
        {
            laptopsServices.map((item, index) => (
                <Route key={index} exact path={`/${laptopsPrefix}laptops/service/${item.slug}`} />
            ))
        }
           
        <Route exact path={`/${laptopsPrefix}laptops`} />

        {
            washersBrands.map((item, index) => (
                <Route key={index} exact path={`/${washersPrefix}washers/brand/${item.slug}`} />
            ))
        }  
        {
            washersServices.map((item, index) => (
                <Route key={index} exact path={`/${washersPrefix}washers/service/${item.slug}`} />
            ))
        }   
         

        <Route  path={`/${washersPrefix}washers`} /> 
  
    </Route>
);
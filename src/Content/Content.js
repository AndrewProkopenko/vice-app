import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Filtered from './Filtered'
import Main from './Main'

function Content() {
    return (
        <div className='bg-white border border-primary p-3'>
            <Switch>

               
                <Route 
                    exact 
                    path='/brand/:brand' 
                    component={ (routerProps) => <Filtered {... routerProps} type='brand' /> } 
                /> 
                <Route 
                    exact 
                    path='/service/:service' 
                    component={ (routerProps) => <Filtered {... routerProps} type='service'  /> } 
                /> 
                 <Route  
                    path='/' 
                    component={Main} 
                /> 

            </Switch>
        </div>
    )
}

export default Content

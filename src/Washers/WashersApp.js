import React from 'react' 

import WasherContext from '../context/Washers/WasherContext'

import WashersSidebar from './WashersSidebar'
import WashersContent from './WashersContent'
  
function WashersApp() {
    const context = React.useContext(WasherContext) 

   
    return (
        <div className='container'>
            <h1 className='my-5'>
                { context.getHeadingString() }
            </h1>
            <div className='row'>
                <div className='col-12 col-sm-5 col-md-3'>
                    <WashersSidebar/>
                </div>
                
                <div className='col-12 col-sm-7 col-md-9'> 
                    <WashersContent />
                </div>
            </div> 
        </div> 
    )
}

export default WashersApp

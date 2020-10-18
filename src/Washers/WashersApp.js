import React from 'react' 

import WasherContext from '../context/Washers/WasherContext'

import Content from '../Content/Content' 
import Sidebar from '../Sidebar/Sidebar'  
  
function WashersApp() {
    const context = React.useContext(WasherContext) 

   
    return (
        <div className='container'>
            <h1 className='my-5'>
                { context.getHeadingString() }
            </h1>
            <div className='row'>
                <div className='col-12 col-sm-5 col-md-3'>
                    <Sidebar
                        context={context}
                        typeProdUrl='washers'
                    /> 
                </div>
                
                <div className='col-12 col-sm-7 col-md-9'> 
                    <Content context={context}  />
                </div>
            </div> 
        </div> 
    )
}

export default WashersApp

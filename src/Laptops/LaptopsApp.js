import React from 'react'

// import LaptopProvider from '../context/LaptopProvider'
import LaptopContext from '../context/Laptops/LaptopContext'

import LaptopsSidebar from './LaptopsSidebar'
import LaptopsContent from './LaptopsContent' 

function LaptopsApp() {
 
    const context = React.useContext(LaptopContext) 
     
    return ( 
            <div className='container'>
                <h1 className='my-5'>
                   { context.getHeadingString() }
                </h1> 
                <div className='row'>
                    <div className='col-12 col-sm-5 col-md-3'>
                        <LaptopsSidebar/>
                    </div>
                    
                    <div className='col-12 col-sm-7 col-md-9'> 
                        <LaptopsContent />
                    </div>
                </div> 
            </div>  
    )
}

export default LaptopsApp

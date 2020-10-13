import React from 'react'

import ListRender from './ListRender' 
import LaptopContext from '../context/LaptopContext'

function Sidebar() {

    let context = React.useContext(LaptopContext) 
    
    return (
        <div className='bg-white border border-primary p-3'>
            <div className="d-flex flex-column link-container">
                <ListRender 
                    title='Бренды' 
                    preSlug='brand'
                    data={context.brands}
                />
            </div> 
            <hr/>
            <div className="d-flex flex-column link-container">
                <ListRender 
                    title='Все услуги' 
                    preSlug='service'
                    data={context.services}
                />
            </div>
        </div>  
    )
}

export default Sidebar

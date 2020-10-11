import React from 'react'

import ListRender from './ListRender'

import brands from '../data/brands.json'
import services from '../data/services.json'


function Sidebar() {
    return (
        <div className='bg-white border border-primary p-3'>
            <div className="d-flex flex-column link-container">
                <ListRender 
                    title='Бренды' 
                    preSlug='brand'
                    data={brands}
                />
            </div> 
            <hr/>
            <div className="d-flex flex-column link-container">
                <ListRender 
                    title='Все услуги' 
                    preSlug='service'
                    data={services}
                />
            </div>
        </div>  
    )
}

export default Sidebar

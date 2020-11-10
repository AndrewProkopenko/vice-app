import React from 'react'

import {NavLink} from 'react-router-dom'

function Breadcrumbs(props) {
    return (
        <nav className='container'>
            <ol className='breadcrumb  bg-white px-0'>
                {
                    props.items.map( (item) => {
                        return <li className='breadcrumb-item'>
                                    {   !item.lastChild &&
                                        <NavLink to={item.slug}>
                                            { item.name }
                                        </NavLink>
                                    }
                                    {   item.lastChild &&
                                        <span >
                                            { item.name }
                                        </span>
                                    }
                                </li>   
                    })
                } 
            </ol>
        </nav>
    )
}

export default Breadcrumbs

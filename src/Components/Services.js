import React from 'react' 

import { NavLink } from 'react-router-dom'
import MetaTags from 'react-meta-tags';



function Services(props) {
 
    return (
        <div>
            <MetaTags>
                <title>{props.meta.title}</title> 
                <metNavLink name="description" content={props.meta.description} /> 
            </MetaTags>
            <div className='container services-container'>

                <div dangerouslySetInnerHTML={{__html: props.data.content}}></div>
                 
                 
                    <ul>
                        {
                            props.data.uslugi.map( (item) => {
                                if(item.show) return <li>
                                        <NavLink exact to={`/uslugi/${item.slug}`}>
                                            { item.name }
                                        </NavLink>
                                    </li>
                                return ''
                            })
                        }
                    </ul> 
        
            </div>
        </div>
    )
}

export default Services

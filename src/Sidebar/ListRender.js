import React from 'react'
import { NavLink } from 'react-router-dom';
import prefixes from '../data/prefixes.json'
 

function ListRender(props) {

    let [hiddenClass, setHiddenClass] = React.useState(true)

    const prefix = prefixes[0][`${props.typeProdUrl}`]
  
    function showFullList() { 
        setHiddenClass(!hiddenClass)
    } 

    function renderLinks() { 
        return props.data.map( (item, index) => ( 
            <li  key={index}
                className={hiddenClass ? 'hidden' : 'show' }
            >
                <NavLink 
                     to={ `/${prefix}${props.typeProdUrl}/${props.preSlug}/${item.slug}`}
                     onClick={ ()=>{ props.setActive(item)} }
                > 
                {item.name}
             </NavLink>
            </li>
          
        ))
    }
    return (
        <div className="d-flex flex-column link-container ">
            { 
                props.title && 
                <p>
                    { props.title}
                </p>
            }
            <ul>
                {
                    renderLinks()
                } 
            </ul>

            <button className='btn btn-dark my-3' onClick={ showFullList }>
                Показать еще
            </button>

          
        </div>
                
    )
}

export default ListRender

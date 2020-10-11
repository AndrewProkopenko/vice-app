import React from 'react'
import { NavLink } from 'react-router-dom';

function ListRender(props) {

    let [hiddenClass, setHiddenClass] = React.useState(true)

    function showFullList() { 
        setHiddenClass(!hiddenClass)
    }

    function renderLinks() { 
        return props.data.map( (item, index) => ( 
            <li  key={index}
                className={hiddenClass ? 'hidden' : 'show' }
            >
                <NavLink 
                     to={ `/${props.preSlug}/${item.slug}`}
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

            <button className='btn btn-primary my-3' onClick={ showFullList }>
                Показать еще
            </button>

          
        </div>
                
    )
}

export default ListRender

import React from 'react'
import Breadcrumb from '../Breadcrumbs'

import MetaTags from 'react-meta-tags';
 

function SinglePageService(props) { 
     
    const content = props.data[`content-${props.page.slug}`]
    const breadcrumbs = [
        {
            name: 'Главная',
            slug: '/'
        },
        {
            name: 'Услуги',
            slug: '/uslugi'
        },
        {
            name: props.page.name,
            slug: props.page.slug, 
            lastChild: true
        }
    ]
      
    return (
        <React.Fragment>
            <MetaTags>
                <title>{props.meta.title}</title> 
                <meta name="description" content={props.meta.description} /> 
            </MetaTags>
 
            <Breadcrumb items={breadcrumbs} /> 
            
            <main role="main">
                <div className="container" dangerouslySetInnerHTML={{__html: content.content}}></div>
            </main>
            <div ></div>
        </React.Fragment>
    )
}

export default SinglePageService

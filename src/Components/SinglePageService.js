import React from 'react'
import MetaTags from 'react-meta-tags';
 

function SinglePageService(props) { 
 
    const content = props.data[`content-${props.page.slug}`]
      
    return (
        <React.Fragment>
            <MetaTags>
                <title>{props.meta.title}</title> 
                <meta name="description" content={props.meta.description} /> 
            </MetaTags>
            <main role="main">
                <div className="container" dangerouslySetInnerHTML={{__html: content.content}}></div>
            </main>
            <div ></div>
        </React.Fragment>
    )
}

export default SinglePageService

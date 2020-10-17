import React from 'react' 
import MetaTags from 'react-meta-tags';

function Home() {
 
    return (
        <div>
            <MetaTags>
                <title>Main - VA</title>
                <meta name="description" content="Main page" /> 
            </MetaTags>
            <div className='container'>
                <h1 className='my-5'>Main</h1>
                <div className='empty-container'>
                    <span></span> 
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h5> It's main page! </h5>    
                    <p></p>  
                </div>   
            </div>
        </div>
    )
}

export default Home

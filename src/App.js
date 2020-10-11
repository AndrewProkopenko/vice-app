import React from 'react'; 
import { BrowserRouter as Router} from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'

import './assets/style/style.scss' ;

function App() {
  return ( 
    <Router>
      <div className='container my-5'>
        <h1 className='my-3'>
            Title
        </h1>
        <div className='row'>
          <div className='col-12 col-sm-5 col-md-3'>
              <Sidebar/>
          </div>
          
          <div className='col-12 col-sm-7 col-md-9'>
              <Content/> 
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

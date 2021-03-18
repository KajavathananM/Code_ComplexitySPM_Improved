import React from 'react';

import './Assets/css/Home.css';
import './Assets/css/LogoGather.css';
import 'bootstrap/dist/css/bootstrap.css';

import LogoGather from './components/Home/LogoGatherer';
import TinyEditor from './components/Home/TinyEditor';
// import FilePicker from './components/Home/FilePicker';
import FilePondUploader from './components/Home/FilePondUploader';
import Footer from './components/Home/Footer';

function App() {
  return (
    <div className="App" >
      {/* <LogoGather> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-caption">
                <h1 className="page-title"><big>Code Complexity Measurer</big></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </LogoGather> */}
      {/* <!-- /.page-header-->
      <!-- news --> */}
      <div className="card-section" >
        <div className="container">
          <div className="card-block bg-white mb30" >
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {/* <!-- section-title --> */}
                <div className="section-title mb-0">
                  <div className="jumbotron">
                  <LogoGather/>
                  <h1 class="display-4">Hello, world!</h1>
                  <h3 class="">All about Code Complexity Measurement.<br/></h3>
                  <p>We share our knowledge on Demonstartion<br/> Our approach is very simple: we define your problem and give the best solution. </p>
                  </div>
                  <h4 style={{color:'Orange'}}>File Browse or Drag & Drop Option</h4><br/>
                  <FilePondUploader/>
                  <hr/>

                  {/* <h4 style={{color:'green'}}>File Picker Option</h4> */}
                  {/* Text Editor */}
                  {/* <TinyEditor/> */}


                  {/* <hr/> */}
                  {/* <h4>File Picker Option</h4> */}
                  {/* <FilePicker /> */}

                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <Footer/>
      </div>
    </div>
     
    
  );
}

export default App;

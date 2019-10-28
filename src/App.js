import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/projects.css';
import './css/resume.css';
import './css/navbar.css';
import About from './components/about';
import Projects from './components/projectspage';
import Resume from './components/resume';
import LandingPage from './components/landingpage'
import MyNavbar from './components/navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import MyFooter from './components/footer';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Route exact path='/' component={LandingPage}/>
        <Route path='/about' component={About}/>
        <Route path='/projectspage' component={Projects}/>
        <Route path='/resume' component={Resume}/>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App;

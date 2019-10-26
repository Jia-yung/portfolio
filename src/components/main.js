import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './about';
import Projects from './projectspage';
import Resume from './resume';
import LandingPage from './landingpage'

const Main = () => (    
    <div style={{height: '100%'}}>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About}/>
            <Route path="/projectspage" component={Projects}/>
            <Route path="/resume" component={Resume}/>      
        </Switch>
    </div>
    
)

export default Main;
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './about';
import Contacts from './contact';
import Projects from './projects';
import Resume from './resume';
import LandingPage from './landingpage';

const Home = () => (
    <div style={{minWidth:'100%',  maxHeight:'100%', display:'flex'}}>     
      {/* <Switch>
        <Route path="/portfolio" component={LandingPage} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />  
      </Switch>   */}
      <LandingPage />
      <About />
      <Projects />
      <Resume />
      <Contacts />

      
    </div>
    
  )

export default Home;
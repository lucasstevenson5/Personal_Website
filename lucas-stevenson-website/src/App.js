import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import ProjectsContainer from './components/ProjectsContainer';
import Resume from './components/Resume';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-bleu">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <ProjectsContainer />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

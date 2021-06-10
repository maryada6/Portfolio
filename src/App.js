import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./modules/header" 
import About from "./modules/about"
import Projects from "./modules/projects"
import Education from "./modules/education"
import Skills from "./modules/skills"
import Work from "./modules/work"
import Accomplishments from "./modules/accomplishments"
import Certificates from "./modules/certificates"
import Footer from "./modules/footer"
function App() {
  return (
    <>
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/">
          <About/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/projects">
        <Projects/>
        </Route>
        <Route exact path="/education">
        <Education/>
        </Route>
        <Route exact path="/skills">
        <Skills/>
        <Work/>
        <Accomplishments/>
        <Certificates/>
        </Route>
        </Switch>
        <Footer/>
    </Router>
   
    {/* <About/>
    <Projects/>
    <Education/>
    <Skills/>
    <Work/>
    <Accomplishments/>
    <Certificates/>
    <Footer/> */}
   </>
  );
}

export default App;

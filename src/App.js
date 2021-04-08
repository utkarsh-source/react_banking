import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import {section1, section2, section3} from './components/sectionData/sectionData'
import Services from './components/Services'
import Footer from './components/Footer'
import { Route , Switch} from 'react-router-dom'
import SignUp from './components/SignUp'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Hero />
          <Section id="about" section={section1} />
          <Section id="discover" section={section2} inverse />
          <Services />
          <Section  id="signup" section={section3} inverse />
          <Footer />
        </Route>
        <Route path='/signup' exact>
          <SignUp/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

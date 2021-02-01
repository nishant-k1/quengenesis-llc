import React from 'react';
import './App.css';
import Header from '../shared/Header/Header';
import {Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
// import Services from '../pages/Services/Services';
import Marketing from '../pages/Marketing/Marketing';
import It from '../pages/It/It';
import ApiIntegration from '../pages/ApiIntegration/ApiIntegration';
import Contact from '../pages/Contact/Contact';
import Payment from '../pages/Payment/Payment';
import Footer from '../shared/Footer/Footer';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

function App() {
useEffect(()=>{
    ReactGA.initialize('UA-181579330-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

const history=useHistory();
console.log(history);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* <Route exact path='/services' component={Services} /> */}
        <Route path='/sales-and-marketing-consulting' component={Marketing} />
        <Route path='/technology-and-it-services' component={It} />
        <Route path='/api-integration' component={ApiIntegration} />
        <Route path='/contact' component={Contact} />
        <Route path='/payment' component={Payment} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

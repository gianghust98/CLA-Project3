import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About';
import Course from './components/Course/CourseDetail';
import Test from './components/Test';
import Event from './components/Event/Event';
import News from './components/News';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/course" component={Course} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/event" component={Event} />
      <Route exact path="/news" component={News} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;

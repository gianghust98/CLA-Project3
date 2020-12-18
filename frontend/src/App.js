import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About';
import Course from './components/Course/CourseDetail';
import Test from './components/Test';
import Event from './components/Event/Event';
import EventDetail from './components/Event/EventDetail';
import News from './components/News';
import Contact from './components/Contact';
import Profile from './components/Form/Profile'
import Admin from './components/Admin/Admin';
import BannerAdmin from './components/Admin/BannerAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const App = (props) => {
  return (
    <Router>
      { props.location.pathname !== '/admin' &&
       props.location.pathname !== '/admin/banners' ? <NavBar /> : null }
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/course" component={Course} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/event" component={Event} />
      <Route exact path="/event/detail" component={EventDetail} />
      <Route exact path="/news" component={News} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin/banners" component={BannerAdmin} />
      { props.location.pathname !== '/admin' &&
       props.location.pathname !== '/admin/banners' ? <Footer /> : null }
    </Router>
  );
}

export default withRouter(App)

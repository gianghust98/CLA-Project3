import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About';
import Course from './components/Course/CourseDetail';
import Test from './components/Test';
import Events from './components/Event/Events';
import News from './components/News';
import Contact from './components/Contact';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Login from './components/Form/Login'
// import Signup from './components/Form/Register'
import Profile from './components/Form/Profile'
// import Login from './components/Login';
// import Signup from './components/Signup';
//import Login from './components/Login';
//import Signup from './components/Signup';
import Admin from './components/Admin/Admin';
import BannerAdmin from './components/Admin/BannerAdmin';
import AddEvent from './components/Admin/AddEvent';
import UpdateEvent from './components/Admin/UpdateEvent';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const App = (props) => {
  return (
    <Router>
      { props.location.pathname !== '/admin' &&
       props.location.pathname !== '/admin/banners' &&  props.location.pathname !== '/admin/event' && props.location.pathname !== '/admin/updateevent' ? <NavBar /> : null }
      
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/course" component={Course} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/news" component={News} />
      <Route exact path="/contact" component={Contact} />
      {/* <Route exact path="/login" component={Login} /> */}
      {/* <Route exact path="/signup" component={Signup} /> */}
      <Route exact path="/profile" component={Profile} />
      {/* <Route exact path="/login" component={Login} /> */}
      {/* <Route exact path="/signup" component={Signup} /> */}
      {/*<Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} /> */}
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin/banners" component={BannerAdmin} />
      <Route exact path="/admin/event" component={AddEvent} />
      <Route exact path="/admin/updateevent" component={UpdateEvent} />
      { props.location.pathname !== '/admin' &&
       props.location.pathname !== '/admin/banners' &&  props.location.pathname !== '/admin/event' && props.location.pathname !== '/admin/updateevent' ? <Footer /> : null }
    </Router>
  );
}

export default withRouter(App)

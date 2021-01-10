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
import Profile from './components/Form/Profile'
import Admin from './components/Admin/Admin';
import BannerAdmin from './components/Admin/BannerAdmin';
import AddEvent from './components/Admin/AddEvent';
import UpdateEvent from './components/Admin/UpdateEvent';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute' 
import StudentsNeedAdvice from './components/Admin/StudentsNeedAdvice';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const App = (props) => {
  return (
    <Router>
      { 
        props.location.pathname !== '/admin' &&
        props.location.pathname !== '/admin/banners' &&  
        props.location.pathname !== '/admin/event' && 
        props.location.pathname !== '/admin/updateevent' && 
        props.location.pathname !== '/admin/studentsneedadvice/get' ? <NavBar /> : null 
      }
      <PublicRoute restricted={false} exact path="/" component={Home} />
      <PublicRoute restricted={false} exact path="/about" component={About} />
      <PublicRoute restricted={false} exact path="/course" component={Course} />
      <PublicRoute restricted={false} exact path="/test" component={Test} />
      <PublicRoute restricted={false} exact path="/events" component={Events} />
      <PublicRoute restricted={false} exact path="/news" component={News} />
      <PublicRoute restricted={false} exact path="/contact" component={Contact} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/admin" component={Admin} />
      <PrivateRoute exact path="/admin/banners" component={BannerAdmin} />
      <PrivateRoute exact path="/admin/event" component={AddEvent} />
      <PrivateRoute exact path="/admin/updateevent" component={UpdateEvent} />
      <PrivateRoute exact path="/admin/studentsneedadvice/get" component={StudentsNeedAdvice} />
      { 
        props.location.pathname !== '/admin' &&
        props.location.pathname !== '/admin/banners' &&  
        props.location.pathname !== '/admin/event' &&
        props.location.pathname !== '/admin/updateevent' &&
        props.location.pathname !== '/admin/studentsneedadvice/get' ? <Footer /> : null 
      }
    </Router>
  );
}

export default withRouter(App)

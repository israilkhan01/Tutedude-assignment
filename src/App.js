import logo from './logo.svg';
import Header from './Components/Header/Header';
import AppStyle from "./App.module.css";
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import FriendRefered from './Components/Pages/FriendsRefered/FriendRefered';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
  Routes
} from "react-router-dom";

function App() {
  return (
       <Router>
        <div className={AppStyle.App}>
          <Header />
          <div className={AppStyle.AppContainer}>
          <Navigation/>
            {/* <Route render={({location})=>( <TransitionGroup>
          <CSSTransition
           key={location.key}
            classNames="item"
            timeout={30000}
            unmountOnExit
          >
            <Switch location={location} > */}
            <Routes>
              <Route
                exact
                path="/"
                Component={Home}
              ></Route>
              {/* <Route exact path="/education" component={About}></Route> */}
              <Route
                exact
                path="/refer/"
                Component={FriendRefered}
              ></Route>
            </Routes>
         
        {/* <FriendRefered /> */}
      <section className={`${AppStyle.section1} ${AppStyle.section2}`}>
        <div className={AppStyle.buttons}>
        Terms & Conditions
        </div>
      </section>
        
            </div>
            </div>
       </Router>
  );
}

export default App;

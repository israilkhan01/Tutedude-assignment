import logo from './logo.svg';
import Header from './Components/Header/Header';
import AppStyle from "./App.module.css";
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
  Routes
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
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
             
            </Routes>
            </div>
            </div>
       </Router>
  );
}

export default App;

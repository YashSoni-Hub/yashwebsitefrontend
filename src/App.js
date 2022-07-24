import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects.jsx";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./action-creators/userAction";
import { useHistory } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [history]);

  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            {" "}
            <AboutUs />{" "}
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/account">
            <Login />{" "}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

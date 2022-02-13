import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import AppiontmentCalender from './pages/Appointment/AppiontmentCalender/AppiontmentCalender';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/Shared/NotFound/NotFound';
import Comment from './pages/Comment/Comment';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
             <Home></Home> 
          </Route>
          <Route path="/appointment">
            <AppiontmentCalender></AppiontmentCalender>
          </Route>
          <Route path="/login">
            <Login></Login> 
          </Route>
          <Route path="/register">
           <Register />
          </Route>
          <Route path="/comment#comment">
            <Comment></Comment>
          </Route>
          <Route path="">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

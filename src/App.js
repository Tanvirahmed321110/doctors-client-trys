import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import AppiontmentCalender from './pages/Appointment/AppiontmentCalender/AppiontmentCalender';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

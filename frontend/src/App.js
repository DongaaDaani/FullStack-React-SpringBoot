import logo from './logo.svg';
import './App.css';
import {Navigation} from './components/Navigation'
import {Home} from './components/Home'
import {Inland} from './components/Inland'
import {Abroad} from './components/Abroad'
import {Economy} from './components/Economy'
import {Sport} from './components/Sport'
import {Login} from './components/Login'
import {Register} from './components/Register'
import 'bootstrap/dist/css/bootstrap.css';


import {BrowserRouter,Route,Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <h3 className="m-3 d-flex justify-content-center"> Index 2.0</h3>
    
      <Navigation/>
      <Switch>
        <Route path='/home' component={Home} exact/>
        <Route path='/inland' component={Inland} />
        <Route path='/abroad' component={Abroad} />
        <Route path='/economy' component={Economy} />
        <Route path='/sport' component={Sport} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
     
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

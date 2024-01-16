import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import DrawersComponent from './pages/Drawers/Drawers';


// Styles
import styles from './styles/container.scss';

const App = () => {
  return (
    <Router> 
      <div className='App'>
        <Switch>
          <Route exact path='/drawers' component={DrawersComponent}/>
          <Route path='/' component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

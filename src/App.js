import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import DrawersComponent from './pages/Drawers/Drawers.tsx';


// Styles
import styles from './styles/container.scss';

const App = () => {
  return (
    <Router> 
      <div className='App'>
        <Switch>
          <Route exact path='/' component={DrawersComponent}/>
          {/* <Route path='/' component={Dashboard}/> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;

import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <SearchPage/>
          </Route>          
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;

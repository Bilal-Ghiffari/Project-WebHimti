import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'Assets/css/app.css';
import Homepages from 'Pages/Homepages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepages} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'Assets/css/app.css';
import Homepages from 'Pages/Homepages';
import News from 'Pages/News';
import NewsItem from 'Pages/NewsItem';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route exact path="/news" component={News} />
          <Route path="/news-item" component={NewsItem} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;

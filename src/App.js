import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Filters from './pages/Filter';
import Flight from './pages/Flight';
import Cars from './pages/Cars';


function App() {
  return (
    <div className="App">
      {/* Routers */}
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cars' component={Cars} />
          <Route path='/flights' component={Flight} />
          <Route path='/filter' component={Filters} />

        </Switch>
      </Router>
    </div>

  );
}

export default App;

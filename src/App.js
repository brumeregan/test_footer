import './App.css';
import {Footer} from './components/footer/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//TODO: error handler, tests, propTypes

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' >main page</Route>
            <Route path="/*" render={(props) => <div>{props.location.pathname}</div>}/>

        </Switch>

      <Footer/>
    </Router>
  );
}

export default App;

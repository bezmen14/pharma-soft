import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn'
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className='main'>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/registration">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <SignIn />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

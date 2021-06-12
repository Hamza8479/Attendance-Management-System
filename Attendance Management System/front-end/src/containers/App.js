import "./App.css";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegistrationPage/Registration";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/home" component={Home} />
        <Route component={Error} />
      </Switch>
      {/* <Login />
      <Registration /> */}
    </div>
  );
}

export default App;

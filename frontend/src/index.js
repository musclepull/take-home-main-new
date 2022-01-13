import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { hot } from "react-hot-loader"
import reducers from "./reducers"
import { Router, Route, Switch, useLocation } from "react-router-dom";
import Home from './Containers/Home';
import Recipe from './Containers/Recipe';
import history from './history';

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

const WrappedHome = () => (
  <Router history={history}>
    <div>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/recipe/:id" component={Recipe}/>
        </Switch>
      </Provider>
    </div>
  </Router>
)

const HotHome = hot(module)(WrappedHome)

ReactDOM.render(<HotHome />, document.getElementById("home"))

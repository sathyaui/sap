import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Router, Route } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import './assets/line-awesome.css';
import './styles/css/style.css';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./Redux/rootReducer";

import history from "./history";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router history={history}>
  	<Provider store={store}>
    	<MuiThemeProvider>
    		<Route component={Home} />
    	</MuiThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

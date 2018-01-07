import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './api/collection/reducer';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import Post from './ui/page/post/Post.jsx';
import PostCreate from './ui/page/post-create/Post-Create.jsx';


const logger = store => next => (action) => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
);

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Post} />
                <Route path="/category/:id" component={Post} />
                <Route path="/post/create" component={PostCreate} />
                <Route path="/post/:id" component={PostCreate} />
                <Route path="/post/:id/edit" component={PostCreate} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );

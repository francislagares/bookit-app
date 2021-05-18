import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV === 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === 'HYDRATE') {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return reducers(state, action);
};

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore);

import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { userReducer } from "./reducers/user";
const rootReducer = combineReducers({
  //   CommonReducer: commonReducer,
  //   authenticateNowReducer: authenticateNowReducer
  user: userReducer,
});
const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer
const middleware = [thunk, logger];
const composeEnacher = composeWithDevTools({ trace: true, traceLimit: 25 });
const STORE = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  composeEnacher(applyMiddleware(...middleware)) // add any middlewares here
);

const persistor = persistStore(STORE); // used to create the persisted store, persistor will be used in the next step

//export type RootState = ReturnType<typeof rootReducer>;

export { STORE, persistor };

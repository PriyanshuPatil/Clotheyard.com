import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/auth.reducer";
import { productReducer } from "./ProductReducer/Product.reducer";
import { themeReducer } from "./theme/theme.reducer";

const rootReducer = combineReducers({
  Theme: themeReducer,
  AuthManager: authReducer,
  ProductManager: productReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);

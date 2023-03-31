import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { questReducer } from "./quest/quest.reducer";

const rootReducer = combineReducers({
    authManager:authReducer,
    questManager:questReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
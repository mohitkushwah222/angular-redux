import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducer';
import freezeState from './freezeState';
declare var window: any;
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
// import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// for persist the paticular property add those properties here even after refresh
const persistConfig = {
	key: 'yourLocalStorageKeyForRedux',
	storage,
	whitelist: [
		'name',
	]
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, window.__state__, composeEnhancers(applyMiddleware(freezeState)));
export const persistor = persistStore(store);

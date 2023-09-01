import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import starredReducer from './starredReducer';
import homeReducer from './homeReducer';

const reducers = combineReducers({
	starred: starredReducer,
	home: homeReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['starredInfo', 'home']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;

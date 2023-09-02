import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './components/App';
import store from './store/store';
import './styles/index.css';

const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const { innerHeight } = window;
document.documentElement.style.setProperty('--vh', `${innerHeight}px`);

root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);

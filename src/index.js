import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire';

import 'bulma/css/bulma.css';
import './index.css';

import App from './App';

const firebaseConfig = {
	apiKey: 'AIzaSyBPuYSloZrd7wT0LGzCEwj8k0ES9GjOkPQ',
	authDomain: 'game-lobby-7290e.firebaseapp.com',
	databaseURL: 'https://game-lobby-7290e.firebaseio.com',
	projectId: 'game-lobby-7290e',
	storageBucket: 'game-lobby-7290e.appspot.com',
	messagingSenderId: '940696811758',
	appId: '1:940696811758:web:7644b007c63b650c169bff',
};

ReactDOM.unstable_createRoot(document.getElementById('root')).render(
	<FirebaseAppProvider firebaseConfig={firebaseConfig}>
		<SuspenseWithPerf fallback={<h3>Loading...</h3>}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</SuspenseWithPerf>
	</FirebaseAppProvider>
);

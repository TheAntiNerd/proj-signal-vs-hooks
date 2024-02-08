import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import SignalPage from './SignalPage.jsx';
import StatePage from './StatePage.jsx';
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" Component={App} />
				<Route path="/signal" Component={SignalPage} />
				<Route path="/state" Component={StatePage} />
			</Routes>
		</Router>
	// </React.StrictMode>,
)

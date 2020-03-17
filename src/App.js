import React from 'react';
import { Router } from 'react-router-dom';
import History from './Components/History/History';
import Index from './Components/Index/Index';
import AppRoutes from './AppRoutes';

import 'antd/dist/antd.css';

function App() {
	return (
		<Router history={History}>
			<AppRoutes />
		</Router>
	);
}

export default App;

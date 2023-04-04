import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './styles/css/App.css'


interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {



	return (
		<div className='App'>
			<AppRoutes />
		</div>
	);
};

export default App;





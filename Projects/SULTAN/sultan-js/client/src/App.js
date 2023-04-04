import React from 'react';
import Footer from './page/Footer';
import AppRoutes from './routes/AppRoutes';
import Header from './page/Header';



const App = () => {
	return (
		<div className='App'>
			<Header />
				<AppRoutes/>
			<Footer/>
		</div>
		
	);
}

export default App;

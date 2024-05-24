import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Berry from './pages/Berry';
import Moves from './pages/Moves';
import Types from './pages/Types';
import NationalDex from './pages/NationalDex';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path={'/'}
						element={<Home />}
					/>

					<Route
						path={'/berry'}
						element={<Berry />}
					/>

					<Route
						path={'/moves'}
						element={<Moves />}
					/>

					<Route
						path={'/types'}
						element={<Types />}
					/>

					<Route
						path={'/nationaldex'}
						element={<NationalDex />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

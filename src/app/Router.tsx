import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Favourites from '../pages/Favourites';

const Router = (): JSX.Element => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favourites" element={<Favourites />} />
			</Routes>
		</BrowserRouter>
	</>
);

export default Router;

// import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./Components/SharedLayout";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			{/* <div> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SharedLayout />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

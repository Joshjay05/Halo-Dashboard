import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./Components/SharedLayout";

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SharedLayout />} />
				</Routes>
			</BrowserRouter>
			;
		</div>
	);
}

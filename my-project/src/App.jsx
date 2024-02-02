import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SharedLayout from "./Components/SharedLayout";
import { ThemeProvider } from "./Components/Theme";
// import { useEffect } from "react";
// import { Wrapper } from "./Theme";
// import { ThemeContext } from "styled-components";
// import SharedLayout from "./Components/SharedLayout";

const App = () => {
	// const { themeMode } = Wrapper();
	// const [ThemeMode, setThemeMode] = useLocalStorage("isdark", preference);
	// const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;
	// const { themeMode } = Wrapper();
	// useEffect(() => {
	// 	document.querySelector("html").classList.remove("dark", "light");
	// 	document.querySelector("html").classList.add(themeMode);
	// }, [themeMode]);
	return (
		<ThemeProvider>
			<div>
				<BrowserRouter>
					<Routes>
						<Route path="nav" element={<Navbar />} />
						<Route path="/" element={<SharedLayout />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
};

export default App;

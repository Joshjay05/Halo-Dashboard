import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SharedLayout from "./Components/SharedLayout";
import { ThemeProvider } from "./Components/Theme";
// import { ThemeContext } from "styled-components";
// import SharedLayout from "./Components/SharedLayout";

const App = () => {
	// const { themeMode } = Wrapper();
	// const [ThemeMode, setThemeMode] = useLocalStorage("isdark", preference);
	// const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;

	// useEffect(() => {
	// 	document.querySelector("html").classList.remove("dark", "light");
	// 	document.querySelector("html").classList.add(ThemeMode);
	// }, [ThemeMode]);

	return (
		<ThemeProvider>
			<div className="w-full">
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

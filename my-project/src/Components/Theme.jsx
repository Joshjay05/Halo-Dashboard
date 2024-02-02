import PropTypes from "prop-types";
import { useState, createContext, useContext } from "react";
// import { useEffect } from "react";
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [themeMode, setThemeMode] = useState("dark");

	const toggleTheme = () => {
		setThemeMode((curr) => (curr === "dark" ? "light" : "dark"));
		console.log("checked");
	};
	// const lightmode=()

	// useEffect(() => {
	// 	document.querySelector("body").classList.remove("dark", "light");
	// 	document.querySelector("body").classList.add(themeMode);
	// }, [themeMode]);

	return (
		<ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

export const Wrapper = () => {
	return useContext(ThemeContext);
};

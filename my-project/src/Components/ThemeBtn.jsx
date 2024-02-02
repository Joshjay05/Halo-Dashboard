// import React from 'react'
import Theme from "./Theme";
const ThemeBtn = () => {
	// const toggleTheme = () => {
	// 		setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	// 	};

	const { themeMode, LightTheme, darkTheme } = Theme();
	const onChangeBtn = (e) => {
		const darkModeStatus = e.current.target.checked;
		if (darkModeStatus === "dark") {
			LightTheme();
		} else {
			darkTheme();
		}
	};
	return (
		<label className="relative inlinie-flex items-center cursor-pointer">
			<input
				type="checkbox"
				value=""
				checked={themeMode === "dark"}
				onChange={onChangeBtn}
				className="sr-only peer"
			/>
		</label>
	);
};

export default ThemeBtn;

// import React from 'react'
import useTheme from "./Theme";
const ThemeBtn = () => {
	const { themeMode, LightTheme, darkTheme } = useTheme();
	const onChangeBtn = (e) => {
		const darkModeStatus = e.current.target.checked;
		if (themeMode === "dark") {
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
				className="sr-only peer"
				onChange={onChangeBtn}
			/>
		</label>
	);
};

export default ThemeBtn;

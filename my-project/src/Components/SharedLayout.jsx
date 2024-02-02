// import React from "react";
// import Sidebar from "./Sidebar";
// import Homepage from "./Homepage";

import Homepage from "./Homepage";
import Sidebar from "./Sidebar";
import { Wrapper } from "./Theme";

// import Sidebar from "./Sidebar";

// import Homepage from
const SharedLayout = () => {
	const { themeMode } = Wrapper();

	// const themeMode = Wrapper;
	return (
		<section className="layout" id={themeMode}>
			<article className="left border-solid border-r-2 border-stone-900 w-1/5 py-8">
				<Sidebar />
			</article>

			<article className="w-4/5">
				<Homepage />
			</article>
		</section>
	);
};

export default SharedLayout;

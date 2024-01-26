// import React from 'react'

import Homepage from "./Homepage";
import Sidebar from "./Sidebar";
// import styled from "styled-components";
const SharedLayout = () => {
	return (
		<section className="flex w-full bg-black h-full">
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

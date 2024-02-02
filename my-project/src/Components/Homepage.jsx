// import React from 'react'

import Charts from "./Charts";
import Navbar from "./Navbar";
// import Charts from "./Charts";

const Homepage = () => {
	return (
		<main>
			<section>
				<Navbar />
			</section>
			<section>
				<h1>charts</h1>
				<p>
					<Charts />
				</p>
			</section>
		</main>
	);
};

export default Homepage;

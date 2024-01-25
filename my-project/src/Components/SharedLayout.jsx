// import React from 'react'

import Homepage from "./Homepage";
import Sidebar from "./Sidebar";
import styled from "styled-components";
const SharedLayout = () => {
	return (
		<LayWrapper>
			<section className="container">
				<article className="left">
					<Sidebar />
				</article>

				<article className="right">
					<Homepage />
				</article>
			</section>
		</LayWrapper>
	);
};

const LayWrapper = styled.div`
	.container {
		display: flex;
		background: #242529;
		border-radius: 15px;
		
		width; 100%;
		/* height: 100vh; */
	}
	.left {
		flex: 0.2;
		height: 100vh;
		border-right: 1.3px solid #3a3a3a;
		padding: 20px;
	}

	.right {
		flex: 0.8;
	}
`;
export default SharedLayout;

// import React from 'react'

// import styled from "@emotion/styled";
import Buttons from "./Button";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import { styled } from "styled-components";
import SearchBar from "./SearchBar";

const Navbar = () => {
	return (
		<NavWrapper>
			<p>Statistics</p>
			<div>
				<SearchBar />
			</div>
			<div className="right-nav">
				<Buttons />
				<span>
					<AddAlertIcon className="icon" />
				</span>
			</div>
		</NavWrapper>
	);
};

const NavWrapper = styled.nav`
	// position: stati
	padding: 40px 40px 2px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.01px solid black;
	.right-nav {
		display: flex;
		// justify-content: space-between;
		align-items: center;
		gap: 20px;
	}
	.icon {
		color: white;
		font-size: 20px;
	}
	span {
		border: 1px solid black;
		border-radius: 8px;
		padding: 8px;
	}
	p {
		color: #fff;
		font-size: 25px;
	}
`;
export default Navbar;

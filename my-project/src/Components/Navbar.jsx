import Buttons from "./Button";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import { styled } from "styled-components";
import SearchBar from "./SearchBar";
import { Wrapper } from "./Theme";

const Navbar = () => {
	const { themeMode } = Wrapper();
	return (
		<NavWrapper>
			<p className={themeMode === "dark" ? "p-dark" : "p-light"}>Statistics</p>
			<div>
				<SearchBar
					style={{ background: themeMode === "dark" ? "red" : "blue" }}
				/>
			</div>
			<div className="right-nav">
				<Buttons />
				<span>
					<AddAlertIcon
						className={themeMode === "dark" ? "dark-icon" : "light-icon"}
					/>
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
	.dark-icon {
		color: white;
		font-size: 20px;
		// color:v
	}
	.light-icon {
		color: black;
		font-size: 20px;
	}
	span {
		border: 1px solid black;
		border-radius: 8px;
		padding: 8px;
	}
	.p-light {
		color: black;
		font-size: 25px;
	}
	.p-dark {
		color: #fff;
		font-size: 25px;
	}
`;
export default Navbar;

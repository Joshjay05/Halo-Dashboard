// import React from 'react'
// import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { FaHandBackFist } from "react-icons/fa6";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { IoCalendarNumber } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";

import styled from "styled-components";
import avatar from "../image/avatar.jpg";

import ReactSwitch from "react-switch";
import { Wrapper } from "./Theme";
// import ReactW
const Sidebar = () => {
	const { themeMode, setThemeMode } = Wrapper();
	const toggleTheme = () => {
		setThemeMode((curr) => (curr === "dark" ? "light" : "dark"));
		console.log("checked");
	};

	return (
		<Aside>
			<aside>
				<header>
					<FaHandBackFist style={{ color: "yellow", fontSize: "30px" }} />{" "}
					<span className="logo"> Wise</span>
				</header>

				<article className="avatar">
					<div>
						<Stack direction="row" spacing={6}>
							<Avatar
								sx={{ height: 120, width: 120 }}
								alt="Remy Sharp"
								src={avatar}
							/>
						</Stack>
					</div>
					<p className="avatar-name">Louis Carter</p>
					<span className="avatar-control">Edit</span>
				</article>
				<nav className="side-list">
					<ul className="side-list">
						<li>
							<MdOutlineSpaceDashboard />
							Dashboard
						</li>
						<li>
							<BiSolidReport />
							Activity
						</li>
						<li>
							<IoCalendarNumber />
							Schedule
						</li>
						<li>
							<LuSettings2 />
							Settings
						</li>
					</ul>
				</nav>
				<section className="bottom">
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<span
							style={{ display: "flex", alignItems: "center", gap: "10px" }}>
							<label>{themeMode === "dark" ? "Dark Mode" : "Light Mode"}</label>

							<span>
								<ReactSwitch
									onChange={toggleTheme}
									checked={themeMode === "dark"}
								/>
							</span>
						</span>
					</div>
				</section>
			</aside>
		</Aside>
	);
};

const Aside = styled.aside`
	aside {
		display: flex;
		flex-direction: column;
		justify-contents: space-between;
		// gap: 50px;
		margin-top: 1.2rem;
	}

	header {
		display: flex;
		margin-block: 20px;
		gap: 20px;
		justify-content: center;
		align-items: center;
	}

	.bottom {
		margin-top: 5rem;
	}
	ul,
	li {
		padding: 0;
		margin: 0;
	}
	side-lists {
		margin-top: 4rem;
	}
	.side-list {
		margin-block: 20px;
		display: flex;
		flex-direction: column;
		justify-contents: space-between;
		align-self: center;
		gap: 30px;
		list-style: none;
	}
	.side-list li {
		color: #fff;
		display: flex;
		align-items: center;
		justify-contents: center;
		gap: 20px;
	}
	.avatar {
		margin-block: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-contents: space-between;
		gap: 20px;
	}
	// #dark .avatar-name {
	// 	color: #fff;
	// 	font-size: 16px;
	// }
	#light .avatar span {
		border-radius: 16px;
		color: black;
		border: 2px solid #333;
		font-size: 12px;
		padding: 5px 10px;
	}
	#dark .avatar span {
		border-radius: 16px;
		color: white;
		border: 2px solid #333;
		font-size: 12px;
		padding: 5px 10px;
	}
	.bottom p {
		color: white;
	}
`;
export default Sidebar;

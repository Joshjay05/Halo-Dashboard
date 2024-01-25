// import React from 'react'
// import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { FaHandBackFist } from "react-icons/fa6";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { IoCalendarNumber } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";
// import { Switch } from "../Components/Switch";
// import Switch from "@mui/material/Switch";
import styled from "styled-components";
import avatar from "../image/avatar.jpg";
import CustomizedSwitches from "./Switch";
const Sidebar = () => {
	return (
		<Aside>
			<aside>
				<header>
					<FaHandBackFist style={{ color: "yellow", fontSize: "30px" }} />{" "}
					<span style={{ color: "white", fontSize: "25px" }}> Wise</span>
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
					<p>Louis Carter</p>
					<span>Edit</span>
				</article>
				<nav className="side-list">
					<ul className="side-list">
						<li>
							{" "}
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
					{/* <Switch defaultChecked /> */}
					<div style={{ display: "flex", justifyContent: "center" }}>
						<span
							style={{ display: "flex", alignItems: "center", gap: "10px" }}>
							<p>light </p>
							<CustomizedSwitches />
							<p>Dark</p>
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
	.avatar p {
		color: #fff;
		font-size: 16px;
	}
	.avatar span {
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

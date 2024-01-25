// import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
	return (
		<Stack spacing={2} direction="row">
			{/* <Button variant="text">Text</Button> */}
			<Button sx={{ background: "#FFF17A" }} variant="Upgrade">
				Upgrade
			</Button>
			{/* <Button variant="outlined">Outlined</Button> */}
		</Stack>
	);
}

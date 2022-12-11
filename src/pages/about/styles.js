import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	max-width: 500px;
	margin: 30px auto;
	overflow: auto;
	min-height: 300px;
	border: 1px solid steelblue;
	padding: 30px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h4 {
		font-size: 22px;
		align-self: center;
	}
`
export const StyledLink = styled(Link)`
	color: green;
	font-size: 16px;
	text-decoration: none;
	align-self: flex-end;
	transition-duration: 0.5s;

	&:hover {
		color: black;
		transform: scale(0.98);
	}
`;
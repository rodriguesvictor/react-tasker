import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
	display: inline-block;
	background: ${({color}) => color};
	color: #fff;
	border: none;
	padding: 10px 20px;
	margin: 5px;
	border-radius: 5px;
	cursor: pointer;
	text-decoration: none;
	font-size: 15px;
	font-family: inherit;


	&:focus {
		outline: none;
	}

	&:active {
		transform: scale(0.98);
		color: green;
	}

	${({ variant }) => variant !== "primary" && css`
		display: block;
		background: #000;
		width: 100%;
	`}
`
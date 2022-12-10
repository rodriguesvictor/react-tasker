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
	
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	overflow: hidden;
	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;
	-webkit-transition-property: background-color;
	transition-property: background-color;


	&:hover {
		background-color: black;
		transform: scale(0.98);
	}

	&:focus {
		utline: none;
	}

	&:active {
		transform: scale(0.98);
	}

	${({ variant }) => variant !== "primary" && css`
		display: block;
		background: #000;
		width: 100%;
	`}
`
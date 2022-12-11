import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
    align-items: center;

	p{
		font-size: 16px;
	}
`
export const StyledLink = styled(Link)`
	color: green;
	font-size: 16px;
	text-decoration: none;

	transition-duration: 0.5s;

	&:hover {
		color: black;
		transform: scale(0.98);
	}
`;
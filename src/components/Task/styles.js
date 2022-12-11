import styled, { keyframes } from "styled-components";

import { Times } from '@styled-icons/typicons/Times';

export const WobbleSkew = keyframes`
	16.65% {
		-webkit-transform: skew(-12deg);
		transform: skew(-12deg);
	}
	33.3% {
		-webkit-transform: skew(10deg);
		transform: skew(10deg);
	}
	49.95% {
		-webkit-transform: skew(-6deg);
		transform: skew(-6deg);
	}
	66.6% {
		-webkit-transform: skew(4deg);
		transform: skew(4deg);
	}
	83.25% {
		-webkit-transform: skew(-2deg);
		transform: skew(-2deg);
	}
	100% {
		-webkit-transform: skew(0);
		transform: skew(0);
	}
`

export const TaskContainer = styled.div`

	background: #f4f4f4;
	margin: 5px;
	padding: 10px 20px;
	cursor: pointer;

	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	-webkit-transition-duration: 0.5s;
	transition-duration: 0.5s;
	-webkit-transition-property: transform;
	transition-property: transform;
	transition: ease-in-out .5;

	&.reminder {
		border-left: 5px solid #73A9AD;
		transition: ease-in-out .2s;

}
	&:hover {
		-webkit-transform: scale(0.97);
		transform: scale(0.97);
	}

	h3 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const RedTimes = styled(Times)`
	color: #FF7878;
	width: 28px;
	cursor: pointer;

	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);

	&:hover {
		color: red;
		-webkit-animation-name: ${WobbleSkew};
		animation-name: ${WobbleSkew};
		-webkit-animation-duration: 1s;
		animation-duration: 1s;
		-webkit-animation-timing-function: ease-in-out;
		animation-timing-function: ease-in-out;
		-webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
`


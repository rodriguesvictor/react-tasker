import styled from "styled-components";

import { Times } from '@styled-icons/typicons/Times';

export const TaskContainer = styled.div`

	&.reminder {
		border-left: 5px solid green;
	}

	background: #f4f4f4;
	margin: 5px;
	padding: 10px 20px;
	cursor: pointer;

	h3 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const RedTimes = styled(Times)`
	color: red;
	width: 28px;
	cursor: pointer;
`

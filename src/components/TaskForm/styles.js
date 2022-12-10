import styled from "styled-components";

export const AddTaskForm = styled.form`
	margin-bottom: 40px;
`
export const TaskFormContainer = styled.div`
	margin: 20px 0;

	label {
		display: block;
	}

	input {
		width: 100%;
		height: 40px;
		margin: 5px;
		padding: 3px 7px;
		font-size: 17px;
	}

	&.task-check {
		display: flex;
		align-items: center;
		justify-content: space-between;

		input {
			width: 5%;
			height: 18px;
			margin: 0;
			padding: 0;
		}
	}
`
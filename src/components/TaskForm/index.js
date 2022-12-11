import Button from "../Button"
import { AddTaskForm, TaskFormContainer } from "./styles";
import { useState } from "react";

const TaskForm = ({ onAdd }) => {

	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert("Please add a Task!");
			return
		}
		onAdd({text, day, reminder});
		setText('');
		setDay('');
		setReminder(false);

	}
	return (
		<AddTaskForm onSubmit={onSubmit}>
			<TaskFormContainer>
				<label>Task</label>
				<input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
			</TaskFormContainer>
			<TaskFormContainer>
				<label>Day & Time</label>
				<input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
			</TaskFormContainer>
			<TaskFormContainer className="task-check">
				<label>Set Reminder</label>
				<input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
			</TaskFormContainer>
			<Button variant="secondary" text="Save Task" type="submit" />
		</AddTaskForm>
	)
}

export default TaskForm
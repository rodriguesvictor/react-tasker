import { TaskContainer, RedTimes } from "./styles";

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<TaskContainer className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
			<h3>
				{task.text} 
			<RedTimes onClick={() => onDelete(task.id)} /> 
			</h3>
			<p>{task.day}</p>
		</TaskContainer>
	)
}

export default Task
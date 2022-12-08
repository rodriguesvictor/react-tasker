import Header from "../../components/Header";
import Tasks from "../../components/Tasks";
import { Container } from "./styles";
import { useState } from "react"


const Home = () => {

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Food Shopping',
			day: 'Feb 5th at 2:30pm',
			reminder: false,
		},
		{
			id: 2,
			text: 'Drink Water',
			day: 'Feb 5th at 2:30pm',
			reminder: false,
		},
	])

	// Delete Task
	const handleDeleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	// Toggle Reminder
	const handleToggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? {
					...task, reminder:
						!task.reminder
				} : task
			)
		)
	}

	return (
		<>
			<Container>
				<Header />
				{tasks.length > 0 ?
					<Tasks tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleReminder} />
					: 'No Tasks To Show!'
				}
			</Container>
		</>
	)
}

export default Home
import Header from "../../components/Header";
import Tasks from "../../components/Tasks";
import TaskForm from "../../components/TaskForm";
import { Container } from "./styles";
import { useState, useEffect } from "react"


const Home = () => {
	const [showAddTaskForm, setShowAddTaskForm] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		}

		getTasks();
	}, [])

	// Fetch Tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:8001/tasks');
		const data = await res.json();
		return data;
	}

		// Fetch Task
		const fetchTask = async (id) => {
			const res = await fetch(`http://localhost:8001/tasks/${id}`);
			const data = await res.json();
			return data;
		}
	

	// Add Task
	const handleAddTask = async (task) => {

		const res = await fetch('http://localhost:8001/tasks', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		})

		const data = await res.json()

		setTasks([...tasks, data])

		// const id = Math.floor(Math.random() * 10000) + 1
		// const newTask = { id, ...task }
		// setTasks([...tasks, newTask])
	}

	// Delete Task
	const handleDeleteTask = async (id) => {

		await fetch(`http://localhost:8001/tasks/${id}`, {
			method: "DELETE"
		})
		setTasks(tasks.filter((task) => task.id !== id))
	}

	// Toggle Reminder
	const handleToggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id)

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
				<Header onAdd={() => setShowAddTaskForm(!showAddTaskForm)} showAdd={showAddTaskForm} />
				{showAddTaskForm && <TaskForm onAdd={handleAddTask} />}
				{tasks.length > 0 ?
					<Tasks tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleReminder} />
					: 'No Tasks To Show!'
				}
			</Container>
		</>
	)
}

export default Home
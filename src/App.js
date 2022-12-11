import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
	return (
		<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</Router>
	);
}

export default App;

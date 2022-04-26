import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CheckList from "./Components/CheckList/CheckList";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>
				<div className="left">
					<Sidebar></Sidebar>
				</div>
				<div className="right">
					<Routes></Routes>
				</div>
				<div className="route">
					<Routes>
						<Route path="/" element={<CheckList />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

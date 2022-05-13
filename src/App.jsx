import { Routes, BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as idb from "idb";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CheckList from "./Components/CheckList/CheckList";
import Database from "./Database";
import AboutUs from "./Components/Aboutus/AboutUs";

const App = () => {
	const [database, setDatabase] = useState();
	const [currentChecklist, setCurrentChecklist] = useState(null);
	const [isSidebarActive, setSidebarActive] = useState(false);
	const [checklists, setChecklists] = useState([]);
	const [isPopupActive, setIsPopupActive] = useState(false);

	useEffect(() => {
		const stuff = async () => {
			const db = await idb.openDB("checkto", 1, {
				async upgrade(db, oldVersion, newVersion, transaction) {
					const objectStores = ["checklists"];
					for (let i = 0; i < objectStores.length; i++) {
						try {
							await db.deleteObjectStore(objectStores[i]);
						} catch (error) {}
					}
					await Database.first_time(db);
				},
			});
			setDatabase(db);
		};
		stuff();
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>
				<div className="left">
					<Sidebar
						database={database}
						currentChecklist={currentChecklist}
						setCurrentChecklist={setCurrentChecklist}
						isSidebarActive={isSidebarActive}
						setSidebarActive={setSidebarActive}
						checklists={checklists}
						setChecklists={setChecklists}
						isPopupActive={isPopupActive}
						setIsPopupActive={setIsPopupActive}
					></Sidebar>
				</div>
				<div className="right">
					<Routes></Routes>
				</div>
				<div
					className="route"
					style={{
						padding: isSidebarActive ? "0 30px" : "0 20px 0 120px",
					}}
				>
					<Routes>
						<Route
							path="/"
							element={
								<CheckList
									id={currentChecklist}
									database={database}
									checklists={checklists}
									setChecklists={setChecklists}
									setCurrentChecklist={setCurrentChecklist}
									setIsPopupActive={setIsPopupActive}
								/>
							}
						/>
						<Route path="/aboutus" element={<AboutUs />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;

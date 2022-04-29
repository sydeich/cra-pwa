import { Routes, BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as idb from "idb";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CheckList from "./Components/CheckList/CheckList";
import Database from "./Database";

const App = () => {
    const [database, setDatabase] = useState();
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
                    <Sidebar database={database}></Sidebar>
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
};

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<ExerciseList />}></Route>
          <Route path="/edit/:id" element={<EditExercise />}></Route>
          <Route path="/create" element={<CreateExercise />}></Route>
          <Route path="/user" element={<CreateUser />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

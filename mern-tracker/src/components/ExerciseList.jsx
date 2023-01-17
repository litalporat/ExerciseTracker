import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ExerciseList() {
  const [exercises, setExercises] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/exercises").then((res) => {
      if (res.data.length > 0) {
        const listExercise = [];
        res.data.map((exercise) => listExercise.push(exercise));
        setExercises(listExercise);
      }
    });
  });

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Logged Exercises</h3>
      <table class="table">
        <thead class="table-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises &&
            exercises.map((exercise) => (
              <tr key={exercise._id}>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date.substring(0, 10)}</td>
                <td>
                  <Link to={"/edit/" + exercise._id}>edit</Link> |
                  <a href="#" onClick={() => deleteExercise(exercise._id)}>
                    delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

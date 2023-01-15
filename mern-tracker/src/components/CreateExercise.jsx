import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateExercise() {
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });
  const [users, setUsers] = useState(["lital", "zvi", "silvia"]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(exercise);
    window.location = "/";
  };
  const onChange = (e) => {
    const newExer = { ...exercise };
    newExer[e.currentTarget.id] = e.currentTarget.value;
    setExercise(newExer);
  };
  const onChangeDate = (date) => {
    const newExer = { ...exercise };
    newExer["date"] = date;
    setExercise(newExer);
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            id="username"
            className="form-control"
            value={exercise.username}
            onChange={onChange}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            id="description"
            type="text"
            required
            className="form-control"
            value={exercise.description}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes):</label>
          <input
            id="duration"
            type="text"
            className="form-control"
            value={exercise.duration}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <div>
            <DatePicker
              selected={exercise.date}
              id="date"
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type={"submit"}
            value="Create Exercise log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

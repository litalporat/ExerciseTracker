import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditExercise() {
  const id = window.location.pathname.substring(6);
  const [exercise, setExercise] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/exercises/" + id).then((res) => {
      const exer = {
        username: res.data.username,
        description: res.data.description,
        duration: res.data.duration,
        date: new Date(res.data.date),
      };
      setExercise(exer);
    });
  }, []);

  const [users, setUsers] = useState(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.length > 0) {
        const listUsers = [];
        res.data.map((user) => listUsers.push(user.username));
        setUsers(listUsers);
      }
    });
  });

  const onSubmit = (e) => {
    console.log(exercise.date);
    e.preventDefault();
    axios
      .post("http://localhost:5000/exercises/update/" + id, exercise)
      .then((res) => {
        console.log(res.data);
        window.location = "/";
      })
      .catch((err) => console.log(err));
  };
  const onChange = (e) => {
    const newExer = { ...exercise };
    newExer[e.currentTarget.id] = e.currentTarget.value;
    setExercise(newExer);
  };
  const onChangeDate = (date) => {
    console.log(typeof date);
    const newExer = { ...exercise };
    newExer["date"] = date;
    setExercise(newExer);
  };
  return (
    <div>
      <h3>Edit Exercise Log</h3>
      {exercise && (
        <form form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              required
              id="username"
              className="form-control"
              value={exercise.username}
              onChange={onChange}
            >
              {users &&
                users.map((user) => {
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
          <br />
          <div className="form-group">
            <input
              type={"submit"}
              value="Edit Exercise log"
              className="btn btn-primary"
            />
          </div>
        </form>
      )}
    </div>
  );
}

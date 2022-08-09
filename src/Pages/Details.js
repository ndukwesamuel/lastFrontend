import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const getdata = () => {
    fetch(`http://127.0.0.1:8000/task_list/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div>
        {task && (
          <div>
            <h1> {task.body}</h1>
          </div>
        )}
        <button className="btn btn-danger me-5">Delete</button>
        <button className="btn btn-success"> Update</button>
      </div>
    </div>
  );
}

export default Details;

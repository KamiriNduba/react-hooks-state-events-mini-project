import React from "react";
import Task from "./Task";  // Import the Task component

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {/* Display a list of tasks using the Task component */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

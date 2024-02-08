import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  const handleDeleteTask = (taskId) => {
    // Remove the task with the given id from the tasks array
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleCategoryChange = (category) => {
    // Update the selected category when a button is clicked
    setSelectedCategory(category);
  };

  const handleAddTask = (newTask) => {
    // Add a new task to the tasks array
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
    </div>
  );
}

export default App;

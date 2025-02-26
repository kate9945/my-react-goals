import { useState } from "react";
import "./App.css";

type Goal = {
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([
    { title: "Learn Html", description: "Learn basics tags" },
    { title: "Learn Css", description: "Learn basics CSS" },
    { title: "Learn JavaScript", description: "Learn basics JS" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const addGoal = () => {
    if (!newTitle.trim() || !newDescription.trim()) return;
    setGoals([...goals, { title: newTitle, description: newDescription }]);
    setNewTitle("");
    setNewDescription("");
  };

  const deleteGoal = (index: number) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Learning Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index} className="goal-item">
            <div>
              <strong>{goal.title}</strong>: {goal.description}
            </div>
            <button className="delete-btn" onClick={() => deleteGoal(index)}>✖</button>
          </li>
        ))}
      </ul>

      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button onClick={addGoal}>Add new goal</button>
      </div>
    </div>
  );
}

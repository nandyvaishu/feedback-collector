import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: feedback })
    });
    alert("Feedback submitted!");
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={feedback} onChange={e => setFeedback(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
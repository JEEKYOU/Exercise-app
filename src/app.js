import React, { useState } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);

  const handleComplete = () => {
    // Update progress (assuming 10% progress for each completion)
    setProgress(prevProgress => Math.min(prevProgress + 10, 100));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MindfulMotionHub</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Challenges</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <section className="App-dailyChallenge">
          <h2>Daily Mindful Movement Challenge</h2>
          <p>Today's Challenge: Stretch for 5 minutes</p>
          <button onClick={handleComplete}>Mark as Completed</button>
        </section>
        <section className="App-progressTracking">
          <h2>Progress Tracking</h2>
          <p>Your Progress: <span>{progress}%</span></p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 MindfulMotionHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
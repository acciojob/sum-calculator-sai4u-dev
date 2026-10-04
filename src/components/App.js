import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sum, setSum] = useState(0);

  function handleSumChange(e) {
    const num = Number(e.target.value);
    setSum(prev => prev + num);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      
      <h1>Sum Calculator</h1>

      <input
        type="number"
        placeholder="Enter Numbers"
        onChange={handleSumChange}
      />

      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;

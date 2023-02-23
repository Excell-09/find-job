import { BrowserRouter as router, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <router>
        <Router>
          <Route path="/landing" element={<Landing } />
        </Router>
      </router>
    </div>
  );
}

export default App;

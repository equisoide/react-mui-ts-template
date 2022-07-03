// External imports
import { Routes, Route } from 'react-router-dom';

// Local imports
import HomePage from '../pages/Home';

// Component definition
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
}

// Default export
export default App;

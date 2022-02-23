import './App.css';
import Home from './Home';
import About from './About';
import Promotions from './Promotions';
import Rooms from './Rooms';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />

          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="rooms" element={<Rooms />} />
      </Routes>
    </Router>
  );
}

export default App;

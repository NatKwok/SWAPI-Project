
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home"
import Starship from './pages/Starship';
import People from './pages/People';
import Planets from './pages/Planets';
import './App.css';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/starships" element={<Starship />} />
            <Route path="*" element={<p>Invalid URLTEST</p>} />

          </Route>
        </Routes>
    </div>
  );
}

export default App;

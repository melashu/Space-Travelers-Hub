import { Routes, Route } from 'react-router-dom';
import Header from './Compontes/Header/Header';
import Mission from './Compontes/Mission';
import Profile from './Compontes/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route to="/">
          <Route index element={null} />
          <Route path="mission">
            <Route index element={<Mission />} />
          </Route>
          <Route path="profile">
            <Route index element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

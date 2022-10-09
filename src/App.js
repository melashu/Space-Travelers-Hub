import { Routes, Route } from 'react-router-dom';
import Header from './Compontes/Header/Header';
import Mission from './Compontes/Mission';
import Profile from './Compontes/Profile';
import './App.css';
import PageNotFound from './PagenotFound/PageNotFound';
import Rocket from './Components/Rocket/Rocket';
import Dragon from './Compontes/Dragon/Dragon';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <Routes>
          <Route to="/">
            <Route index element={<Rocket />} />
            <Route path="dragon">
              <Route index element={<Dragon />} />
            </Route>
            <Route path="rocket">
              <Route index element={<Rocket />} />
            </Route>
            <Route path="mission">
              <Route index element={<Mission />} />
            </Route>
            <Route path="profile">
              <Route index element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

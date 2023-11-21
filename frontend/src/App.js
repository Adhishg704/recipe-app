import Home from './screens/Home';
import Recipes from './screens/Recipes';
import Settings from './screens/Settings';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

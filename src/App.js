import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import {Routes , Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path="/" element={<SignUp />}  />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;

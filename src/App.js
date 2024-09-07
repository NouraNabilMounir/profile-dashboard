import './App.css';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import { ReactStyleModule } from './components/ReactStyleModule';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <ReactStyleModule />} />
          <Route path='/users' element={<Dashboard />} />
          <Route path='/profile/:userId' element={<Profile/>} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;

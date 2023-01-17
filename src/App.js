import { Routes , Route } from 'react-router-dom';
// import './App.css';
import Department from './pages/Department';
import Home from './pages/Home.js'
import Doctors from './pages/doctors'
import Contact from './pages/contact'
import About from './pages/About'
import Appointment from './pages/appointment'
import Layout from './components/Layout.js'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout><Home /></Layout>}/>
            <Route path='/Departments' element={<Layout><Department /></Layout>}/>
            <Route path='/doctors' element={<Layout><Doctors /></Layout>}/>
            <Route path='/contact' element={ <Layout><Contact /></Layout>}/>
            <Route path='/about' element={<Layout><About /></Layout>}/>
            <Route path='/appointment' element={<Layout><Appointment /></Layout>}/>
            <Route path='/Login' element={<Login />}/>
        </Routes>
    </div>
  );
}

export default App;

import { Routes , Route } from 'react-router-dom';
// import './App.css';
import Department from './pages/Department';
import Home from './pages/Home.js'
import Doctors from './pages/doctors'
import Contact from './pages/contact'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Layout from './components/Layout.js'
import Login from './pages/Login';
import MedicineList from './pages/MedicineList';
import AddEditePage from './pages/AddEditePage';
import AddMedicinePage from './pages/AddMedicinePage';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout><Home /></Layout>}/>
            <Route path='/Departments' element={<Layout><Department /></Layout>}/>
            <Route path='/doctors' element={<Layout><Doctors /></Layout>}/>
            <Route path='/contact' element={ <Layout><Contact /></Layout>}/>
            <Route path='/about' element={<Layout><About /></Layout>}/>
            <Route path='/AddEdit/:id' element={<AddEditePage />}/>
            <Route path='/AddMedicenPage' element={<AddMedicinePage />}/>
            <Route path='/appointment' element={<Layout><Appointment /></Layout>}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/MedicineList' element={<Layout><MedicineList /></Layout>}/>
        </Routes>
    </div>
  );
}

export default App;

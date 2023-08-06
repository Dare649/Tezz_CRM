
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Workspace from './pages/Workspace';
import Clients from './pages/Clients';
import ScheduleAppointment from './pages/ScheduleAppointment';
import Task from './pages/Task';
import Message from './pages/Messages';
import Reports from './pages/Reports';
import ClientsProfile from './pages/ClientsProfile';





const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute/>}>
            <Route path='workspace' element={<Workspace/>}/>
            <Route path='/clients' element={<Clients/>}/>
            <Route path='/clients/clients_profile' element={<ClientsProfile/>}/>
            <Route path='/schedule_appointment' element={<ScheduleAppointment/>} />
            <Route path='/payment' element={<ScheduleAppointment/>}/>
            <Route path='/task' element={<Task/>}/>
            <Route path='/message' element={<Message/>}/>
            <Route path='/reports' element={<Reports/>}/>
          </Route>
          <Route path='/' element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

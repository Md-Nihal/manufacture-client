import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Shared/Header/Header'
import Home from './Components/Home/Home/Home'
import About from './Components/Home/About/About'
import LogIn from './Components/LogIn/LogIn'
import Appointment from './Components/Appointment/Appointment';
import SignUp from './Components/LogIn/SignUp';
import RequireAuth from './Components/LogIn/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './Dashboard/Dashboard';
import MyAppoitment from './Dashboard/MyAppointment';

import AddReview from './Dashboard/AddReview';
import Users from './Dashboard/Users';

import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import RequireAdmin from './Components/LogIn/RequireAdmin';
import ManageAllProduct from './Dashboard/ManageAllProduct';
import ShowAllProduct from './Dashboard/ShowAllProduct';
import Blogs from './Components/Blogs/Blogs';




function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="appointment" element={
          <RequireAuth>
          <Appointment />
        </RequireAuth>
        } />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
        <Route index element={<MyAppoitment></MyAppoitment>}></Route>
          
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="manageallproduct" element={<RequireAdmin><ManageAllProduct></ManageAllProduct></RequireAdmin>}></Route>
          
          
          
        </Route>
        
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;

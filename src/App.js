import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SelectDemo } from "./components/SelectDemo"
import { Home } from "./components/Home"
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';

import { Service } from './components/Service';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { UserProfile } from './components/UserProfile';
import { ForgotPass } from './components/ForgotPass';
import { UpdatePass } from './components/UpdatePass';
import { useNavigate } from 'react-router-dom'


import { useEffect, useState } from 'react'



//admin import 

import { GetRole } from "./api/GetRole"
import { GetUser } from './api/GetUser';
import { UpdateRole } from './api/UpdateRole'
import { AdminDashboard } from './admincomponents/AdminDashboard';
import { Logout } from './components/Logout';
import { UpdateUser } from './api/UpdateUser';
import { GetService } from './api/GetService';
import { UpdateService } from './api/UpdateService';
import { GetCatagory } from './api/GetCatagory';
import { GetViceCatagory } from './api/GetViceCatagory';
import { UpdateCatagory } from './api/UpdateCatagory';
import { UpdateViceCatagory } from './api/UpdateViceCatagory';
import { Appointment } from './components/Appointment';
import { Contact } from './components/Contact';
import { Catagory } from './components/Catagory';
import { ViceCatagory } from './components/ViceCatagory';
import { GetUserServices } from './api/GetUserServices';
import { UserService } from './components/UserService';
import { GetServiceProvider } from './api/GetServiceProvider';
import { ServiceProvider } from './components/ServiceProvider';



function App() {

  const [email, setemail] = useState('')

  useEffect(() => {
    setemail(localStorage.getItem('email'))
  })

  let navigate = useNavigate()


  if (email == null) {
    return (
      <>
        <div>
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/Signup" element={<SignUp />}></Route>
          </Routes>
          <Routes>
            <Route path="/ForgotPass" element={<ForgotPass />}></Route>
          </Routes>
          <Routes>
            <Route path="/UpdatePass/:id" element={<UpdatePass />}></Route>
          </Routes>


          <Routes>
            <Route path="/Appointment" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/About" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/Contact" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/Service" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/ServiceProvider" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/Catagories/:id" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/ViceCatagories/:id" element={<Login />}></Route>
          </Routes>





          {/* admin routes */}
          <Routes>
            <Route path="/updateRole/:id" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/updateUser/:id" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/updateService/:id" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/updateCatagory/:id" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/updateViceCatagory/:id" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/admin/Dashboard" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetRole" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetUser" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetService" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetCatagory" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetViceCatagory" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetUserServices" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/addcatagory/:id" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/addserviceprovider/:id" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/addViceCatagory/:id/:id1" element={<Login />}></Route>
          </Routes>




        </div>
      </>
    )
  }
  else if (email != "admin@gmail.com" && email != null) {



    return (
      <>
        <div >




          <Routes>
            <Route path="/Home" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/Appointment" element={<Appointment />}></Route>
          </Routes>
          <Routes>
            <Route path="/Appointment/:id" element={<Appointment />}></Route>
          </Routes>
          <Routes>
            <Route path="/About" element={<About />}></Route>
          </Routes>
          <Routes>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
          <Routes>
            <Route path="/Service" element={<Service />}></Route>
          </Routes>
          <Routes>
            <Route path="/ServiceProvider" element={<ServiceProvider />}></Route>
          </Routes>
          <Routes>
            <Route path="/Catagories/:id" element={<Catagory />}></Route>
          </Routes>
          <Routes>
            <Route path="/ViceCatagories/:id" element={<ViceCatagory />}></Route>
          </Routes>



          <Routes>
            <Route path="/UserProfile" element={<UserProfile />}></Route>
          </Routes>
          <Routes>
            <Route path="/UserServices" element={<UserService />}></Route>
          </Routes>
          <Routes>
            <Route path="/Logout" element={<Logout />}></Route>
          </Routes>
        </div>
      </>
    )
  }
  else {
    return (

      <>
        <div>




          {/* admin roots */}
          <Routes>
            <Route path="/updateRole/:id" element={<UpdateRole />}></Route>
          </Routes>
          <Routes>
            <Route path="/updateUser/:id" element={<UpdateUser />}></Route>
          </Routes>
          <Routes>
            <Route path="/updateService/:id" element={<UpdateService />}></Route>
          </Routes>
          <Routes>
            <Route path="/updateCatagory/:id" element={<UpdateCatagory />}></Route>
          </Routes>
          <Routes>
            <Route path="/updateViceCatagory/:id" element={<UpdateViceCatagory />}></Route>
          </Routes>
          <Routes>
            <Route path="/admin/Dashboard" element={<AdminDashboard />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetRole" element={<GetRole />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetUser" element={<GetUser />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetService" element={<GetService />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetCatagory" element={<GetCatagory />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetViceCatagory" element={<GetViceCatagory />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetUserServices" element={<GetUserServices />}></Route>
          </Routes>
          <Routes>
            <Route path="/addcatagory/:id" element={<GetCatagory />}></Route>
          </Routes>
          <Routes>
            <Route path="/addserviceprovider/:id" element={<GetServiceProvider />}></Route>
          </Routes>
          <Routes>
            <Route path="/GetServiceProvider" element={<GetServiceProvider />}></Route>
          </Routes>
          <Routes>
            <Route path="/addViceCatagory/:id/:id1" element={<GetViceCatagory />}></Route>
          </Routes>
          <Routes>
            <Route path="/Logout" element={<Logout />}></Route>
          </Routes>
        </div>
      </>
    )

  }
}

export default App;

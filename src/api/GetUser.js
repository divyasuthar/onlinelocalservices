import React from 'react'
import { AdminNavbar } from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import '../assets/css/lib/owl.carousel.min.css'
import '../assets/css/lib/owl.theme.default.min.css'
import '../assets/css/lib/weather-icons.css'
import '../assets/css/lib/menubar/sidebar.css'

export const GetUser = () => {

    const toast1 = () => { }


    const [userList, setuserList] = useState([])
    const [firstName, setfirstName] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [address, setaddress] = useState()
    const [pinCode, setpinCode] = useState()
    const [city, setcity] = useState()
    const [state, setstate] = useState()
    const [contactNum, setcontactNum] = useState()



    const getData = () => {

        axios.get('http://localhost:4000/users').then(data => {
            setuserList(data.data.data)
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })
    }

    const deleteData = (id) => {
        var id = id
        axios.delete(`http://localhost:4000/users/` + id).then(res => {


            toast.success('🦄 Data Deleted Successfully!', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });

        }).catch(err => {
            toast.error(err, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        })
    }



    const postData = (e) => {

        e.preventDefault();


        var data = {
            firstName: firstName,
            email: email,
            password: password,
            address: address,
            cityName: city,
            pinCode: pinCode,
            stateName: state,
            contactNum: contactNum,
        }

        axios.post('http://localhost:4000/users', data).then(res => {
            console.log(res.data.data)


            toast.success(`🦄 User Added Successfully!`, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });



        }).catch(err => {
            toast.error(err, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        })

    }




    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div>
                <AdminNavbar />

                {/* new */}
                <div class="content-wrap">
                    <div class="main">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-8 p-r-0 title-margin-right">
                                    <div class="">
                                        <div class="page-title">
                                            <h3>Hello, <span>Welcome Here</span></h3>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                                <div class="col-lg-4 p-l-0 title-margin-left">
                                    <div class="">
                                        <div class="page-title">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><Link to="#">Admin/</Link></li>
                                                <li class="breadcrumb-item active">Users</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>



                {/* add User */}
                <div class="header">
                    <div class="container-fluid">
                        <div class="">
                            <div class="col-lg-12">
                                <h3>Add User</h3>
                                <form onSubmit={postData} method="POST">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" name='firstName' placeholder='firstName' onChange={(e) => { setfirstName(e.target.value) }} required />
                                        <input type="email" class="form-control" name='email' placeholder='email' onChange={(e) => { setemail(e.target.value) }} required />
                                        <input type="password" class="form-control" name='password' placeholder='password' onChange={(e) => { setpassword(e.target.value) }} required />
                                        <textarea type="" class="form-control" name='address' placeholder='address' onChange={(e) => { setaddress(e.target.value) }} required />
                                        <input type="text" class="form-control" name='city' placeholder='city' onChange={(e) => { setcity(e.target.value) }} required />
                                        <input type="text" class="form-control" name='pincode' placeholder='pincode' onChange={(e) => { setpinCode(e.target.value) }} required />
                                        <input type="text" class="form-control" name='state' placeholder='state' onChange={(e) => { setstate(e.target.value) }} required />
                                        <input type="text" class="form-control" name='contactnumber' placeholder='contact number' onChange={(e) => { setcontactNum(e.target.value) }} required />


                                    </div>
                                    <input class="btn btn-primary" type="submit" value="Add User" onClick={toast1} />
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={2500}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />




                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br /><br />

                {/* table */}
                <div class="header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div className="container">
                                    <table class="table table-dark table-striped">
                                        <thead class="">
                                            <tr>
                                                <th scope="col">UserId</th>
                                                <th scope="col">FirstName</th>
                                                <th scope="col">Email Id</th>
                                                <th scope="col">Password</th>
                                                <th scope="col">RoleName</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">PinCode</th>
                                                <th scope="col">City</th>
                                                <th scope="col">State</th>
                                                <th scope="col">Contanct Number</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>




                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                userList.map((user) => {
                                                    return (
                                                        <>

                                                            <tr>
                                                                <th scope="row">{user._id}</th>
                                                                <td>{user.firstName}</td>
                                                                <td>{user.email}</td>
                                                                <td>{user.password}</td>

                                                                <td>{user.role.roleName}</td>
                                                                <td>{user.address}</td>
                                                                <td>{user.pinCode}</td>
                                                                <td>{user.cityName}</td>
                                                                <td>{user.stateName}</td>
                                                                <td>{user.contactNum}</td>
                                                                <td>
                                                                    <button className="btn btn-danger" onClick={() => { deleteData(user._id) }} >Delete</button>

                                                                </td>
                                                                <td>
                                                                    <Link to={`/updateUser/${user._id}`} className="btn btn-success">UPDATE</Link>
                                                                </td>



                                                            </tr>

                                                        </>
                                                    )

                                                })
                                            }


                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}

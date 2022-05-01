import React from 'react'
import { AdminNavbar } from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetUserServices = () => {
    const toast1 = () => { }

    const [userServiceList, setuserServiceList] = useState([])
    const [user, setuser] = useState()
    const [service, setservice] = useState()
    const [catagory, setcatagory] = useState()
    const [vCatagory, setvCatagory] = useState()

    const getData = () => {

        axios.get('http://localhost:4000/userservices').then(data => {
            setuserServiceList(data.data.data)
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })
    }



    useEffect(() => {
        getData()



    }, [])


    const deleteData = (id) => {
        var id = id
        axios.delete(`http://localhost:4000/userservices/` + id).then(res => {


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
            user: user,
            service: service,
            catagory: catagory,
            vCatagory: vCatagory,


        }

        axios.post('http://localhost:4000/userservices', data).then(res => {
            console.log(res.data.data)


            toast.success(`🦄 UserService Added Successfully!`, {
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
                                                <li class="breadcrumb-item active">userservices</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* add user service */}

                <div class="header">
                    <div class="container-fluid">
                        <div class="">
                            <div class="col-lg-12">
                                <h3>Add UserService</h3>
                                <form onSubmit={postData} method="POST">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" name='userId' placeholder='userId' onChange={(e) => { setuser(e.target.value) }} required />
                                        <input type="text" class="form-control" name='serviceId' placeholder='serviceId' onChange={(e) => { setservice(e.target.value) }} required />
                                        <input type="text" class="form-control" name='catagoryId' placeholder='catagoryId' onChange={(e) => { setcatagory(e.target.value) }} required />
                                        <input type="text" class="form-control" name='vCatagoryId' placeholder='vCatagoryId' onChange={(e) => { setvCatagory(e.target.value) }} required />


                                    </div>
                                    <input class="btn btn-primary" type="submit" value="Add UserService" onClick={toast1} />
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
                                                <th scope="col">UserServiceId</th>
                                                <th scope="col">UserName</th>
                                                <th scope="col">ServiceName</th>
                                                <th scope="col">CatagoryName</th>
                                                <th scope="col">ViceCatagoryName</th>

                                                <th scope="col"></th>




                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                userServiceList.map((userservice) => {
                                                    return (
                                                        <>

                                                            <tr>
                                                                <th scope="row">{userservice._id}</th>
                                                                <td>{userservice.user.firstName}</td>
                                                                <td>{userservice.service.serviceName}</td>
                                                                <td>{userservice.catagory.catagoryName}</td>
                                                                <td>{userservice.vCatagory.vCatagoryName}</td>

                                                                <td>
                                                                    <button className="btn btn-danger" onClick={() => { deleteData(userservice._id) }} >Delete</button>

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

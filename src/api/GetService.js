import React from 'react'
import { AdminNavbar } from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetService = () => {
    const toast1 = () => { }

    const [serviceList, setserviceList] = useState([])
    const [serviceName, setserviceName] = useState()


    const getData = () => {

        axios.get('http://localhost:4000/services').then(data => {
            setserviceList(data.data.data)
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
        axios.delete(`http://localhost:4000/services/` + id).then(res => {


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
            serviceName: serviceName,

        }

        axios.post('http://localhost:4000/services', data).then(res => {
            console.log(res.data.data)


            toast.success(`🦄 Service Added Successfully!`, {
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
                                                <li class="breadcrumb-item active">Services</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* add service */}
                <div class="header">
                    <div class="container-fluid">
                        <div class="">
                            <div class="col-lg-12">
                                <h3>Add Service</h3>
                                <form onSubmit={postData} method="POST">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" name='serviceName' placeholder='serviceName' onChange={(e) => { setserviceName(e.target.value) }} required />


                                    </div>
                                    <input class="btn btn-primary" type="submit" value="Add Service" onClick={toast1} />
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
                                                <th scope="col">ServiceId</th>
                                                <th scope="col">ServiceName</th>

                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>




                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                serviceList.map((service) => {
                                                    return (
                                                        <>

                                                            <tr>
                                                                <th scope="row">{service._id}</th>
                                                                <td>{service.serviceName}</td>

                                                                <td>
                                                                    <button className="btn btn-danger" onClick={() => { deleteData(service._id) }} >Delete</button>

                                                                </td>
                                                                <td>
                                                                    <Link to={`/updateService/${service._id}`} className="btn btn-success">UPDATE</Link>
                                                                </td>
                                                                <td>
                                                                    <Link to={`/addcatagory/${service._id}`} className="btn btn-success">Add Catagory</Link>
                                                                </td>
                                                                <td>
                                                                    <Link to={`/addserviceprovider/${service._id}`} className="btn btn-success">Add Service Provider</Link>
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

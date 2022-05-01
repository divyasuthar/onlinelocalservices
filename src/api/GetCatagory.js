import React from 'react'
import { AdminNavbar } from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const GetCatagory = () => {

    const toast1 = () => { }
    var id1 = useParams().id;

    const [catagoryList, setcatagoryList] = useState([])
    const [serviceId, setserviceId] = useState()
    const [catagoryName, setcatagoryName] = useState()
    const [description, setdescription] = useState()



    const getData = () => {

        axios.get('http://localhost:4000/catagories').then(data => {
            setcatagoryList(data.data.data)
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData()
        setserviceId(`${id1}`)
    }, [])


    const deleteData = (id) => {
        var id = id
        axios.delete(`http://localhost:4000/catagories/` + id).then(res => {


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
            service: serviceId,
            catagoryName: catagoryName,
            description: description

        }

        axios.post('http://localhost:4000/catagories', data).then(res => {
            console.log(res.data.data)


            toast.success(`🦄 Catagory Added Successfully!`, {
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
                                                <li class="breadcrumb-item active">Catagories</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>



                {/* //add catagory */}

                <div class="header">
                    <div class="container-fluid">
                        <div class="">
                            <div class="col-lg-12">
                                <h3>Add Catagory</h3>
                                <form onSubmit={postData} method="POST">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" name='serviceId' placeholder='serviceId' onChange={(e) => { setserviceId(e.target.value) }} required defaultValue={serviceId} />
                                        <input type="text" class="form-control" name='catagoryName' placeholder='catagoryName' onChange={(e) => { setcatagoryName(e.target.value) }} required />
                                        <textarea type="text" class="form-control" name='description' placeholder='description' onChange={(e) => { setdescription(e.target.value) }} required />


                                    </div>
                                    <input class="btn btn-primary" type="submit" value="Add Catagoty" onClick={toast1} />
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
                                                <th scope="col">CatagoryId</th>
                                                <th scope="col">ServiceName</th>
                                                <th scope="col">CatagoryName</th>
                                                <th scope="col">Description</th>

                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>




                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                catagoryList.map((catagory) => {
                                                    return (
                                                        <>

                                                            <tr>
                                                                <th scope="row">{catagory._id}</th>
                                                                <td>{catagory.service.serviceName}</td>
                                                                <td>{catagory.catagoryName}</td>
                                                                <td>{catagory.description}</td>

                                                                <td>
                                                                    <button className="btn btn-danger" onClick={() => { deleteData(catagory._id) }} >Delete</button>

                                                                </td>
                                                                <td>
                                                                    <Link to={`/updateCatagory/${catagory._id}`} className="btn btn-success">UPDATE</Link>
                                                                </td>
                                                                <td>
                                                                    <Link to={`/addViceCatagory/${catagory.service._id}/${catagory._id}`} className="btn btn-success">Add ViceCatagory</Link>
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

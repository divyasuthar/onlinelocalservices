import React from 'react'
import { AdminNavbar } from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetViceCatagory = () => {

    const toast1 = () => { }
    var id = useParams().id;
    var id1 = useParams().id1;

    const [vicecatagoryList, setvicecatagoryList] = useState([])
    const [serviceId, setserviceId] = useState()
    const [catagoryId, setcatagoryId] = useState()
    const [vicecatagoryName, setvicecatagoryName] = useState()
    const [servicePrice, setservicePrice] = useState()

    const getData = () => {

        axios.get('http://localhost:4000/vicecatagories').then(data => {
            setvicecatagoryList(data.data.data)
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData()
        setserviceId(`${id}`)
        setcatagoryId(`${id1}`)


    }, [])


    const deleteData = (id) => {
        var id = id
        axios.delete(`http://localhost:4000/vicecatagories/` + id).then(res => {


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
            catagoty: catagoryId,
            vicecatagoryName: vicecatagoryName,
            servicePrice: servicePrice

        }

        axios.post('http://localhost:4000/vicecatagories', data).then(res => {
            console.log(res.data.data)


            toast.success(`🦄 ViceCatagory Added Successfully!`, {
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
                                                <li class="breadcrumb-item active">Vicecatagories</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>


                {/* add vice catagory */}

                <div class="header">
                    <div class="container-fluid">
                        <div class="">
                            <div class="col-lg-12">
                                <h3>Add ViceCatagory</h3>
                                <form onSubmit={postData} method="POST">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" name='serviceId' placeholder='serviceId' onChange={(e) => { setserviceId(e.target.value) }} required defaultValue={serviceId} />
                                        <input type="text" class="form-control" name='catagoryId' placeholder='catagoryId' onChange={(e) => { setcatagoryId(e.target.value) }} required defaultValue={catagoryId} />
                                        <input type="text" class="form-control" name='vicecatagoryName' placeholder='vicecatagoryName' onChange={(e) => { setvicecatagoryName(e.target.value) }} required />
                                        <input type="text" class="form-control" name='serviceprice' placeholder='serviceprice' onChange={(e) => { setservicePrice(e.target.value) }} required />


                                    </div>
                                    <input class="btn btn-primary" type="submit" value="Add ViceCatagory" onClick={toast1} />
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
                                                <th scope="col">ViceCatagoryId</th>
                                                <th scope="col">ServiceName</th>
                                                <th scope="col">CatagoryName</th>
                                                <th scope="col">ViceCatagoryName</th>
                                                <th scope="col">servicePrice</th>

                                                <th scope="col"></th>
                                                <th scope="col"></th>




                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                vicecatagoryList.map((vcatagory) => {
                                                    return (
                                                        <>

                                                            <tr>
                                                                <th scope="row">{vcatagory._id}</th>
                                                                <td>{vcatagory.service.serviceName}</td>
                                                                <td>{vcatagory.catagory.catagoryName}</td>
                                                                <td>{vcatagory.vCatagoryName}</td>
                                                                <td>{vcatagory.servicePrice}</td>

                                                                <td>
                                                                    <button className="btn btn-danger" onClick={() => { deleteData(vcatagory._id) }} >Delete</button>

                                                                </td>
                                                                <td>
                                                                    <Link to={`/updateViceCatagory/${vcatagory._id}`} className="btn btn-success">UPDATE</Link>
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

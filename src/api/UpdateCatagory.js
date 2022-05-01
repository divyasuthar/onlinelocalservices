import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminNavbar } from '../components/AdminNavbar'

export const UpdateCatagory = () => {
    const toast1 = () => { }




    var id = useParams().id;

    const [catagory, setcatagory] = useState([])
    const [serviceId, setserviceId] = useState()
    const [catagoryName, setcatagoryName] = useState()
    const [description, setdescription] = useState()



    const getData = () => {

        axios.get(`http://localhost:4000/catagories/${id}`).then(res => {

            setcatagory(res.data.data)
            console.log(res.data.data)


        }).catch(err => {
            console.log(err);
        })
    }



    useEffect(() => {
        getData()
        setserviceId(catagory.service)
        setcatagoryName(catagory.catagoryName)
        setdescription(catagory.description)
    }, [])


    const updateData = (e) => {

        var updateData = {
            catagoryId: id,
            service: serviceId,
            catagoryName: catagoryName,
            description: description
        }
        e.preventDefault()

        axios.put('http://localhost:4000/catagories', updateData).then(res => {
            console.log(res.data)
            if (res.data.status == 200) {

                toast.success('🦄 Data Updated Successfully!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            }
            else {
                toast.error(res.data.msg, {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            }
        })



    }

    return (
        <>
            <div>
                <AdminNavbar />


                {/* welcome */}
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
                                                <li class="breadcrumb-item active">catagoryupdate</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* welcome completed */}

                {/* update */}
                <div class="header">
                    <div class="container-fluid">
                        <div class="container">
                            <div class="col-lg-8">

                                <form onSubmit={updateData}>
                                    <div class="form-group">
                                        <label for="catagory id">Catagory Id</label>
                                        <input type="text" class="form-control" defaultValue={catagory._id}
                                            disabled />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Service Id</label>
                                        <input type="text" class="form-control" defaultValue={catagory.service}
                                            onChange={(e) => setserviceId(e.target.value)} ></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="catagory name">catagory Name</label>
                                        <input type="text" class="form-control" onChange={(e) => { setcatagoryName(e.target.value) }} defaultValue={catagory.catagoryName} />
                                    </div>


                                    <div class="form-group">
                                        <label for="">Description</label>
                                        <input type="text" class="form-control" defaultValue={catagory.description}
                                            onChange={(e) => setdescription(e.target.value)} />
                                    </div>

                                    <button type="submit" class="btn btn-primary" onClick={toast1}>Update</button>
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

            </div>
        </>
    )
}

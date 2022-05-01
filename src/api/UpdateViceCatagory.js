import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminNavbar } from '../components/AdminNavbar'


export const UpdateViceCatagory = () => {
    const toast1 = () => { }

    var id = useParams().id;

    const [vicecatagory, setvicecatagory] = useState([])
    const [serviceId, setserviceId] = useState()
    const [catagoryId, setcatagoryId] = useState()
    const [vCatagoryName, setvCatagoryName] = useState()
    const [servicePrice, setservicePrice] = useState()


    const getData = () => {

        axios.get(`http://localhost:4000/vicecatagories/${id}`).then(res => {

            setvicecatagory(res.data.data)
            console.log(res.data.data)


        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData()
        setserviceId(vicecatagory.service)
        setcatagoryId(vicecatagory.catagory)
        setvCatagoryName(vicecatagory.vCatagoryName)
        setservicePrice(vicecatagory.servicePrice)
    }, [])


    const updateData = (e) => {

        var updateData = {
            vCatagoryId: id,
            service: serviceId,
            catagory: catagoryId,
            vCatagoryName: vCatagoryName,
            servicePrice: servicePrice
        }
        e.preventDefault()

        axios.put('http://localhost:4000/vicecatagories', updateData).then(res => {
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
                                                <li class="breadcrumb-item active">Vicecatagoryupdate</li>
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
                                        <label for="catagory id">ViceCatagory Id</label>
                                        <input type="text" class="form-control" defaultValue={vicecatagory._id}
                                            disabled />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Service Id</label>
                                        <input type="text" class="form-control" defaultValue={vicecatagory.service}
                                            onChange={(e) => setserviceId(e.target.value)} ></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Catagory Id</label>
                                        <input type="text" class="form-control" defaultValue={vicecatagory.catagory}
                                            onChange={(e) => setcatagoryId(e.target.value)} ></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="catagory name">ViceCatagory Name</label>
                                        <input type="text" class="form-control" onChange={(e) => { setvCatagoryName(e.target.value) }} defaultValue={vicecatagory.vCatagoryName} />
                                    </div>
                                    <div class="form-group">
                                        <label for="catagory name">Service Price</label>
                                        <input type="text" class="form-control" onChange={(e) => { setservicePrice(e.target.value) }} defaultValue={vicecatagory.servicePrice} />
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

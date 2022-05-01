import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminNavbar } from '../components/AdminNavbar'

export const UpdateRole = () => {
    const toast1 = () => { }


    var id = useParams().id;

    const [role, setRole] = useState('')
    const [roleName, setRoleName] = useState('')


    const getData = () => {

        axios.get(`http://localhost:4000/roles/${id}`).then(res => {

            setRole(res.data.data)
            console.log(res.data.data)

        }).catch(err => {
            console.log(err);
        })
    }


    useEffect(() => {
        getData()
    }, [])




    const updateData = (e) => {

        var updateData = {
            roleId: id,
            roleName: roleName,
        }
        e.preventDefault()

        axios.put('http://localhost:4000/roles', updateData).then(res => {
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
                                                <li class="breadcrumb-item active">Roles update</li>
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




                <div class="header">
                    <div class="container-fluid">
                        <div class="container">
                            <div class="col-lg-8">

                                <form onSubmit={updateData}>
                                    <div class="form-group">
                                        <label for="role id">Role Id</label>
                                        <input type="text" class="form-control" Value={role._id}
                                            disabled />
                                    </div>
                                    <div class="form-group">
                                        <label for="role name">Role Name</label>
                                        <input type="text" class="form-control" Value={role.roleName}
                                            onChange={(e) => setRoleName(e.target.value)} />
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



import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Link } from 'react-router-dom'
import { UserNavbar } from './UserNavbar'


export const UserService = () => {
    const toast1 = () => { }

    const [userServiceList, setuserServiceList] = useState([])

    const [user, setuser] = useState()
    const [uemail, setuemail] = useState()

    var data1 = {
        email: uemail
    }




    const getData = () => {
        axios.get(`http://localhost:4000/userservices/`).then(data => {
            setuserServiceList(data.data.data)
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })

    }

    useEffect(() => {

        setuemail(localStorage.getItem('email'))
        getData()
    }, [])


    axios.post('http://localhost:4000/getuserbyemail', data1).then(res => {
        console.log(res.data.data[0]._id)
        setuser(res.data.data[0]._id)


    }).catch(err => {
        console.log(err);
    })







    return (
        <>
            <div>
                <UserNavbar />



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
                                                <li class="breadcrumb-item"><Link to="#">User/</Link></li>
                                                <li class="breadcrumb-item active">User Services</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>



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
                                                <th scope="col">ServiceName</th>
                                                <th scope="col">CatagoryName</th>
                                                <th scope="col">ViceCatagoryName</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                userServiceList.map((userservice) => {
                                                    console.log(user)
                                                    if (userservice.user._id == user)
                                                        return (
                                                            <>

                                                                <tr>
                                                                    <th scope="row">{userservice._id}</th>
                                                                    <td>{userservice.service.serviceName}</td>
                                                                    <td>{userservice.catagory.catagoryName}</td>
                                                                    <td>{userservice.vCatagory.vCatagoryName}</td>
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

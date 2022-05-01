import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminNavbar } from '../components/AdminNavbar'

export const UpdateUser = () => {
    const toast1 = () => { }




    var id = useParams().id;

    const [user, setuser] = useState([])
    const [firstName, setfirstName] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [address, setaddress] = useState()
    const [pinCode, setpinCode] = useState()
    const [city, setcity] = useState()
    const [state, setstate] = useState()
    const [contactNum, setcontactNum] = useState()


    const getData = () => {

        axios.get(`http://localhost:4000/users/${id}`).then(res => {

            setuser(res.data.data)
            console.log(res.data.data)


        }).catch(err => {
            console.log(err);
        })
    }



    useEffect(() => {
        getData()
        setfirstName(user.firstName)
        setemail(user.email)
        setaddress(user.address)
        setpinCode(user.pinCode)
        setcity(user.cityName)
        setstate(user.stateName)
        setcontactNum(user.contactNum)
    }, [])


    const updateData = (e) => {

        var updateData = {
            userId: id,
            firstName: firstName,
            email: email,
            address: address,
            cityName: city,
            pinCode: pinCode,
            stateName: state,
            contactNum: contactNum,
        }
        e.preventDefault()

        axios.put('http://localhost:4000/users', updateData).then(res => {
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
                                                <li class="breadcrumb-item active">userupdate</li>
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
                                        <label for="user id">User Id</label>
                                        <input type="text" class="form-control" defaultValue={user._id}
                                            disabled />
                                    </div>
                                    <div class="form-group">
                                        <label for="first name">First Name</label>
                                        <input type="text" class="form-control" onChange={(e) => { setfirstName(e.target.value) }} defaultValue={user.firstName} />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="email" class="form-control" defaultValue={user.email}
                                            onChange={(e) => setemail(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" class="form-control" defaultValue={user.password}
                                            onChange={(e) => setpassword(e.target.value)} disabled />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Address</label>
                                        <input type="text" class="form-control" defaultValue={user.address}
                                            onChange={(e) => setaddress(e.target.value)} ></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="">City</label>
                                        <input type="text" class="form-control" defaultValue={user.cityName}
                                            onChange={(e) => setcity(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label for="">PinCode</label>
                                        <input type="text" class="form-control" defaultValue={user.pinCode}
                                            onChange={(e) => setpinCode(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label for="">State</label>
                                        <input type="text" class="form-control" defaultValue={user.stateName}
                                            onChange={(e) => setstate(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Contact Number</label>
                                        <input type="text" class="form-control" defaultValue={user.contactNum}
                                            onChange={(e) => setcontactNum(e.target.value)} />
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

import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../assets/css/lib/font-awesome.min.css'
import '../assets/css/lib/themify-icons.css'
// import '../assets/css/lib/bootstrap.min.css'
import '../assets/css/lib/helper.css'
import '../assets/css/style.css'


export const SignUp = () => {

    const [firstName, setfirstName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [address, setaddress] = useState('')
    const [stateName, setstateName] = useState('')
    const [cityName, setcityName] = useState('')
    const [pinCode, setpinCode] = useState('')
    const [contactNum, setcontactNum] = useState('')


    const [pmsg, setpmsg] = useState('')
    const [emsg, setemsg] = useState('')



    const emailChangeHandler = (e) => {
        if (e.target.value.length < 11) {
            setemsg("please enter valid email")


        }
        else {
            setemsg('')

        }

    }


    const passwordChangeHandler = (e) => {
        if (e.target.value.length < 8) {
            setpmsg("password must be atleast 8 characters")


        }
        else {
            setpmsg('')

        }
    }







    const addUser = (e) => {

        var data = {

            firstName: firstName,
            email: email,
            password: password,
            address: address,
            stateName: stateName,
            cityName: cityName,
            pinCode: pinCode,
            contactNum: contactNum

        }
        e.preventDefault()



        axios.post('http://localhost:4000/users', data).then(res => {
            if (res.data.msg == "email already exists") {

                // console.log(res.data)
                toast.warning('🦄 Email already exists', {
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
                console.log(data)
                toast.success('🦄 User Added Successfully!', {
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
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div>
                <div class="unix-login bg-dark">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="login-content">

                                    <div class="login-form">
                                        <h4>Register</h4>
                                        <form onSubmit={addUser} method="POST">
                                            <div class="form-group">
                                                <label>FirstName</label>
                                                <input type="text" class="form-control" required placeholder="FirstName" onChange={(e) => { setfirstName(e.target.value) }} />


                                            </div>
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" class="form-control" required placeholder="Email" onChange={(e) => { setemail(e.target.value) }} onBlur={(e) => { emailChangeHandler(e) }} />
                                                <small className='msg'>{emsg}</small>

                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" required placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} onBlur={(e) => { passwordChangeHandler(e) }} />
                                                <small className='msg'>{pmsg}</small>
                                            </div>
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input type="textarea" class="form-control" required placeholder="Address" onChange={(e) => { setaddress(e.target.value) }} />

                                            </div>
                                            <div class="form-group">
                                                <label>StateName</label>
                                                <input type="text" class="form-control" required placeholder="StateName" onChange={(e) => { setstateName(e.target.value) }} />

                                            </div>
                                            <div class="form-group">
                                                <label>CityName</label>
                                                <input type="text" class="form-control" required placeholder="CityName" onChange={(e) => { setcityName(e.target.value) }} />

                                            </div>
                                            <div class="form-group">
                                                <label>PinCode</label>
                                                <input type="text" class="form-control" required placeholder="PinCode" onChange={(e) => { setpinCode(e.target.value) }} />

                                            </div>
                                            <div class="form-group">
                                                <label>ContactNumber</label>
                                                <input type="text" class="form-control" required placeholder="ConatctNumber" onChange={(e) => { setcontactNum(e.target.value) }} />

                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" required /> Agree the terms and policy
                                                </label>
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30" >Register</button>
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
                                            <div class="social-login-content">
                                                <div class="social-button">
                                                    <button type="button" class="btn btn-primary bg-facebook btn-flat btn-addon m-b-10"><i class="ti-facebook"></i>Register with facebook</button>
                                                    <button type="button" class="btn btn-primary bg-twitter btn-flat btn-addon m-t-10"><i class="ti-twitter"></i>Register with twitter</button>
                                                </div>
                                            </div>
                                            <div class="register-link m-t-15 text-center">
                                                <p>Already have account ? <Link to="/Login"> Sign in</Link></p>
                                                <p><Link to="/Home"> Home Page</Link></p>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


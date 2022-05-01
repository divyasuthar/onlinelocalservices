import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { UpdatePass } from './UpdatePass'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const ForgotPass = () => {
    const toast1 = () => { }


    const [email, setemail] = useState('')
    const [disable1, setdisable1] = useState(true)
    const [disable2, setdisable2] = useState(false)
    const [disable3, setdisable3] = useState(true)
    const [otp, setotp] = useState()
    const [msg, setmsg] = useState('first enter email and submit for otp')
    const [omsg, setomsg] = useState('')
    const [maindata, setmaindata] = useState()
    const [id, setid] = useState()


    var data = {
        email: email
    }

    const sendotp = (e) => {
        e.preventDefault()

        axios.post('http://localhost:4000/sendotp', data).then(res => {
            console.log(res.data)

            setmaindata(res.data.myotp)

            // console.log(res.data.data.data[0]._id)
            setid(res.data.data1[0]._id)

            if (res.data.status == 200) {
                toast.success(`🦄  Otp sent Successfully!`, {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
                setdisable1(false)
                setmsg('')
                setomsg('Enter Otp')
            }

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
            })
            console.log(err)
        })

    }

    const compareOtp = (e) => {
        if (e.target.value.length <= 0) {
            setomsg('Enter Otp')
        }
        else {
            setomsg('')
            if (e.target.value == maindata) {

                toast.success(`🦄  Correct Otp!`, {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
                setdisable3(false)
                console.log('correct otp')
                setdisable2(true)

            }
            else {
                toast.error(`Incorrect Otp`, {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
                console.log("Incorrect otp")
            }
        }

    }



    return (
        <>





            <div>
                <div class="unix-login">
                    <div class="container-fluid bg-dark">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="login-content">


                                    <div class="login-form">
                                        <h4>Reset Password</h4>
                                        <form onSubmit={sendotp} >
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" class="form-control" placeholder="Email" onChange={(e) => { setemail(e.target.value) }} />
                                                <small className='msg'>{msg}</small>
                                            </div>
                                            <div class="form-group">
                                                <label>Enter Otp</label>
                                                <input type="text" class="form-control" disabled={disable1} placeholder="Otp" onChange={(e) => { setotp(e.target.value) }} onBlur={(e) => { compareOtp(e) }} />
                                                <small className='msg'>{omsg}</small>
                                            </div>

                                            <button type="submit" class="btn btn-primary btn-flat m-b-15" disabled={disable2} onClick={toast1}>Submit</button>
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
                                        <form action={`/UpdatePass/${id}`} >

                                            <button type="submit" class="btn btn-primary btn-flat m-b-15" disabled={disable3}>Update Password
                                            </button>
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

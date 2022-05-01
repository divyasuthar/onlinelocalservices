import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const toast1 = () => { }

    let navigate = useNavigate()


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [disable, setdisable] = useState(true)
    const [pmsg, setpmsg] = useState('')
    const [emsg, setemsg] = useState('')




    useEffect(() => {
        toast.warning(`Please Login First`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }, [])

    const enable = () => {
        setdisable(false)

    }

    const emailChangeHandler = (e) => {
        if (e.target.value.length <= 0) {
            setemsg("please enter email")
            setdisable(true)
        }
        else {
            setemsg('')
        }

    }


    const passwordChangeHandler = (e) => {
        if (e.target.value.length <= 0) {
            setpmsg("Please Enter password")
            setdisable(true)
        }
        else {
            setpmsg('')
            enable()
        }
    }


    const login = (e) => {
        e.preventDefault()


        var data = {
            email: email,
            password: password
        }




        axios.post('http://localhost:4000/login', data).then(res => {
            console.log(res.data.msg)
            var msg = res.data.msg

            if (res.data.status == 200 && email == 'admin@gmail.com') {
                localStorage.setItem('email', email)

                toast.success(`Admin Login`, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });

                setTimeout(() => {
                    navigate('/admin/Dashboard')

                }, 1500);



            }
            else if (res.data.status == 200) {
                localStorage.setItem('email', email)

                toast.success(`🦄${msg}`, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });

                setTimeout(() => {
                    navigate('/Home')

                }, 1500);

            }

            else {
                toast.error(`🦄${msg}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            }


        }).catch(err => {
            toast.error(`🦄${err}`, {
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


                <div class="unix-login bg-dark">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="login-content">
                                    <div class="login-logo">

                                    </div>
                                    <div class="login-form">
                                        <h4>Login</h4>
                                        <form onSubmit={login}>
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" class="form-control" placeholder="Email" onChange={(e) => { setemail(e.target.value) }} onBlur={(e) => { emailChangeHandler(e) }} />
                                                <small className='msg'>{emsg}</small>

                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} onBlur={(e) => { passwordChangeHandler(e) }} />
                                                <small className='msg'>{pmsg}</small>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Remember Me
                                                </label>
                                                <label class="pull-right">
                                                    <Link to="/ForgotPass">Forgot Password?</Link>
                                                </label>

                                            </div>
                                            <button type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30" id="signin" disabled={disable} onClick={toast1}> Sign In</button>:""
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
                                                    <button type="button" class="btn btn-primary bg-facebook btn-flat btn-addon m-b-10"><i class="ti-facebook"></i>Sign in with facebook</button>
                                                    <button type="button" class="btn btn-primary bg-twitter btn-flat btn-addon m-t-10"><i class="ti-twitter"></i>Sign in with twitter</button>
                                                </div>
                                            </div>
                                            <div class="register-link m-t-15 text-center">
                                                <p>Don't have account ? <Link to="/Signup"> Sign Up Here</Link></p>
                                                <p><Link to="/Home"> Home Page</Link></p>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

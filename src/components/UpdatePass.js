import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



export const UpdatePass = (props) => {
    var id = useParams().id;
    const [password, setpassword] = useState('')





    const update = (e) => {

        e.preventDefault()
        const toast1 = () => { }


        var data = {
            userId: id,
            password: password,
        }


        axios.put('http://localhost:4000/users/updatepass', data).then(res => {
            console.log(res.data)
            toast.success(`Password Updated`, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }).catch(err => {
            console.log(err)
        })

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
                                        <h4>Update Password</h4>
                                        <form onSubmit={update}>
                                            <div class="form-group">
                                                <label>New Password</label>
                                                <input type="password" class="form-control" placeholder="password" onChange={(e) => { setpassword(e.target.value) }} />

                                            </div>



                                            <button type="submit" class="btn btn-primary btn-flat m-b-15" >Submit</button>
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
                                            <div class="register-link m-t-15 text-center">
                                                <p><Link to="/Login"> Login</Link></p>

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

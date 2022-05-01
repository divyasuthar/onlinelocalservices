import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const DeleteRole = () => {

    var id = useParams().id;
    const deleteData = () => {



        axios.delete(`http://localhost:4000/roles/` + id).then(res => {
            alert("Data deleted successfully")
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {

        deleteData()
    })
    return (
        <div></div>
    )
}

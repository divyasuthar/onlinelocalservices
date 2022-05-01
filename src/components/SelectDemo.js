import React from 'react'
import { useState } from 'react'

export const SelectDemo = () => {


    const [value, setvalue] = useState([])




    const options = [
        {
            lable: 'AUDI',
            value: 'audi',
        },

        {
            lable: 'BMW',
            value: 'bmw'
        },

        {
            lable: 'MERCEDES',
            value: 'mercedes'
        },

    ]
    const selectChangeHandler = (e) => {
        console.log(e.target.value)
        setvalue(e.target.value)
        alert(e.target.value)
    }

    const radioChangeHandler = (e) => {
        alert(e.target.value)
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">SELECT</label>
                <select onChange={(e) => { selectChangeHandler(e) }} value={value}>
                    {
                        options.map((option) => {
                            return (<option value={option.value} >{option.lable}</option>)
                        })
                    }

                </select>
                <br />

                <label>Male</label>
                <input type="radio" name="gender" value="Male" onChange={(e) => { radioChangeHandler(e) }} defaultChecked />
                <label>Female</label>
                <input type="radio" name="gender" value="Female" onChange={(e) => { radioChangeHandler(e) }} />
            </form>
        </div >
    )
}

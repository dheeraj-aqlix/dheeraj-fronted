import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { register } from '../helpers/user.js';

function Registration() {
    const [form, setform] = useState({
        email: '',
        password: '',

    })
    const [picture, setPicture] = useState(null);

    const handleChange = (e) => {
        setform((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFileChange = (e) => {
        setPicture(e.target.files[0])
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("email", form.email);
        data.append('password', form.password);
        data.append('picture', picture)
        try{
            const response = await register(data);
        }catch(error){
            console.log("errrpr", error)
        }

    }

    return (
        <div className='p-5'>
            <input name='email' type='text' class="form-control my-3 mx-5" onChange={handleChange} placeholder='Email' />
            <input name='password' type='password' class="form-control my-3 mx-5" onChange={handleChange} placeholder='Password' />
            <input type='file' accept='image/png' class="form-control my-3 mx-5" placeholder='Email' onChange={handleFileChange} />
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default Registration
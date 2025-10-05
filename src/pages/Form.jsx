import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Form = () => {
    const [users,setusers] =useState({})
    const [show,setShow] = useState(false)

    function Input(e){
        e.preventDefault()
        const {name,value} = e.target
        setusers({...users,[name]:value})
        setShow(false)
        // console.log(users)
    }

    function showData(e){
        e.preventDefault()
        setShow(true)
    }
  return (
    <>
        <div className="container mt-5">
            <h1>Admission Form</h1>
            <form onSubmit={showData}>
                <label htmlFor="name" className='form-label text-capitalize'>name</label>
                <input type="text" name='name' id='name' className='form-control mb-2'  onChange={(e)=>{Input(e)}} placeholder='Enter Name' autoFocus  />

                <label htmlFor="email" className='form-label text-capitalize'>email</label>
                <input type="text" name='email' id='email' className='form-control mb-2'  onChange={(e)=>{Input(e)}} placeholder='Enter Email' required />

                <label htmlFor="phone" className='form-label text-capitalize'>phone number</label>
                <input type="number" name='phone' id='phone' className='form-control mb-2'  onChange={(e)=>{Input(e)}} placeholder='Enter Phone' required />

                <label htmlFor="gender" className='form-label text-capitalize'>gender</label>
                <div className='row mb-3'>
                    <div className="col">
                        <input type="radio" name="gender" id="male" value='male' onChange={(e)=>{Input(e)}}  />
                        <label htmlFor="male" className='text-capitalize'>male</label>
                    </div>
                    <div className="col">
                        <input type="radio" name="gender" id="female" value='female' onChange={(e)=>{Input(e)}}  />
                        <label htmlFor="female" className='text-capitalize'>female</label>
                    </div>
                    <div className="col">
                        <input type="radio" name="gender" id="other" value='other' onChange={(e)=>{Input(e)}}  />
                        <label htmlFor="other" className='text-capitalize'>other</label>
                    </div>
                </div>

                <label htmlFor="course" className='form-label text-capitalize'>course</label>
                <select className='form-select mb-3' name="course" id="course" defaultValue='' onChange={(e)=>{Input(e)}}  >
                    <option className='text-capitalize' value="" disabled>-- select course --</option>
                    <option className='text-capitalize' value='B.com'>B.com</option>
                    <option className='text-capitalize' value='BCA'>BCA</option>
                    <option className='text-capitalize' value='MCA'>MCA</option>
                    <option className='text-capitalize' value='BSC'>BSC</option>
                </select>

                <label htmlFor="address" className='form-label text-capitalize'>address</label>
                <textarea className='form-control mb-3' name="address" id="address" onChange={(e)=>{
                    Input(e)}} placeholder='Enter Address'></textarea>

                <label htmlFor="resume" className='form-label text-capitalize'>12th marksheet</label>
                <input type="file" className='form-control' name="resume" id="resume" onChange={
                    (e)=>{
                        const file = e.target.files[0]
                        setusers({...users,resume:file.name})
                        // console.log(file)
                    }
                } required />

                <button className='btn btn-outline-info mt-3'>submit</button>
            </form>
        </div>

        {
            show ?
            <div className='container mt-3 text-capitalize text-center border border-4 rounded-4 shadow p-2'>
                <p><b>name : </b> {users.name}</p>
                <p><b>email : </b> {users.email}</p>
                <p><b>phone : </b> {users.phone}</p>
                <p><b>gender : </b> {users.gender}</p>
                <p><b>course : </b> {users.course}</p>
                <p><b>address : </b> {users.address}</p>
                <p><b>resume : </b> {users.resume}</p>
            </div>
            : ""
        }

    </>
  )
}

export default Form

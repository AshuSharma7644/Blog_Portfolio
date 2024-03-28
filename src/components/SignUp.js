import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className='container my-5 d-flex p-0'>
        <div className='main-form w-50'>
        <form>
        <div className="form-group mb-4">
    <label htmlFor="exampleInputEmail1">Full Name</label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Name"
    />
    
  </div>


  <div className="form-group mb-4">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
    />
    
  </div>
  <div className="form-group mb-4">
    <label htmlFor="exampleInputEmail1">Mobile Number</label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Mobile Number"
    />
    
  </div>
  <div className="form-group mb-4">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
    />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary mt-4">
    Submit
  </button>
</form>
        </div>
        <div className='second-main w-50'></div>
</div>

    </>
  )
}

export default SignUp
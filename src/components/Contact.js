import React from 'react'

const Contact = () => {
  return (
    <>

      <div>
        <div className='container'>
        <div class="row">
  <div class="col">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>

<div className='row'>
<div className="col">
    <input type="text" className="form-control" placeholder="Email"/>
  </div>
  <div className="col">
    <input type="number" className="form-control" placeholder="Mobile Number"/>
  </div>
</div>
        </div>
      </div>
    </>
  )
}

export default Contact
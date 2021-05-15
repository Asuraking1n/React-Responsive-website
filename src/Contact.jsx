import React, { useState } from "react";



function Contact() {

  const [data, setdata] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    msg: "",
  })
  const formsubmit = (event) => {
    event.preventDefault();
    alert(`My name is ${data.fname} ${data.lname} phone number and email is ${data.phone} , ${data.email}. Iwant to say ${data.msg}`)
  }
  const inpurEvent = (event) => {
    const { name, value } = event.target;
    setdata((olddata) => {
      return {
        ...olddata, [name]: value,
      }
    })
  }
  return (
    <>
      <h1 className="text-center my-3">Contact Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div class="input-group my-3 ">

                <input type="text" aria-label="First name" className="form-control me-3" name="fname" value={data.fname} onChange={inpurEvent} placeholder="First Name" />
                <input type="text" aria-label="Last name" className="form-control" name="lname" value={data.lname} onChange={inpurEvent} placeholder="Last Name" />
              </div>
              <div className="form-group my-3">

                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inpurEvent} placeholder="name@example.com " />
              </div>
              <div className="form-group my-3">

                <input type="text" className="form-control" id="phno" name="phone" value={data.phone} onChange={inpurEvent} placeholder="+91-123456789 " />
              </div>

              <div className="form-group my-3">

                <textarea className="form-control" name="msg" value={data.msg} onChange={inpurEvent} placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="d-grid gap-2">

                <button class="btn btn-primary" type="Submit">Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

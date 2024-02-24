// import React, {useState} from 'react'
// import { Link } from 'react-router-dom'

// export default function Signup(){
//  const[credentials, setCredentials] = useState({name:"",email:"",password:""})


// const handleSubmit =  async (e) =>{
//       e.preventDefault();
//       const response = await fetch("http://localhost:5000/api/createuser",{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password})
//       });
//       const json = await response.json()
//       console.log(json);

//     if(!json.success){
//        alert("enter valiid credentials")
//     }
// }

// const onChange = (event)=>{
//     setCredentials({...credentials,[event.target.name]:event.target.value})
// }
//     return(
//         <>
        
//         <form onSubmit={handleSubmit} >
//         <div className="mb-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
    
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
//   </div>
  
//   <button type="submit" className=" m-3 btn btn-success">Submit</button>
//   <Link to="/login" className='m-3 btn btn-danger' > Allready a User</Link>
// </form>
        
//         </>
//     )
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        setError("Invalid credentials");
      } else {
        // Handle success, e.g., redirect or show a success message
        alert("User created successfully!");
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError("An error occurred");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
        </div>
        <button type="submit" className=" m-3 btn btn-success">Submit</button>
        <Link to="/login" className='m-3 btn btn-danger' > Already a User</Link>
      </form>
    </>
  )
}

// import React from 'react'
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//     const [credentials, setCredentials] = useState({ email: "", password: "" })

//      let navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/loginuser", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email: credentials.email, password: credentials.password })
//         });
//         const json = await response.json()
//         console.log(json);

//         if (!json.success) {
//             alert("enter valiid credentials")
//         }
//         if (json.success) {
//             localStorage.setItem("authToken",json.authToken)
//             console.log(localStorage.getItem("authToken"))
//            navigate("/");
//         }
    
//     }

//     const onChange = (event) => {
//         setCredentials({ ...credentials, [event.target.name]: event.target.value })
//     }
//     return (
//         <div><form onSubmit={handleSubmit} >

//             <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                 <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
//                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                 <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
//             </div>

//             <button type="submit" className=" m-3 btn btn-success">Submit</button>
//             <Link to="/signup" className='m-3 btn btn-danger' > I'm a new User</Link>
//         </form></div>
//     )
// }



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//     const [credentials, setCredentials] = useState({ email: "", password: "" });
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:5000/api/loginuser", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ email: credentials.email, password: credentials.password })
//             });

//             if (!response.ok) {
//                 throw new Error('Invalid credentials');
//             }

//             const json = await response.json();
//             console.log(json);

//             if (!json.success || !json.authToken) {

//             // if (!json.success) {
//                 setError("Invalid credentials");
//             } else {
//                 localStorage.setItem("userEmail", credentials.email)
//                 localStorage.setItem("authToken", json.authToken);
//                 console.log(localStorage.getItem("authToken"));
//                 navigate("/");
//             }
//         } catch (error) {
//             console.error('Error:', error.message);
//             setError("An error occurred");
//         }
//     };

//     const onChange = (event) => {
//         setCredentials({ ...credentials, [event.target.name]: event.target.value });
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit} >
//                 {error && <div className="alert alert-danger" role="alert">{error}</div>}
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                     <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
//                 </div>
//                 <button type="submit" className=" m-3 btn btn-success">Submit</button>
//                 <Link to="/signup" className='m-3 btn btn-danger' > I'm a new User</Link>
//             </form>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email to be sent:', credentials.email);

        try {
           
            const response = await fetch("http://localhost:5000/api/loginuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                const json = await response.json();
                console.log(json);

                if (!json.success || !json.authToken) {
                    setError("Invalid credentials");
                } else {
                    localStorage.setItem("userEmail", credentials.email);
                    localStorage.setItem("authToken", json.authToken);
                    console.log(localStorage.getItem("authToken"));
                    navigate("/");
                }
            } else {
                console.error('Invalid response status:', response.status);
                setError("An error occurred");
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
        <div>
            <form onSubmit={handleSubmit} >
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/signup" className='m-3 btn btn-danger' > I'm a new User</Link>
            </form>
        </div>
    );
}



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//     const [credentials, setCredentials] = useState({ email: "", password: "" });
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Log the email before making the API request
//         console.log('Email to be sent:', credentials.email);

//         try {
//             const response = await fetch("http://localhost:5000/api/loginuser", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ email: credentials.email, password: credentials.password })
//             });

//             // Log the response
//             console.log('Login API response:', response);

//             if (response.ok) {
//                 const json = await response.json();

//                 // Log the JSON response
//                 console.log('Login API JSON response:', json);

//                 if (!json.success || !json.authToken) {
//                     setError("Invalid credentials");
//                 } else {
//                     localStorage.setItem("userEmail", credentials.email);
//                     localStorage.setItem("authToken", json.authToken);
//                     console.log('AuthToken stored in localStorage:', localStorage.getItem("authToken"));
//                     navigate("/");
//                 }
//             } else {
//                 console.error('Invalid response status:', response.status);
//                 setError("An error occurred");
//             }
//         } catch (error) {
//             console.error('Error:', error.message);
//             setError("An error occurred");
//         }
//     };

//     const onChange = (event) => {
//         setCredentials({ ...credentials, [event.target.name]: event.target.value });
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit} >
//                 {error && <div className="alert alert-danger" role="alert">{error}</div>}
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                     <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
//                 </div>
//                 <button type="submit" className="m-3 btn btn-success">Submit</button>
//                 <Link to="/signup" className='m-3 btn btn-danger' > I'm a new User</Link>
//             </form>
//         </div>
//     );
// }
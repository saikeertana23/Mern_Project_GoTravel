
// import React, { useEffect, useState } from 'react'
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {

//     const [orderData, setorderData] = useState({})

//     const fetchMyOrder = async () => {
//         console.log(localStorage.getItem('userEmail'))
//         await fetch("http://localhost:5000/api/auth/myorderData", {
//             // credentials: 'include',
//             // Origin:"http://localhost:3000/login",
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: localStorage.getItem('userEmail')
//             })
//         }).then(async (res) => {
//             let response = await res.json()
//             await setorderData(response)
//         })



//         // await res.map((data)=>{
//         //    console.log(data)
//         // })


//     }

//     useEffect(() => {
//         fetchMyOrder()
//     }, [])

//     return (
//         <div>
//             <div>
//                 <Navbar />
//             </div>
// <div className='container'>
// <div className='row'>

//     {orderData !== {} ? Array(orderData).map(data => {
//     return (
//     data.orderData ?
//     data.orderData.order_data.slice(0).reverse().map((item) => {
//     return (
//     item.map((arrayData) => {
//     return (
//     <div  >
//     {arrayData.Order_date ? <div className='m-auto mt-5'>
//     {data = arrayData.Order_date}
//     <hr />
//     </div> :
//         <div className='col-12 col-md-6 col-lg-3' >
//         <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//         <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//         <div className="card-body">
//         <h5 className="card-title">{arrayData.name}</h5>
//         <div className='container w-100 p-0' style={{ height: "38px" }}>
//         <span className='m-1'>{arrayData.qty}</span>
//         <span className='m-1'>{arrayData.size}</span>
//         <span className='m-1'>{data}</span>
//         <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//         ₹{arrayData.price}/-
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
// }

// </div>
// )
// })
// )
// }) : ""
// )
// }) : ""}
// </div>
// </div>
// <Footer />
// </div>
//     )
// }


// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {
//   const [orderData, setOrderData] = useState([]);

//   const fetchMyOrder = async () => {
//     try {
//         console.log(localStorage.getItem('userEmail'));
//     //   const response = await fetch("http://localhost:5000/api/myorderData", {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify({
//     //       email: localStorage.getItem('userEmail')
//     //     })
//     //   });
//     const response = await fetch("http://localhost:5000/api/myorderData", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     email: localStorage.getItem('userEmail')
    
//   })
// });
//       if (response.ok) {
//         const data = await response.json();
//         setOrderData(data.orderData);
//       } else {
//         console.error("Failed to fetch my order data");
//       }
//     } catch (error) {
//       console.error("Error fetching my order data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMyOrder();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className='container'>
//         <div className='row'>
//           {orderData.length > 0 ? (
//             orderData.map((data) =>
//               data.orderData.order_data.slice(0).reverse().map((item, index) => (
//                 <div key={index}>
//                   {item.map((arrayData) => (
//                     <div className='col-12 col-md-6 col-lg-3' key={arrayData.id}>
//                       <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                         <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                         <div className="card-body">
//                           <h5 className="card-title">{arrayData.name}</h5>
//                           <div className='container w-100 p-0' style={{ height: "38px" }}>
//                             <span className='m-1'>{arrayData.qty}</span>
//                             <span className='m-1'>{arrayData.size}</span>
//                             <span className='m-1'>{data}</span>
//                             <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                               ₹{arrayData.price}/-
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ))
//             )
//           ) : (
//             <p>No orders found.</p>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {
//   const [orderData, setOrderData] = useState([]);

//   const fetchMyOrder = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/myorderData", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: localStorage.getItem('userEmail')
//         })
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Data from API:", data);
//         setOrderData(data.orderData);
//       } else {
//         console.error("Failed to fetch my order data");
//       }
//     } catch (error) {
//       console.error("Error fetching my order data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMyOrder();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className='container'>
//         <div className='row'>
//           { orderData &&  orderData.length > 0 ? (
//             orderData.orderData.map((data, index) => (
//             // orderData.map((data, index) => (
//               <div key={index}>
//                 {/* {data.order_data.slice(0).reverse().map((item, innerIndex) => ( */}
//                 { data.orderData.order_data.slice(0).reverse().map((item, index) => (
//                   <div className='col-12 col-md-6 col-lg-3' key={index}>
//                     <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                       <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                       <div className="card-body">
//                         <h5 className="card-title">{item.name}</h5>
//                         <div className='container w-100 p-0' style={{ height: "38px" }}>
//                           <span className='m-1'>{item.qty}</span>
//                           <span className='m-1'>{item.size}</span>
//                           <span className='m-1'>{data.some_other_property}</span>
//                           <div className='d-inline ms-2 h-100 w-20 fs-5'>
//                             ₹{item.price}/-
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))
//           ) : (
//             <p>No orders found.</p>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      console.log(localStorage.getItem('userEmail'));

      const response = await fetch("http://localhost:5000/api/myorderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });

      if (response.ok) {
        const data = await response.json();
        setOrderData(data.orderData);
      } else {
        console.error("Failed to fetch my order data");
      }
    } catch (error) {
      console.error("Error fetching my order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          {/* Add a check for orderData and its length */}
          {orderData && orderData.length > 0 ? (
            orderData.map((data) =>
              data.orderData.order_data.slice(0).reverse().map((item, index) => (
                <div key={index}>
                  {item.map((arrayData) => (
                    <div className='col-12 col-md-6 col-lg-3' key={arrayData.id}>
                      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                        {/* ... rest of your card rendering */}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
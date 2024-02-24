// import React from "react";
// import { useCart, useDispatchCart } from "../components/ContextReducer";
// // import trash from ""
// // const trashIcon = `<a href="https://iconscout.com/icons/delete" class="text-underline font-size-sm" target="_blank">Delete</a> by <a href="https://iconscout.com/contributors/theiconz" class="text-underline font-size-sm" target="_blank">The Icon Z</a>`;
// const trashIcon = `
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
//     <path d="M21 4h-4V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9V2C9 1.45 8.55 1 8 1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM9 4h6v2H9V4zm8 16H7V9h10v11z"  style="fill: green;"  />
//   </svg>
// `;

// export default function Cart(){
//     let data = useCart();
//     let dispatch = useDispatchCart();
//     if(data.length === 0){
//         return(
//             <div>
//                 <div className="m-5 w-100 text-center fs-3" style={{ color: 'green' }}>The Cart is Empty!</div>
//             </div>
//         )
//     }

//     const handleCheckOut = async()=>{
//         let userEmail = localStorage.getItem("userEmail")
//         let response = await fetch("http://localhost:5000/api/orderData",{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 order_data:data,
//                 email:userEmail,
//                 order_date:new Date().toDateString()
//             })

//         }
//         );
//         console.log("order response:",response)
//         if(response.status === 200){
//             dispatch({type:"DROP"})
//         }
//     }
//     let totalPrice = data.reduce((total,place)=>total+place.price,0)
//     return(
//         <div>
//             <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md" >
//                 <table className="table table-hover" >
//                     <thead className="text-success fs-4" style={{ color: 'green' }}>
//                       <tr>
//                         <th scope='col' >#</th>
//                         <th scope='col' >Name</th>
//                         <th scope='col' >Persons</th>
//                         <th scope='col' >Option</th>
//                         <th scope='col' >Amount</th>
//                         <th scope='col' ></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((place,index)=>(
//                             <tr>
//                                 <th scope='row' style={{ color: 'green' }} >{index+1}</th>
//                                 <td style={{ color: 'green' }}>{place.name}</td>
//                                 <td style={{ color: 'green' }}>{place.qty}</td>
//                                 <td style={{ color: 'green' }}>{place.size}</td>
//                                 <td style={{ color: 'green' }}>{place.price}</td>
//                                 <td>
//                                     {/* <button type="button" className="btn p-0" ><img src={trash} alt="delete" onClick={()=>{dispatch({type:"REMOVE",index:index})}} /></button> */}
//                                     <button
//                     type="button"
//                     className="btn p-0"
//                     onClick={() => {
//                       dispatch({ type: "REMOVE", index: index });
//                     }}
//                   >
//                     {/* Use dangerouslySetInnerHTML to render the SVG code */}
//                     <span dangerouslySetInnerHTML={{ __html: trashIcon }} />
//                   </button>
//                                     </td>
//                             </tr>
//                             //src={trash}
//                         ))}
//                     </tbody>
//                 </table>
//                 <div><h1 className="fs-2" style={{ color: 'green' }}>Total Price: {totalPrice}/-</h1></div>
//                 <div>
//                     <button className="btn bg-success mt-5" onClick={handleCheckOut} >Check Out</button>
//                 </div>

//             </div>
//         </div>
//     )
// }



import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import Modal from "../Modal";

const trashIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21 4h-4V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9V2C9 1.45 8.55 1 8 1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM9 4h6v2H9V4zm8 16H7V9h10v11z"/>
  </svg>
`;

const Cart = () => {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (!data || data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3" style={{ color: "green" }}>
          The Cart is Empty!
        </div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("order response:", response);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, place) => total + place.price, 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4" style={{ color: "green" }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Persons</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((place, index) => (
              <tr key={index}>
                <th scope="row" style={{ color: "green" }}>
                  {index + 1}
                </th>
                <td style={{ color: "green" }}>{place.name}</td>
                <td style={{ color: "green" }}>{place.qty}</td>
                <td style={{ color: "green" }}>{place.size}</td>
                <td style={{ color: "green" }}>{place.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: trashIcon }}
                      style={{ color: "green" }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2" style={{ color: "green" }}>
            Total Price: {totalPrice}/-
          </h1>
        </div>
        <div>
          <button className="btn bg-success mt-5" onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
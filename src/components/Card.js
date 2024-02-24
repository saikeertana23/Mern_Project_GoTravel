// import React from 'react'

// export default function Card(props) {

// let options = props.options;
// let priceOptions = Object.keys(options);

//   return (
//     <div>          
//          <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//     <img src="https://amazemytrip.com/wp-content/uploads/2020/01/Gujarat.jpeg" className="card-img-top" alt="..." />
//     <div className="card-body">
//         <h5 className="card-title">{props.placeName}</h5>
   
//         <div className='container w-100' >
//             <select className='m-2 h-100 rounded' >
//                 {Array.from(Array(6), (e, i) => {
//                     return (
//                         <option key={i + 1} value={i + 1}> {i+1} </option>
//                     )
//                 })}
//             </select>
//             <select className='m-2 h-100  rounded' >

//                {priceOptions.map((data)=>{
//                 return <option key={data} value={data}>{data}</option>
//                })}
//                 {/* <option value="flight" >Flight</option>
//                 <option value="train" >Train</option> */}
//             </select>
//         </div>
//     </div>
// </div></div>
//   )
// }


// import React from 'react';

// export default function Card(props) {
//   const { placeName, img, options } = props;
//   const priceOptions = Object.keys(options[0]);

//   return (
//     <div>
//       <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//         <img src={img} className="card-img-top" alt={placeName} />
//         <div className="card-body">
//           <h5 className="card-title">{placeName}</h5>
//           <div className='container w-100' >
//             <select className='m-2 h-100 rounded' >
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <select className='m-2 h-100  rounded' >
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>{data}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';

// export default function Card(props) {
//   const { placeName, img, options } = props;
//   const priceOptions = Object.keys(options[0]);

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card h-100">
//         <img src={img} className="card-img-top" alt={placeName} />
//         <div className="card-body">
//           <h5 className="card-title">{placeName}</h5>
//           <div className='container w-100' >
//             <select className='m-2 h-100 rounded' >
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <select className='m-2 h-100  rounded' >
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>{data}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';

// export default function Card(props) {
//   let options = props.options;
//   let priceOptions = Object.keys(options);

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card" style={{ "maxWidth": "18rem" }}>
//         <img src={props.img} className="card-img-top" alt="..." style={{ "height": "200px", "objectFit": "cover" }} />
//         <div className="card-body">
//           <h5 className="card-title">{props.placeName}</h5>
//           <div className='container w-100'>
//             <select className='m-2 h-100 rounded'>
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <select className='m-2 h-100 rounded'>
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>{data}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import Home from '../screens/Home';

// export default function Card(props) {
//   let options = props.options || {};
//   let priceOptions = Object.keys(options);

// //   console.log("options:", options);
// //   console.log("priceOptions:", priceOptions);
// console.log("props.options:", props.options);
//   console.log("options:", options);
//   console.log("priceOptions:", priceOptions);


//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card" style={{ "maxWidth": "18rem" }}>
//         <img src={props.img} className="card-img-top" alt="..." style={{ "height": "200px", "objectFit": "cover" }} />
//         <div className="card-body">
//           <h5 className="card-title">{props.placeName}</h5>
//           <div className='container w-100'>
//             <select className='m-2 h-100 rounded'>
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <select className='m-2 h-100 rounded'>
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>{data}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from 'react';

// export default function Card(props) {
//   const options = props.options || [];
//   const priceOptions = options.map((option, index) => (
//     <div key={index}>
//       <p>Flight: {option.flight}</p>
//       <p>Train: {option.train}</p>
//     </div>
//   ));

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card" style={{ maxWidth: "18rem" }}>
//         <img
//           src={props.img}
//           className="card-img-top"
//           alt="..."
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.placeName}</h5>
//           <div className="container w-100">
//             <select className="m-2 h-100 rounded">
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <div className="m-2 h-100 rounded">{priceOptions}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';

// export default function Card(props) {
//   const options = props.options || [];
//   const priceOptions = options.map((option, index) => (
//     <option key={index} value={JSON.stringify(option)}>
//       Flight: {option.flight}, Train: {option.train}
//     </option>
//   ));

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card" style={{ maxWidth: "18rem" }}>
//         <img
//           src={props.img}
//           className="card-img-top"
//           alt="..."
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.placeName}</h5>
//           <div className="container w-100">
//             <select className="m-2 h-100 rounded">
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <select className="m-2 h-100 rounded">
//               {/* {priceOptions} */}
//               {priceOptions.map((data)=>{
//                 return <option key={data} value={data} >{data}</option>
//               })}
              
//             </select>
//             <div className='d-inline h-100 fs-5' >
//                  Total Price
//             </div>


//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useRef, useState, useEffect } from 'react';
// import { useDispatchCart, useCart, useDispatch } from './ContextReducer';

// export default function Card(props) {

//   const options = props.options || [];
//   const priceOptions = options.length > 0 ? Object.keys(options[0]) : [];
//   const placeItem = props.placeItems;
//   const handleAddToCart = ()=>{

//   }

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card" style={{ maxWidth: "18rem" }}>
//         <img
//         //   src={props.img}
//           src={placeItem && placeItem.img}
//           className="card-img-top"
//           alt="..."
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.placeItem.name}</h5>
//           <div className="container w-100">
//           <select className="m-2 h-100 rounded">
//                {Array.from(Array(6), (e, i) => (
//                <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>               
//                 ))}
//             </select>
//             <select className="m-2 h-100 rounded">
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>
//                   {data}
//                 </option>
//               ))}
//             </select>
//             <div className='d-inline h-100 fs-5' >
//                  Total Price
//              </div>
//              <hr>
//              </hr>
//              <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useRef, useState, useEffect } from 'react';
// import { useDispatchCart, useCart, useDispatch } from './ContextReducer';
// export default function Card(props) {
//     console.log('props.img:', props.img); // Add this line to check the image URL
//     let dispatch = useDispatchCart()
//     let data = useCart();
//     const priceRef = useRef();
//     const options = props.options || [];
//     const priceOptions = options.length > 0 ? Object.keys(options[0]) : [];
//     const [qty,setQty]=useState(1);
//     const [size,setSize]=useState("")

//     const handleAddToCart = async () => {
//         if (props.placeItem) {
//           const selectedOption = options.find(option => option[priceRef.current.value] !== undefined);
      
//           if (selectedOption) {
//             const selectedPrice = parseInt(selectedOption[priceRef.current.value]);
//             const finalPrice = qty * selectedPrice;
      
//             await dispatch({
//               type: "ADD",
//               id: props.placeItem._id,
//               name: props.placeItem.name,
//               price: finalPrice,
//               qty: qty,
//               size: size
//             });
//             console.log(data);
//           }
//         }
//       };
//       let finalPrice = qty*parseInt(options[size]);
//       useEffect(()=>{
//         setSize(priceRef.current.value)
//       },[])
  
//     return (
//       <div className="col-md-4 mb-4">
//         <div className="card" style={{ maxWidth: "18rem" }}>
//           <img
//             src={props.img}
//             className="card-img-top"
//             alt="..."
//             style={{ height: "200px", objectFit: "cover" }}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{props.placeItem.name}</h5>
//             <div className="container w-100">
//               <select className="m-2 h-100 rounded" onChange={(e)=>setQty(e.target.value)}>
//                 {Array.from(Array(6), (e, i) => (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 ))}
//               </select>
//               <select className="m-2 h-100 rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
//                 {priceOptions.map((data) => (
//                   <option key={data} value={data}>
//                     {data}
//                   </option>
//                 ))}
//               </select>
//               <div className="d-inline h-100 fs-5">
//                 ₹{finalPrice}/-
//               </div>
//               <hr />
//               <button
//                 className={`btn btn-success justify-center ms-2`}
//                 onClick={handleAddToCart}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }


// import React, { useRef, useState, useEffect } from 'react';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//   let dispatch = useDispatchCart();
//   let data = useCart();
//   const priceRef = useRef();
//   const options = props.options || [];
//   const priceOptions = options.length > 0 ? Object.keys(options[0]) : [];
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");

//   const handleAddToCart = async () => {
//     if (props.placeItem) {
//       const selectedOption = options.find(option => option[size] !== undefined);

//       if (selectedOption) {
//         const selectedPrice = parseInt(selectedOption[size]);
//         const finalPrice = qty * selectedPrice;

//         await dispatch({
//           type: "ADD",
//           id: props.placeItem._id,
//           name: props.placeItem.name,
//           price: finalPrice,
//           qty: qty,
//           size: size
//         });
//         console.log(data);
//       }
//     }
//   };

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, []);

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card" style={{ maxWidth: "18rem" }}>
//         <img
//           src={props.img}
//           className="card-img-top"
//           alt="..."
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.placeItem.name}</h5>
//           <div className="container w-100">
//             <select className="m-2 h-100 rounded" onChange={(e) => setQty(e.target.value)}>
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <select className="m-2 h-100 rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>
//                   {data}
//                 </option>
//               ))}
//             </select>
//             <div className="d-inline h-100 fs-5">
//               ₹{qty * parseInt(options[size]) || 0}/-
//             </div>
//             <hr />
//             <button
//               className={`btn btn-success justify-center ms-2`}
//               onClick={handleAddToCart}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useRef, useState, useEffect } from 'react';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//   let dispatch = useDispatchCart();
//   let data = useCart();
//   const priceRef = useRef();
//   const options = props.options || [];
//   const priceOptions = options.length > 0 ? Object.keys(options[0]) : [];
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");

// const handleAddToCart = async () => {
//     if (props.placeItem) {
//       const selectedOption = options.find(option => option[size] !== undefined);
  
//       if (selectedOption) {
//         const selectedPrice = parseInt(selectedOption[size]);
//         const finalPrice = qty * selectedPrice;
  
//         await dispatch({
//           type: "ADD",
//           id: props.placeItem._id,
//           name: props.placeItem.name,
//           price: finalPrice,
//           qty: qty,
//           size: size
//         });
//         console.log(data);
//       }
//     }
//   };

//   useEffect(() => {
//     if (priceRef.current) {
//       setSize(priceRef.current.value);
//     }
//   }, [priceRef.current]);

//   useEffect(() => {
//     if (priceRef.current) {
//       // Update size when the user selects a different option
//       setSize(priceRef.current.value);
//     }
//   }, [priceRef.current]);

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card" style={{ maxWidth: "18rem" }}>
//         <img
//           src={props.img}
//           className="card-img-top"
//           alt="..."
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.placeItem.name}</h5>
//           <div className="container w-100">
//             <select className="m-2 h-100 rounded" onChange={(e) => setQty(e.target.value)}>
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <select className="m-2 h-100 rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>
//                   {data}
//                 </option>
//               ))}
//             </select>
//             <div className="d-inline h-100 fs-5">
//               ₹{qty * parseInt(options[size]) || 0}/-
//             </div>
//             <hr />
//             <button
//               className={`btn btn-success justify-center ms-2`}
//               onClick={handleAddToCart}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useRef, useState, useEffect } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  const options = props.options || [];
  const priceOptions = options.length > 0 ? Object.keys(options[0]) : [];
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);

  const handleAddToCart = async () => {
let place = []
for(const item of data){
  if(item.id == props.placeItem._id){
    place = item;
    break;
  }
}
if(place != []){
  if(place.size === size){
    await dispatch({type:"UPDATE", id: props.placeItem._id, price:finalPrice, qty:qty})
    return
  }
  else if(place.size != size){
    await dispatch({type:"ADD", id:props.placeItem._id, name:props.placeItem.name, price: finalPrice, qty: qty, size:size})
    return 
  }
  return 
}
  await dispatch({type:"ADD", id:props.placeItem._id, name:props.placeItem.name, price: finalPrice, qty: qty, size:size})



    if (props.placeItem) {
      const selectedOption = options.find(option => option[size] !== undefined);

      if (selectedOption) {
        const selectedPrice = parseInt(selectedOption[size]);
        const calculatedPrice = qty * selectedPrice;

        await dispatch({
          type: "ADD",
          id: props.placeItem._id,
          name: props.placeItem.name,
          price: calculatedPrice,
          qty: qty,
          size: size
        });
        console.log(data);
      }
    }
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  useEffect(() => {
    const selectedOption = options.find(option => option[size] !== undefined);
    if (selectedOption) {
      const selectedPrice = parseInt(selectedOption[size]);
      const calculatedPrice = qty * selectedPrice;
      setFinalPrice(calculatedPrice);
    }
  }, [size, qty, options]);

  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ maxWidth: "18rem" }}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.placeItem.name}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 rounded" onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5">
              ₹{finalPrice || 0}/-
            </div>
            <hr />
            <button
              className={`btn btn-success justify-center ms-2`}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
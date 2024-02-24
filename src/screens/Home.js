// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// export default function Home() {
//     return (
//         <div>
//             <div>
//                 <Navbar />
//             </div>


//             <div>
//                 <div className="card mt-3 " style={{"width": "18rem", "maxHeight":"360px"}}>
//                     <img src="..." className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Card title</h5>
//                         <p className="card-text">This is some importnat text</p>
//                         <div className='container w-100' >
//                         <select className='m-2 h-100 w-100 '  >
//                             {Array.from(Array(6),(e,i)=>{
//                               return(
//                                 <option key={i+1} value={i+1}></option>
//                               )
//                             })}
//                         </select>
//                         </div>
                        

//                     </div>
//                 </div>
//             </div>
//             <div><Footer /></div>
//         </div>
//     )
// }






// import React, {useEffect, useState} from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';
// export default function Home() {

//     const [placeCat, setPlaceCat] = useState([]);
//     const [placeItem, setPlaceItem] = useState([]);

//     const loadData = async () => {
//         try {
//             let response = await fetch("http://localhost:5000/api/placeData", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
    
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
    
//             const data = await response.json();
//             console.log('Full Response:', data); // Log the entire response for inspection
    
//             if (Array.isArray(data) && data.length >= 2) {
//                 setPlaceCat(data[0]);
//                 setPlaceItem(data[1]);
//             } else {
//                 console.error('Invalid data structure:', data);
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
// }

// import React, {useEffect, useState} from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';

// export default function Home() {
//     const [placeCat, setPlaceCat] = useState([]);
//     const [placeItem, setPlaceItem] = useState([]);

//     const loadData = async () => {
//         try {
//             let response = await fetch("http://localhost:5000/api/placeData", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
    
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
    
//             response = await response.json();
//             console.log("Server Response:", response);
    
//             setPlaceItem(response[0]);
//             setPlaceCat(response[1]);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//     useEffect(()=>{
//         loadData()
//     },[]);

//     useEffect(() => {
//         console.log("placeCat:", placeCat);
//     }, [placeCat]);

//     return (
//         <div>
//             <Navbar />
//             <div>
//                 <div>
//                     <Carousel />
//                 </div>
//                 <div className='container'>



//                 {
//             Array.isArray(placeCat) && placeCat.length > 0
//             ? placeCat.map((placeCategoryData) => {
//                 return (
//                     <div key={placeCategoryData
//                         ._id}>{placeCategoryData
//                             .categoryName}</div>
//             )
             
//                 })
//             : <div>No categories available</div>
//             }
//           {/* {
//             Array.isArray(placeCat) && placeCat.length > 0
//             ? placeCat.map((data) => {
//                 return (
//                     <div key={data._id}>{data.categoryName}</div>
//             )
             
//                 })
//             : <div>No categories available</div>
//             } */}
//                     <Card />
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
//         }



// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';

// export default function Home() {
//   const [placeCat, setPlaceCat] = useState([]);

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/placeData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       response = await response.json();
//       console.log("Server Response:", response);

//       setPlaceCat(response.data); // Assuming that categories are in 'data' property
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("placeCat:", placeCat.map(placeData => placeData.categoryName));
//   }, [placeCat]);

// //   useEffect(() => {
// //     console.log("placeCat:", placeCat);
// //   }, [placeCat]);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div>
//           <Carousel />
//         </div>
//         <div className='container'>
//           {Array.isArray(placeCat) && placeCat.length > 0 ? (
//             placeCat.map((placeCategoryData) => (
//               <div key={placeCategoryData._id}>{placeCategoryData.categoryName}</div>
//             ))
//           ) : (
//             <div>No categories available</div>
//           )}
//           <Card />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';

// export default function Home() {
//   const [placeCat, setPlaceCat] = useState([]);
//   const [categoryName, setCategoryName] = useState('');

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/placeData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       response = await response.json();
//       console.log("Server Response:", response);

//       setPlaceCat(response.data);
//       if (response.placeCategoryData.length > 0) {
//         setCategoryName(response.placeCategoryData[0].categoryName);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("placeCat:", placeCat);
//     console.log("categoryName:", categoryName);
//   }, [placeCat, categoryName]);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div>
//           <Carousel />
//         </div>
//         <div className='container'>
//           {categoryName && <div>{categoryName}</div>}
//           {Array.isArray(placeCat) && placeCat.length > 0 ? (
//             placeCat.map((placeCategoryData) => (
//               <div key={placeCategoryData._id}>{placeCategoryData.categoryName}</div>
//             ))
//           ) : (
//             <div>No categories available</div>
//           )}
//           <Card />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';

// export default function Home() {
//   const [placeCat, setPlaceCat] = useState([]);
//   const [categoryName, setCategoryName] = useState('');

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/placeData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       response = await response.json();
//       console.log("Server Response:", response);

//       setPlaceCat(response.data);
//       if (response.placeCategoryData.length > 0) {
//         setCategoryName(response.placeCategoryData[0].categoryName);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("placeCat:", placeCat);
//     console.log("categoryName:", categoryName);
//   }, [placeCat, categoryName]);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div>
//           <Carousel />
//         </div>
//         <div className='container'>
//           {categoryName && <div>{categoryName}</div>}
//           {Array.isArray(placeCat) && placeCat.length > 0 ? (
//             placeCat.map((placeCategoryData) => (
//               <div key={placeCategoryData._id}>{placeCategoryData.categoryName}</div>
//             ))
//           ) : (
//             <div>No categories available</div>
//           )}
//           <Card />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';

// export default function Home() {
//   const [placeCat, setPlaceCat] = useState([]);
//   const [categoryName, setCategoryName] = useState('');

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/placeData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       response = await response.json();
//       console.log("Server Response:", response);

//       setPlaceCat(response.data);
//       if (response.placeCategoryData.length > 0) {
//         setCategoryName(response.placeCategoryData[0].categoryName);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("placeCat:", placeCat);
//     console.log("categoryName:", categoryName);
//   }, [placeCat, categoryName]);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div>
//           <Carousel />
//         </div>
//         <div className='container'>
//           {categoryName && <div>{categoryName}</div>}
//           {Array.isArray(placeCat) && placeCat.length > 0 ? (
//             placeCat.map((placeCategoryData) => (
//               <div key={placeCategoryData._id}>{/* Render other placeCat data here if needed */}</div>
//             ))
//           ) : (
//             <div>No categories available</div>
//           )}
//           <Card />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';

// export default function Home() {
//   const [placeCat, setPlaceCat] = useState([]);
//   const [categoryName, setCategoryName] = useState('');

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/placeData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       response = await response.json();
//       console.log("Server Response:", response);

//       setPlaceCat(response.data);
//       if (response.placeCategoryData.length > 0) {
//         setCategoryName(response.placeCategoryData[0].categoryName);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("placeCat:", placeCat);
//     console.log("categoryName:", categoryName);
//   }, [placeCat, categoryName]);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div>
//           <Carousel />
//         </div>
//         <div className='container'>
//           {categoryName && <div>{categoryName}</div>}
//           <Card />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';

// export default function Home() {
//   const [placeCat, setPlaceCat] = useState([]);
//   const [categoryName, setCategoryName] = useState('');

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/placeData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       response = await response.json();
//       console.log("Server Response:", response);

//       setPlaceCat(response.data);
//       if (response.placeCategoryData.length > 0) {
//         setCategoryName(response.placeCategoryData[0].categoryName);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("placeCat:", placeCat);
//     console.log("categoryName:", categoryName);
//   }, [placeCat, categoryName]);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div>
//           <Carousel />
//         </div>
//         <div className='container'>
//           {Array.isArray(placeCat) && placeCat.length > 0 ? (
//             placeCat.map((placeData) => (
//               <Card
//                 key={placeData._id}
//                 placeName={placeData.name}
//                 img={placeData.img}
//                 options={placeData.options}
//               />
//             ))
//           ) : (
//             <div>No categories available</div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';

// export default function Home() {
//   const [placeCat, setPlaceCat] = useState([]);
//   const [categoryName, setCategoryName] = useState('');

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/placeData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       response = await response.json();
//       console.log("Server Response:", response);

//       setPlaceCat(response.data);
//       if (response.placeCategoryData.length > 0) {
//         setCategoryName(response.placeCategoryData[0].categoryName);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("placeCat:", placeCat);
//     console.log("categoryName:", categoryName);
//   }, [placeCat, categoryName]);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div>
//         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
//     <div className="carousel-inner" id='carousel'>
//         <div className='carousel-caption'style={{zIndex:"10"}} >
//         <form className="d-flex">
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success text-white  "  type="submit">Search</button>
//     </form>
//         </div>
//       <div className="carousel-item active">
//         <img src="https://source.unsplash.com/random/900x700/?travel" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//       </div>
//       <div className="carousel-item">
//         <img src="https://source.unsplash.com/random/900x700/?hyderabad" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//       </div>
//       <div className="carousel-item">
//         <img src="https://source.unsplash.com/random/900x700/?kerela" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//       </div>
//     </div>
//     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Previous</span>
//     </button>
//     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Next</span>
//     </button>
//   </div>
//         </div>
//         <div className='container'>
//           {categoryName && <div>{categoryName}</div>}
//           <div className="row">
//             {Array.isArray(placeCat) && placeCat.map((place) => (
//               <Card
//                 key={place._id}
//                 placeName={place.name}
//                 img={place.img}
//                 options={place.options}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }





// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';

// export default function Home() {
//   const [placeCat, setPlaceCat] = useState([]);
//   const [categoryName, setCategoryName] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/placeData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       response = await response.json();
//       console.log("Server Response:", response);

//       setPlaceCat(response.data);
//       if (response.placeCategoryData.length > 0) {
//         setCategoryName(response.placeCategoryData[0].categoryName);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("placeCat:", placeCat);
//     console.log("categoryName:", categoryName);
//   }, [placeCat, categoryName]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredPlaces = placeCat.filter((place) =>
//     place.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div>
//           <Carousel />
//         </div>
//         <div className='container'>
//           <form className="d-flex mb-3">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search by place name"
//               aria-label="Search"
//               onChange={handleSearch}
//               value={searchQuery}
//             />
//             <button className="btn btn-outline-success text-white" type="submit">
//               Search
//             </button>
//           </form>
//           {categoryName && <div>{categoryName}</div>}
//           <div className="row">
//             {Array.isArray(filteredPlaces) && filteredPlaces.map((place) => (
//               <Card
//                 key={place._id}
//                 placeName={place.name}
//                 img={place.img}
//                 options={place.options}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

export default function Home() {
  const [placeCat, setPlaceCat] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/placeData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      response = await response.json();
      console.log("Server Response:", response);

      setPlaceCat(response.data);
      setFilteredPlaces(response.data); // Initialize filteredPlaces with all places
      if (response.placeCategoryData.length > 0) {
        setCategoryName(response.placeCategoryData[0].categoryName);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log("placeCat:", placeCat);
    console.log("categoryName:", categoryName);
  }, [placeCat, categoryName]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filtered = placeCat.filter(place => place.name.toLowerCase().includes(searchQuery));
    setFilteredPlaces(filtered);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
    <div className="carousel-inner" id='carousel'>
        <div className='carousel-caption'style={{zIndex:"10"}} >

        <form className="d-flex mb-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
            <button className="btn btn-outline-success text-white" type="submit">
              Search
            </button>
          </form>

            
        {/* <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white  "  type="submit">Search</button>
    </form> */}
        </div>
      <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/900x700/?travel" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?hyderabad" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?kerela" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
        </div>
        <div className='container'>
          {/* <form className="d-flex mb-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
            <button className="btn btn-outline-success text-white" type="submit">
              Search
            </button>
          </form> */}
          {categoryName && <div>{categoryName}</div>}
          <div className="row">
            {Array.isArray(filteredPlaces) && filteredPlaces.map((place) => (
            //   <Card placeItem = {filteredPlaces}
            //     key={place._id}
            //     placeName={place.name}
            //     img={place.img}
            //     options={place.options}
            //   />

            <Card placeItem={place} key={place._id} img={place.img} options={place.options} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
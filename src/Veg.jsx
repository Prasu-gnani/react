// import { useDispatch, useSelector } from "react-redux";
// import { Addtocart } from "./store";

// function Veg()
// {
//     let vegitems = useSelector(state => state.products.veg)
//     let dispatch=useDispatch();
//     let finalitems=vegitems.map((item,index)=>(
//         <li key={index}>
//             {item.name}-{item.price}
//             &emsp;<button style={{color:"blue",backgroundColor:"green"}}onClick={()=> dispatch(Addtocart(item))}>Add to cart</button>
//         </li>
//     ))
//     return (
//         <>
//         <h1  style={{color:"green"}}>This is a web page</h1>
//         <h1  style={{color:"green"}}>This page contains all vegetable items</h1>
//         <ol>{finalitems}</ol>
//         </>
//     )
// }
// export default Veg;

import { useDispatch, useSelector } from "react-redux";
import { Addtocart } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Veg() {
    let navigate=useNavigate();
    
    const vegitems = useSelector((state) => state.products.veg);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter items based on search term
    const filteredItems = vegitems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div className="container mt-5">
            <div className="card shadow-white bg-white border-0 rounded-4 p-4">
                <h1 className="text-center text-success fw-bold">🥦 Fresh Vegetables</h1>
                <p className="text-center text-secondary">This page contains all available vegetable items.</p>

                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search vegetables..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="row g-4">
                    {currentItems.map((item, index) => (
                        <div key={index} className="col-md-4 col-sm-6">
                            <div className="card border-0 shadow-sm p-3">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="card-img-top rounded-3"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-success fw-bold">{item.name}</h5>
                                    <p className="text-muted fw-semibold">₹{item.price}</p>
                                    <button 
                                        className="btn btn-success px-4 py-2 fw-bold shadow"
                                        onClick={() => dispatch(Addtocart(item))}
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="d-flex justify-content-center mt-4">
                    <button 
                        className="btn btn-outline-success mx-2"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        ⬅ Previous
                    </button>
                    {
                        Array.from({length:totalPages},(_,index)=>(
                              <button onClick={()=>setCurrentPage(index+1)}>{index+1}</button>
                        ))
                    }
                    <button 
                        className="btn btn-outline-success mx-2"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next ➡
                    </button>
                </div>

                {/* Display Add to Cart Button Separately */}
                <div className="text-center mt-4">
                    <button 
                        className="btn btn-primary px-5 py-3 fw-bold shadow" onClick={()=>navigate("/cart")}>
                    
                        🛒 View Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Veg;
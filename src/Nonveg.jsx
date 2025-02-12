// import { useDispatch, useSelector } from "react-redux";
// import { Addtocart } from "./store";

// function Nonveg()
// {
//     let nonvegitems = useSelector(state => state.products.nonveg)
//     let dispatch=useDispatch();
//     let finalitems=nonvegitems.map((item,index)=>(
//         <li key={index}>
//             {item.name}-{item.price}
//             &emsp;<button style={{color:"blue",backgroundColor:"green"}}onClick={()=> dispatch(Addtocart(item))}>Add to cart</button>
//         </li>
//     ))
//     return (
//         <>
//         <h1  style={{color:"green"}}>This is a web page</h1>
//         <h1  style={{color:"green"}}>This page contains all nonvege items</h1>
//         <ol>{finalitems}</ol>
//         </>
//     )
// }
// export default Nonveg;

import { useDispatch, useSelector } from "react-redux";
import { Addtocart } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
    const nonvegitems = useSelector((state) => state.products.nonveg);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter items based on search term
    const filteredItems = nonvegitems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div className="container mt-5">
            <div className="card shadow-lg bg-white border-0 rounded-4 p-4">
                <h1 className="text-center text-danger fw-bold">🍗 Delicious Non-Veg Items</h1>
                <p className="text-center text-secondary">This page contains all available non-vegetarian items.</p>

                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search non-veg items..."
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
                                    <h5 className="card-title text-danger fw-bold">{item.name}</h5>
                                    <p className="text-muted fw-semibold">₹{item.price}</p>
                                    <button 
                                        className="btn btn-danger px-4 py-2 fw-bold shadow"
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
                        className="btn btn-outline-danger mx-2"
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
                        className="btn btn-outline-danger mx-2"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next ➡
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nonveg;

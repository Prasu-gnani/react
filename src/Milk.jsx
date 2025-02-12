// import { useDispatch, useSelector } from "react-redux";
// import { Addtocart } from "./store";

// function Milk(){
//     let vegitems = useSelector(state => state.products.milk)
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
//         <h1  style={{color:"green"}}>This page contains all milk items</h1>
//         <ol>{finalitems}</ol>
//         </>
//     )
// }
// export default Milk;

import { useDispatch, useSelector } from "react-redux";
import { Addtocart } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
    const milkitems = useSelector((state) => state.products.milk);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter items based on search term
    const filteredItems = milkitems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div className="container mt-5">
            <div className="card shadow-white bg-white p-4">
                <h1 className="text-center text-primary fw-bold">🥛 Fresh Dairy Products</h1>
                <p className="text-center text-secondary">
                    This page contains all available milk and dairy products.
                </p>

                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search dairy products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="row d-flex justify-content-center">
                    {currentItems.map((item, index) => (
                        <div key={index} className="col-md-4 d-flex justify-content-center">
                            <div className="card shadow-sm text-center" style={{ width: "18rem" }}>
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="card-img-top"
                                    style={{ height: "150px", objectFit: "cover" }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-primary fw-bold">{item.name}</h5>
                                    <p className="card-text text-muted">₹{item.price}</p>
                                    <button 
                                        className="btn btn-primary btn-sm shadow"
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
                        className="btn btn-outline-primary mx-2"
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
                        className="btn btn-outline-primary mx-2"
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

export default Milk;
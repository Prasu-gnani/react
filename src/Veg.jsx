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
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

function Veg() {
    let vegitems = useSelector((state) => state.products.veg);
    let dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <div className="card shadow-white  bg-white border-0 rounded-4">
                <h1 className="text-center text-success fw-bold">🥦 Fresh Vegetables</h1>
                <p className="text-center text-secondary color-green">
                    This page contains all available vegetable items.
                </p>

                <div className="row g-4">
                    {vegitems.map((item, index) => (
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
            </div>
            </div>
       
    );
}

export default Veg;

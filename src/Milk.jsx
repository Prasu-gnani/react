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
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

function Milk() {
    let milkitems = useSelector((state) => state.products.milk);
    let dispatch = useDispatch();

    let finalitems = milkitems.map((item, index) => (
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
    ));

    return (
        <div className="container mt-5">
            <div className="card shadow-white  bg-white">
                <h1 className="text-center text-primary fw-bold">🥛 Fresh Dairy Products</h1>
                <p className="text-center text-secondary">
                    This page contains all available milk and dairy products.
                </p>
                <div className="row d-flex justify-content-center">{finalitems}</div>
            </div>
        </div>
    );
}

export default Milk;

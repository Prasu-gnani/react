// import { useSelector } from "react-redux";



// function Orders() {
//     let orders = useSelector(state => state.handlepurchasedetails);
//    let allOrders=orders.map((item, index) => (
//         <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
//             <p style={{ color: "orange" }}>Date of Order: {item.date}</p>
//             <p style={{ color: "red" }}>Final Price: {item.finalprice}</p>
//             <p>Order Items:</p>
//             <ul>
//                 {item.items.map((product) => 
//                     <li>
//                         {product.name} - ${product.price} × {product.quantity}
//                     </li>
//                 )}
//             </ul>
//         </div>
//     )) ;

//     return (
//         <>
//             {orders.length > 0 ? 
//                 <div>
//                     <h1>Your Purchase History</h1>
//                     {allOrders}
//                 </div>
//              : 
//                 <p>Orders are empty</p>
//             }
//         </>
//     );
// }

// export default Orders;


import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function Orders() {
    let orders = useSelector(state => state.handlepurchasedetails);

    let allOrders = orders.map((item, index) => (
        <div key={index} className="col-md-6">
            <div className="card border-primary shadow-sm p-3 mb-4 bg-light">
                <div className="card-body">
                    <h5 className="card-title text-warning">
                        📅 Date of Order: <span className="fw-bold">{item.date}</span>
                    </h5>
                    <h6 className="text-danger fw-bold">
                        💰 Final Price: ₹{item.finalprice.toFixed(2)}
                    </h6>
                    <hr />
                    <p className="fw-bold fs-5">🛍️ Order Items:</p>
                    <ul className="list-group">
                        {item.items.map((product, i) => (
                            <li 
                                key={i} 
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <span className="fw-semibold">{product.name}</span>
                                <span className="text-muted">₹{product.price} × {product.quantity}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container mt-5">
            {orders.length > 0 ? (
                <div>
                    <h1 className="text-primary fw-bold text-center mb-4">
                        🛒 Your Purchase History
                    </h1>
                    <div className="row justify-content-center">{allOrders}</div>
                </div>
            ) : (
                <p className="text-center text-danger fw-bold mt-5 fs-4">
                    📭 No orders found!
                </p>
            )}
        </div>
    );
}

export default Orders;

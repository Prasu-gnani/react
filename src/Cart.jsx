// import { useDispatch, useSelector } from "react-redux";
// import { clearcart, completepurchase, decrement, increment, remove } from "./store";
// import { useState } from "react";

// function Cart()
// {
//     let dispatch=useDispatch()
//     let cartitems=useSelector(state=>state.cart)
//     let finalitems=cartitems.map((item,index)=>(
//         <li key={index}>
//             {item.name}-{item.price}
//         &emsp;<button style={{color:"orange",backgroundColor:"pink"}}onClick={()=>dispatch(increment(item))}>+</button>
//         &emsp;<button style={{color:"pink",backgroundColor:"blue"}}onClick={()=>dispatch(decrement(item))}>-</button>
//         quantity:{item.quantity}
//         &emsp;<button style={{color:"blue",backgroundColor:"pink"}}onClick={()=>dispatch(remove(item))}>remove</button>
//         </li>

//     ));



//     let handlepurchase=()=>{
//     let purchasedate=new Date().toLocaleDateString();
//     let purchasedetails={items:[...cartitems],finalprice:totalprice,date:purchasedate};
//     dispatch(completepurchase(purchasedetails));
//     dispatch(clearcart());
//     }


    
//     let[showdiscount,setShowdiscount]=useState(false);
//     let[cuponcode,setcuponcode]=useState('');
//     let[showcuponcode,setShowcuponcode]=useState(false);
//     let[cuponcodediscountper,setCuponcodediscountper]=useState(0);
//     let handlingcuponper=()=>{
//         switch (cuponcode.toUpperCase()) {
//             case 'RATAN10':setCuponcodediscountper(10);
//                            setShowcuponcode(true);
//                 break;
//             case 'RATAN20':setCuponcodediscountper(20);
//                            setShowcuponcode(true);
//                 break;
//             case 'RATAN30':setCuponcodediscountper(30);
//                              setShowcuponcode(true);
//                 break;
//             case 'RATAN40':setCuponcodediscountper(40);
//                              setShowcuponcode(true);
//                 break;
        
//             default:alert('invalid cupon code');
//                 setCuponcodediscountper(0);
//                 setShowcuponcode(false);
//         }

//     };
//     let totalprice=cartitems.reduce((sum,item)=>sum+item.quantity*item.price,0);
//     const [discountpercentage,setdiscountpercentage]=useState(0);
//     let discountamount=totalprice*discountpercentage/100;
//     let cupondiscountamount=totalprice*cuponcodediscountper/100;
//     let finalamount=totalprice-discountamount;
//     return (
//         <>
//         {
//             cartitems.length >0?
//             <div>
//                 <ol>{finalitems}</ol>
//                 <p>your totalprice:{totalprice.toFixed(2)}</p>
//                 {
//                     showdiscount&&
//                     <div>
//                   <p style={{color:"blue",fontFamily:"monospace"}}>your discount applied...{discountpercentage}</p>
//                   <p style={{color:"green",fontFamily:"-moz-initial"}}>your discount amount...{discountamount.toFixed(2)}</p>
//                   </div>
//                 }
                
//                 <p>net amount to pay:{finalamount.toFixed(2)}</p>
//                 <button style={{color:"blue",backgroundColor:"green"}}onClick={()=>{setdiscountpercentage(10),setShowdiscount(true)}}>Apply10%Discount</button>&emsp;
//                 <button style={{color:"blue",backgroundColor:"green"}}onClick={()=>{setdiscountpercentage(20),setShowdiscount(true)}}>Apply20%Discount</button>&emsp;
//                 <button style={{color:"blue",backgroundColor:"green"}}onClick={()=>{setdiscountpercentage(30),setShowdiscount(true)}}>Apply30%Discount</button>&emsp;
//                 <button style={{color:"blue",backgroundColor:"green"}}onClick={()=>{setdiscountpercentage(10),setShowdiscount(true)}}>Apply10%Discount</button> 
//                 <input type="text" value={cuponcode} onChange={(e)=>setcuponcode(e.target.value)} placeholder="enter cupon apply"/>
//                     <button onClick={()=>{handlingcuponper()}}>Apply cupon</button>
//                     {
//                         showcuponcode &&
                    
//                     <div>
//                         <p>your cupon code applied:{cuponcode}</p>
//                     <p>your cupon code discount:{cupondiscountamount}</p>
//                     </div>
                    
//                     }
//                     <button onClick={()=>handlepurchase()}>completepurchase</button>
//                     </div>
//         :
//         <p>your cart is empty</p>
//         }
//         </>
//     )
// }
// export default Cart;


// 

import { useDispatch, useSelector } from "react-redux";
import { clearcart, completepurchase, decrement, increment, remove } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

function Cart() {
    let dispatch = useDispatch();
    let cartitems = useSelector(state => state.cart);

    let totalprice = cartitems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const [discountpercentage, setdiscountpercentage] = useState(0);
    let discountamount = (totalprice * discountpercentage) / 100;
    let finalamount = totalprice - discountamount;

    const [showdiscount, setShowdiscount] = useState(false);
    const [cuponcode, setcuponcode] = useState('');
    const [showcuponcode, setShowcuponcode] = useState(false);
    const [cuponcodediscountper, setCuponcodediscountper] = useState(0);
    let cupondiscountamount = (totalprice * cuponcodediscountper) / 100;

    let handlingcuponper = () => {
        switch (cuponcode.toUpperCase()) {
            case 'RATAN10': setCuponcodediscountper(10); setShowcuponcode(true); break;
            case 'RATAN20': setCuponcodediscountper(20); setShowcuponcode(true); break;
            case 'RATAN30': setCuponcodediscountper(30); setShowcuponcode(true); break;
            case 'RATAN40': setCuponcodediscountper(40); setShowcuponcode(true); break;
            default: alert('Invalid coupon code'); setCuponcodediscountper(0); setShowcuponcode(false);
        }
    };

    let handlepurchase = () => {
        let purchasedate = new Date().toLocaleDateString();
        let purchasedetails = { items: [...cartitems], finalprice: totalprice, date: purchasedate };
        dispatch(completepurchase(purchasedetails));
        dispatch(clearcart());
    };

    let finalitems = cartitems.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
            <span className="fw-bold">{item.name}</span>
            <span className="text-muted">₹{item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <div>
                <button className="btn btn-success btn-sm mx-1" onClick={() => dispatch(increment(item))}>+</button>
                <button className="btn btn-warning btn-sm mx-1" onClick={() => dispatch(decrement(item))}>-</button>
                <button className="btn btn-danger btn-sm" onClick={() => dispatch(remove(item))}>Remove</button>
            </div>
        </li>
    ));

    return (
        <div className="container mt-5">
            {cartitems.length > 0 ? (
                <div className="card shadow-lg p-4 bg-light">
                    <h1 className="text-center text-primary fw-bold">🛒 Your Shopping Cart</h1>
                    <ul className="list-group">{finalitems}</ul>

                    <p className="mt-3"><strong>Total Price:</strong> ₹{totalprice.toFixed(2)}</p>
                    
                    {showdiscount && (
                        <div className="alert alert-info">
                            <p>Your discount applied: {discountpercentage}%</p>
                            <p>Your discount amount: ₹{discountamount.toFixed(2)}</p>
                        </div>
                    )}
                    
                    {showcuponcode && (
                        <div className="alert alert-success">
                            <p>Your coupon code applied: {cuponcode}</p>
                            <p>Coupon discount: ₹{cupondiscountamount.toFixed(2)}</p>
                        </div>
                    )}

                    <p><strong>Net Amount to Pay:</strong> ₹{(finalamount - cupondiscountamount).toFixed(2)}</p>

                    <div className="mt-3">
                        <button className="btn btn-outline-primary mx-1" onClick={() => { setdiscountpercentage(10); setShowdiscount(true); }}>Apply 10% Discount</button>
                        <button className="btn btn-outline-primary mx-1" onClick={() => { setdiscountpercentage(20); setShowdiscount(true); }}>Apply 20% Discount</button>
                        <button className="btn btn-outline-primary mx-1" onClick={() => { setdiscountpercentage(30); setShowdiscount(true); }}>Apply 30% Discount</button>
                    </div>

                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="Enter Coupon Code" value={cuponcode} onChange={(e) => setcuponcode(e.target.value)} />
                        <button className="btn btn-info" onClick={() => handlingcuponper()}>Apply Coupon</button>
                    </div>

                    <button className="btn btn-success w-100 mt-3" onClick={() => handlepurchase()}>Complete Purchase</button>
                </div>
            ) : (
                <p className="text-center text-danger fw-bold mt-5">Your cart is empty<br /><img src="cart.jpg" height="500px" width="500px" alt="Empty Cart" /></p>
            )}
        </div>
    );
}

export default Cart;

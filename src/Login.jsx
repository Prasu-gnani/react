// import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "./store";

// function Login(){
//     let username = useRef(null);
//     let password = useRef(null);
//     let dispatch = useDispatch();
//     let navigate = useNavigate();
//     let logincheck = ()=>{
//         if(username.current.value === "prasu" && password.current.value === "prasu@123")
//         {
//             dispatch(login(username.current.value))
//             navigate("/home");
//         }
//         else
//         {
//             alert("your credentials are wrong check one!");
//         }
//     }
//     return(
//         <>
//          <h1>login page....</h1>
//          <label>username:</label>
//          <input type="text" ref={username}></input>
//          <br></br>
//          <label>password</label>
//          <input type="password" ref={password}></input>
//          <br></br>
//          <button type="submit" onClick={logincheck}>login</button>
//         </>
//     )
// }
// export default Login;

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function Login() {
    let username = useRef(null);
    let password = useRef(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let logincheck = () => {
        if (username.current.value === "prasu" && password.current.value === "prasu@123") {
            dispatch(login(username.current.value));
            navigate("/home");
        } else {
            alert("❌ Your credentials are incorrect. Please try again!");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center text-primary fw-bold mb-3">🔑 Login Page</h2>
                <div className="mb-3">
                    <label className="form-label">👤 Username:</label>
                    <input type="text" ref={username} className="form-control" placeholder="Enter username" />
                </div>
                <div className="mb-3">
                    <label className="form-label">🔒 Password:</label>
                    <input type="password" ref={password} className="form-control" placeholder="Enter password" />
                </div>
                <button className="btn btn-success w-100 fw-bold" onClick={logincheck}>Login</button>
            </div>
        </div>
    );
}

export default Login;

//  function Home()
// {
//     return (
//         <>
//         <h1 style={{color:"voilet"}}>This is home page</h1>
//         <h1 style={{color:"voilet"}}>This page contains th all information</h1>
//         </>
//     )
// }
// export default Home;

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate=useNavigate();
    return (
        <div className="container text-center mt-5">
            {/* Hero Section */}
            <div className="card shadow-lg p-5 bg-light rounded">
                <h1 className="text-primary fw-bold display-4"> <img src ="nature.jpg" height="50px" width="50px"></img> Welcome to Nature's basket </h1>
                <p className="lead text-secondary">
                    Discover the best products at unbeatable prices. Your one-stop shop for quality and convenience.
                </p>
        
            </div>

            {/* Featured Products Section */}
            <div className="mt-5">
                <h2 className="fw-bold text-dark"> Natural oragnics</h2>
                <div className="row mt-4">
                    {/* Product 1 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm p-3 rounded">
                            <img src="vegetables.jpg" className="card-img-top rounded" alt="Product 1" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">vegetables</h5>
                                <p className="card-text text-muted">Healthy and fresh vegetables</p>
                                <button className="btn btn-outline-primary btn-sm" onClick={()=>navigate("/veg")}>Explore</button>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm p-3 rounded">
                            <img src="nonveg.jpg" className="card-img-top rounded" alt="Product 2" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Non veg items</h5>
                                <p className="card-text text-muted">Tasty and delicious non veg items</p>
                                <button className="btn btn-outline-primary btn-sm" onClick={()=>navigate("/nonveg")}>Explore</button>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm p-3 rounded">
                            <img src="milkitems.jpg" className="card-img-top rounded" alt="Product 3" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Milk items</h5>
                                <p className="card-text text-muted"> pure milk, creamy yogurt and more,.</p>
                                <button className="btn btn-outline-primary btn-sm" onClick={()=>navigate("/milk")}>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-5 p-4 bg-primary text-white rounded shadow">
                <h3 className="fw-bold">Exclusive Deals Available Now!</h3>
                <p className="fs-5">Shop today and enjoy amazing discounts on your favorite products.</p>
                
            </div>
        </div>
    );
}

export default Home;



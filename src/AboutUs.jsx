// import 'bootstrap/dist/css/bootstrap.min.css';

// function AboutUs() {
//     return (
//         <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
//             <div className="card shadow-lg p-4 border-0 rounded-4 text-center bg-white">
//                 <h1 className="fw-bold text-primary">About Us</h1>
//                 <p className="fs-5 text-secondary mt-3">
//                     This page provides information about our project. We aim to deliver high-quality web solutions with innovation and excellence.
//                 </p>
//                 <button className="btn btn-primary mt-3 px-4 py-2 shadow-sm">Learn More</button>
//             </div>
//         </div>
//     );
// }

// export default AboutUs;

import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
    return (
        <div className="container my-5">
            {/* Hero Section */}
            <div className="text-center mb-5">
                <h1 className="fw-bold text-primary">About Our Store</h1>
                <p className="fs-5 text-muted">
                    Your one-stop shop for high-quality products, unbeatable prices, and exceptional customer service.
                </p>
            </div>

            {/* About Us Content */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img 
                        src="aboutus.jpg" 
                        alt="About Us" 
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold text-dark">Who We Are</h2>
                    <p className="text-muted">
                        At <span className="fw-bold text-primary">Beautiful Store</span>, we pride ourselves on delivering top-notch 
                        products with a seamless shopping experience. From fashion to electronics, 
                        we curate the best for our customers.
                    </p>
                    <button className="btn btn-primary mt-3 px-4 py-2">Shop Now</button>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="bg-light p-5 rounded shadow text-center">
                <h2 className="fw-bold text-dark">Our Mission</h2>
                <p className="fs-5 text-muted">
                    Our mission is to bring you premium quality products at the best prices while 
                    ensuring a delightful shopping experience.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;

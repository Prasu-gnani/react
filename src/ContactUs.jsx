// function ContactUs()
// {
//     return (
//         <>
//         <h1>This is contactus page</h1>
//         <h1>It provides the detailed information from user</h1>
//         </>
//     )
// }
// export default ContactUs;

import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
    return (
        <div className="container my-5">
            {/* Hero Section */}
            <div className="text-center mb-5">
                <h1 className="fw-bold text-primary display-4">Contact Us</h1>
                <p className="fs-5 text-muted">We'd love to hear from you! Reach out with any questions or feedback.</p>
            </div>

            <div className="row justify-content-center">
                {/* Contact Form */}
                <div className="col-lg-6">
                    <div className="card p-4 shadow-lg rounded-4 border-0">
                        <h3 className="fw-bold text-dark text-center mb-3">Send Us a Message</h3>
                        <form>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Your Name</label>
                                <input type="text" className="form-control rounded-pill p-2" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Email Address</label>
                                <input type="email" className="form-control rounded-pill p-2" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Message</label>
                                <textarea className="form-control rounded-4 p-2" rows="4" placeholder="Write your message"></textarea>
                            </div>
                            <button className="btn btn-primary w-100 py-2 rounded-pill shadow-sm">Send Message</button>
                        </form>
                    </div>
                </div>


                    </div>
                </div>
    );
}

export default ContactUs;

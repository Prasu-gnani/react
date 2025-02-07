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

function Home() {
    return (
        <div className="container text-center mt-5">
            <div className="card shadow-lg p-4 bg-light rounded">
                <h1 className="text-primary fw-bold">🏠 Welcome to the Home Page</h1>
                <p className="lead text-secondary">
                    This page contains all the information you need.
                </p>
            </div>
        </div>
    );
}

export default Home;


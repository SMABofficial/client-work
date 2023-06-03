import Navbar from "../components/Navbar";




function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2   ">
                    <Navbar />
                </div>
                <div className="col-lg-8 col-md-7 col-xl-8 col-sm-7 ">
                    <h2 className="mt-5">Website Name</h2>

                </div>
                <div className="col-lg-2 col-md-1 col-xl-2 col-sm-2 "></div>

            </div>
        </div>
    )
}
export default Dashboard;
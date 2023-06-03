import Navbar from "../components/Navbar";




function Dashboard(){
    return(
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-2">
            <Navbar />
            </div>
            <div className="col-lg-8">
                <h2 className="mt-5">Website Name</h2>
                
            </div>
                
            </div>
        </div>
    )
}
export default Dashboard;
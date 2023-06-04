import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import graph from '../Images/trend.png';



function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2   ">
                    <Navbar />
                </div>
                <div className="col-lg-8 col-md-7 col-xl-8 col-sm-7 ">
                    <h2 className="mt-5">Website Name</h2>
                    <table className="table table-hover table-bordered" >
                        <tr className="bg-warning">
                            <th>Pages URL</th>
                            <th>Today Shares</th>
                            <th>Yesterday</th>
                            <th>Las 7 days</th>
                            <th>Total Shares</th>
                            <th>Graphs</th>
                        </tr>
                        <tr>
                            <td><Link to="http://localhost:3000/Dashboard">http://localhost:3000/Dashboard</Link></td>
                            <td>Today Shares</td>
                            <td>Yesterday</td>
                            <td>Las 7 days</td>
                            <td>Total Shares</td>
                            <td><Link to="#"><img src={graph} alt="" className="imggraph" /></Link></td>
                        </tr>
                        <tr>
                            <td>Pages URL</td>
                            <td>Today Shares</td>
                            <td>Yesterday</td>
                            <td>Las 7 days</td>
                            <td>Total Shares</td>
                            <td>Graphs</td>
                        </tr>
                        <tr>
                            <td>Pages URL</td>
                            <td>Today Shares</td>
                            <td>Yesterday</td>
                            <td>Las 7 days</td>
                            <td>Total Shares</td>
                            <td>Graphs</td>
                        </tr>
                    </table>
                    

                </div>
                <div className="col-lg-2 col-md-1 col-xl-2 col-sm-2 "></div>

            </div>
        </div>
    )
}
export default Dashboard;
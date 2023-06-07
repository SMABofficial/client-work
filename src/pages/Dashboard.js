import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import graph from '../Images/trend.png';



function Dashboard(props) {
    let data = props.data


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 ">
                    <Navbar />
                </div>
                <div className="col-lg-9 ">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h5 className="mt-3 mb-3">Search VIA Link</h5>
                                <input className="form-control genrate mb-3 me-3" placeholder="Search any Link" />

                                <button className="btn btn-success  ">Genrate</button>
                            </div>
                            <div className="col-lg-3"></div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                    <table className="table table-hover tdata table-bordered " align="center" >
                        <tr className="bg-warning">
                            <th>Pages URL</th>
                            <th>Today Shares</th>
                            <th>Yesterday</th>
                            <th>Las 7 days</th>
                            <th>Total Shares</th>
                            <th>Graphs</th>
                            <th>Check Graph</th>

                        </tr>
                        {

                            data.map((data) => {
                                return (
                                    <tr>
                                        <td><Link to={data.pageURL}>{data.pageURL}</Link></td>
                                        <td>{data.todayshare}</td>
                                        <td>{data.stats}</td>
                                        <td>{data.yesterday}</td>
                                        <td>{data.todayshare + data.yesterday + data.stats}</td>
                                        <td><Link to={data.graphlink}><img src={graph} alt="" className="imggraph" /></Link></td>
                                        <Link className="btn btn-success ms-4 mt-1 mb-1" to={`/Graph/${data.graphlink}`}>Check Graph</Link>
                                    </tr>
                                )
                            })
                        }



                    </table>


                </div>


            </div>
        </div>
    )
}
export default Dashboard;
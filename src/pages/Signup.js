
import { Link } from "react-router-dom";
import regImg from '../Images/register.jpg'


function Signup(){
    return(
        <div>
            <section className="w3l-workinghny-form">
        
        <div className="workinghny-form-grid">
            <div className="wrapper">
                <div className="logo">
                    <h1><Link className="brand-logo" to="#"><span>Working</span> Sign Up</Link></h1>
                      
                        
                </div>
                <div className="workinghny-block-grid">
                    <div className="workinghny-left-img align-end">
                        <img src={regImg} className="img-responsive" alt="img" />
                    </div>
                    <div className="form-right-inf">
						
                        <div className="signup-form-content">
                            
                            <form action="#" className="signin-form" method="post">
								<div className="one-frm">

									<label>User Name</label>
									<input type="text" name="Name"  placeholder="Enter Your username" required="" />
								</div>
                                <div className="one-frm">

									<label>Email</label>
									<input type="email" name="Name"  placeholder="Enter Your Email" required="" />
								</div>
								<div className="one-frm">
									<label>Password</label>
									<input type="password" name="Password"  placeholder="Enter Your password" required="" />
								</div>
                                <div className="one-frm">
									<label>Confirm Password</label>
									<input type="password" name="Password"  placeholder="Confirm password" required="" />
								</div>
                                <label className="check-remaind">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    <p className="remember">I am agree With <Link  to="#">term</Link>  and <Link  to="#">Condition</Link>  </p>

                                </label>
                                <button className="btn btn-style mt-3">Sign Up </button>
                                <p className="already">You have an account? <Link to="/">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
       
    </section>
        </div>
    );
}
export default Signup;
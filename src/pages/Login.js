
import logimg from '../Images/2.png'
import { Link } from 'react-router-dom'

function Login(){
    return(
<div>
<section className="w3l-workinghny-form">
        {/* form */}
        <div className="workinghny-form-grid">
            <div className="wrapper">
                <div className="logo">
                    <h1><Link className="brand-logo" to="#"><span>Working</span> Sign In</Link></h1>
                      
                        
                </div>
                <div className="workinghny-block-grid">
                    <div className="workinghny-left-img align-end">
                        <img src={logimg} className="img-responsive" alt="img" />
                    </div>
                    <div className="form-right-inf">
						
                        <div className="login-form-content">
                            <h2>Where to?</h2>
                            <form action="#" className="signin-form" method="post">
								<div className="one-frm">

									<label>User Name</label>
									<input type="text" name="Name"  placeholder="username" required="" />
								</div>
								<div className="one-frm">
									<label>Password</label>
									<input type="password" name="Password"  placeholder="password" required="" />
								</div>
                                <label className="check-remaind">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    <p className="remember">Remember Me</p>

                                </label>
                                <button className="btn btn-style mt-3">Sign In </button>
                                <p className="already">Don't have an account? <Link to="/Signup">Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* form  */}
       
    </section>
</div>
    )
}
export default Login
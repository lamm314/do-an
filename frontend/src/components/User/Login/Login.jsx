import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/apiRequest";
import './Login.scss';


const Login = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const dispatch = useDispatch();
    const handleType = (e, setFunction) => {
        setFunction(e.target.value);
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        const res = await loginUser(user, dispatch, navigate);
        setErr(res);
    }
    useEffect(() => {
        if (user) {
            navigate("/");
        }
        return () => {

        }
    }, [navigate, user]);
    
    return (

        <div className="container">
             <div className="login-container">
             <div className="image-gallery">
             
    <div className="img1"></div>
    <div className="img2"></div>
    <div className="img3"></div>
    <div className="img4"></div>
    <div className="img5"></div>
    <div className="img6"></div>
    <div className="img7"></div>
    <div className="img8"></div>
    <div className="img9"></div>
    <div className="img10"></div>
    <div className="img11"></div>
    <div className="img12"></div>


</div>


        </div>

            <div className="title">
              <div className="n">n</div>
              <div className="h">h</div>
              <div className="aa">ậ</div>
              <div className="p">p</div>
              <div className="dd">đ</div>
              <div className="aw">ă</div>
              <div className="n2">n</div>
              <div className="g">g</div>
            </div>
  

              
            <div className="content-page">
                <div className="wrapbox-heading-account">
                    <div className="header-page clearfix">
                      
                    </div>
                </div>
                <div className="wrapbox-content-account">
                    <div id="customer-login">
                        <div id="login" className="userbox">
                            <form acceptCharset="UTF-8" action="/loginn" id="customer_login" method="post">
                                <input name="form_type" type="hidden" value="customer_login" />
                                <input name="utf8" type="hidden" value="✓" />
                                <div className="clearfix large_form" >
                                    <div className="email"> Email</div>
                                    <label htmlFor="customer_email" className="icon-field"><i className="icon-login icon-envelope "></i> </label>
                                    <input required="" type="email" value={email} name="email" id="customer_email" placeholder="Nhập email đã đăng ký" className="text" onChange={(e) => handleType(e, setEmail)} />
                                </div>
                                <div className="clearfix large_form" >
                                    <label htmlFor="customer_password" className="icon-field" ><i className="icon-login icon-shield" ></i></label>
                                    <div className="mk"> Mật khẩu </div>
                                    <input required="" type="password" value={password} name="password" id="customer_password" placeholder="Mật khẩu" className="text" size="16" onChange={(e) => handleType(e, setPassword)} />
                                    {err && <p className='err-message'>{err}</p>}
                                    <div className="clearfix action_account_custommer">
                                        <div className="action_bottom button dark">
                                            <input className="btn btn-signin" type="submit" value="Đăng nhập" onClick={(e) => handleLogin(e)} />
                                        </div>
                                        <div className="req_pass">
                                            {/* <a href="#">Quên mật khẩu?</a><br></br> */}
                                            hoặc <Link className="signup" to="/register">Đăng ký</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Login;
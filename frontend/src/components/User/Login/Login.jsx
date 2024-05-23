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
               
            </div>
        </div>

               <div
      style={{
        position: "absolute",
        top: "123px",
        left: "92px",
        width: "397px",
        height: "268px",
        textAlign: "left",
        fontSize: "96px",
        color: "red",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "39.66%",
          width: "10.71%",
          top: "45.52%",
          left: "0%",
          fontWeight: "800",
          color: "#cd5b5b",
          display: "inline-block",
        }}
      >
        n
      </div>
      <div
        style={{
          position: "absolute",
          height: "39.66%",
          width: "11.23%",
          top: "45.52%",
          left: "29.9%",
          fontWeight: "800",
          display: "inline-block",
          color:"#E89C31",
        }}
      >
        h
      </div>
      <div
        style={{
          position: "absolute",
          height: "39.66%",
          width: "10.15%",
          top: "45.52%",
          left: "60.58%",
          fontWeight: "800",
          display: "inline-block",
          color:"#E89C31",
        }}
      >
        ậ
      </div>
      <div
        style={{
          position: "absolute",
          height: "39.66%",
          width: "10.71%",
          top: "45.52%",
          left: "90.2%",
          fontWeight: "800",
          color: "#cd5b5b",
          display: "inline-block",
        }}
      >
        p
      </div>
      <div
        style={{
          position: "absolute",
          height: "49.25%",
          width: "21.84%",
          top: "0%",
          left: "0%",
          fontWeight: "800",
          color: "#cd5c5c",
          display: "inline-block",
        }}
      >
        đ
      </div>
      <div
        style={{
          position: "absolute",
          height: "39.66%",
          width: "10.71%",
          top: "0%",
          left: "29.95%",
          fontWeight: "800",
          display: "inline-block",
          color: "#E89C31",
        }}
      >
        ă
      </div>
      <div
        style={{
          position: "absolute",
          height: "39.66%",
          width: "11.23%",
          top: "0%",
          left: "59.9%",
          fontWeight: "800",
          display: "inline-block",
          color: "#E89C31",
        }}
      >
        n
      </div>
      <div
        style={{
          position: "absolute",
          height: "39.66%",
          width: "11.23%",
          top: "0%",
          left: "88.77%",
          fontWeight: "800",
          color: "#cd5b5b",
          display: "inline-block",
        }}
      >
        g
      </div>
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
                                    <label htmlFor="customer_email" className="icon-field"><i className="icon-login icon-envelope "></i> </label>
                                    <input required="" type="email" value={email} name="email" id="customer_email" placeholder="Email" className="text" onChange={(e) => handleType(e, setEmail)} />
                                </div>
                                <div className="clearfix large_form" >
                                    <label htmlFor="customer_password" className="icon-field"><i className="icon-login icon-shield"></i></label>
                                    <input required="" type="password" value={password} name="password" id="customer_password" placeholder="Mật khẩu" className="text" size="16" onChange={(e) => handleType(e, setPassword)} />
                                    {err && <p className='err-message'>{err}</p>}
                                    <div className="clearfix action_account_custommer">
                                        <div className="action_bottom button dark">
                                            <input className="btn btn-signin" type="submit" value="Đăng nhập" onClick={(e) => handleLogin(e)} />
                                        </div>
                                        <div className="req_pass">
                                            {/* <a href="#">Quên mật khẩu?</a><br></br> */}
                                            hoặc <Link to="/register">Đăng ký</Link>
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
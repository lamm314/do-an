import { Link } from "react-router-dom";

import "./UserFooter.scss";

const UserFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="footer__title">Giới thiệu</div>
            <div className="footer__description">
            mộng "rữa" rừng <br />
đến cuối thì thơ văn cũng không cứu được tôi <br />
con mộng - rữa - rừng tan ra <br />
tôi chỉ còn sự im lặng chưa biến mất <br />
con mộng hoài nghi và câm điếc <br />
nhìn tôi và tiếp tục tan ra
            </div>
            <div className="big-logo"></div>
          </div>
          <div className="col-xl-2">
            <div className="footer__title">Liên kết</div>
            <div className="footer__description">
              <Link to="/" className="footer__description">
                Trang chủ
              </Link>
              <p></p>
              <Link to="/products/all" className="footer__description">
                Sản Phẩm
              </Link>
              <p></p>
              <Link to="/products/sale" className="footer__description">
                Đang Giảm Giá
              </Link>
              <p></p>
              <Link to="/tutorial" className="footer__description">
                Hướng Dẫn
              </Link>
              <p></p>
             
              <p></p>
              <Link to="/introduce" className="footer__description">
                Giới Thiệu
              </Link>
              <p></p>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="footer__title">Thông tin liên hệ</div>
            <div className="footer__description">
              <i className="fas fa-map-marker-alt"></i>
              <span>
                {" "}
                Số 1 Đại Cồ Việt, phường Bách Khoa, quận Hai Bà Trưng, thành
                phố Hà Nội, Thủ đô Hà Nội, Việt Nam
              </span>
              <p></p>
              <i className="fas fa-phone-alt"></i>
              <span> 0123 456 789</span>
              <p></p>
              <i className="fas fa-envelope"></i>
              <span> help@ca-hoa.com</span>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="footer__title">Fanpage</div>
            
            <div className="footer__description">
              <p className="name">Con Cá Biết Đi</p>
              <a
                href="https://www.facebook.com/ConCaBietDii"
                target="blank"
                className="fanpage"
              >
                <div className="avatar"></div>
               
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;

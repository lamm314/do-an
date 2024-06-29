import React from 'react';
import './Contact.scss'; // Import SCSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Liên hệ</h2>
      <div className="contact-info">
        <p><strong>Địa chỉ:</strong> Số 30 Ngõ 52 Tô Ngọc Vân, Quảng An, Tây Hồ, Hà Nội</p>
        <p><strong>Email:</strong> <a href="mailto:help@ca-hoa.com">help@ca-hoa.com</a></p>
        <p><strong>Số điện thoại:</strong> <a href="tel:+84388344203">0388 344 203</a></p>
      </div>
      
      <p className="contact-text">
        Hãy liên hệ với chúng tôi để được hỗ trợ và tư vấn chi tiết về sản phẩm nghệ thuật tranh tại Cá Họa. Chúng tôi luôn sẵn sàng đáp ứng mọi yêu cầu của quý khách hàng.
      </p>
      <div>
      <a href="https://maps.app.goo.gl/HtGKY7gMikrWHuz96" className="contact-button">Xem Map</a>
     
      </div>
    </div>
  );
};

export default Contact;
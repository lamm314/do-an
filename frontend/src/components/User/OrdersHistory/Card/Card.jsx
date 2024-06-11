import Item from "./Item/Item";
import './card.scss';
import { VNPAY_PAYMENT_METHOD } from '../../../../constants';

const Card = (props) => {
    return (

        <div className="card-black">
            <div className="card-body">
                <h6 className="h6-card">ID đơn hàng: {props.order.order_id}</h6>
                <div className="card-black">
                    <div className="card-body row">
                        <div className="col"><h4 className="h4-title">Thành tiền:</h4> <p className="p-value">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.order.total)}</p> </div>
                        <div className="col"><h4 className="h4-title">Số điện thoại:</h4><p className="p-value"> {props.order.phone_number}</p> </div>
                        <div className="col"><h4 className="h4-title">Địa chỉ:</h4><p className="p-value">{props.order.address}</p> </div>
                        <div className="col"><h4 className="h4-title">Phương thức thanh toán:</h4><p className="p-value">{props.order.payment_method.toUpperCase()}</p></div>
                        {
                            props.order.send && props.order.success ?
                                <div className="col"><h4 className="h4-title">Trạng thái:</h4><p className="p-value">Thành công</p></div>
                                :
                                props.order.send ?
                                    <div className="col"><h4 className="h4-title">Trạng thái:</h4><p className="p-value">Đang giao</p></div>
                                    :
                                    <div className="col"><h4 className="h4-title">Trạng thái:</h4><p className="p-value">Xác nhận đơn hàng</p></div>
                        }
                    </div>
                </div>
                <div className="track">
                    <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Xác nhận đơn hàng</span> </div>
                    {/* <div className="step active"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text">Lấy hàng</span> </div> */}
                    {
                        (props.order.payment_method === VNPAY_PAYMENT_METHOD && props.order.paid === 1)
                        ? <div className="step active"> <span className="icon"> <i className="fa fa-usd"></i> </span> <span className="text">Đã thanh toán VNPAY</span> </div>
                        : (props.order.payment_method === VNPAY_PAYMENT_METHOD && props.order.paid === 0)
                            ? <div className="step"> <span className="icon"> <i className="fa fa-usd"></i> </span> <span className="text">Đã thanh toán VNPAY</span> </div>
                            : null
                    }
                    {props.order.send ?
                        <div className="step active"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text">Đang giao</span> </div>
                        :
                        <div className="step "> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text">Đang giao</span> </div>

                    }
                    {
                        props.order.success ?
                            <div className="step active"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Đã Nhận</span> </div>
                            :
                            <div className="step "> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Đã Nhận</span> </div>
                    }
                </div>
                <ul className="row">
                    {
                        props.order.listProducts.map((product, index) => {
                            return <Item key={index} product={product} />
                        })
                    }
                </ul>

            </div>
        </div>
    );
}

export default Card;
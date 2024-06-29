import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { createAxios } from "../../../../createInstance";
import { deleteOrder, getAllOrders, getAllProductsFromAPI, orderStatusUpdate } from "../../../../redux/apiRequest";
import Item from "../../../User/OrdersHistory/Card/Item/Item";
import './Order.scss'
import { VNPAY_PAYMENT_METHOD } from '../../../../constants';

const Order = (props) => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const axiosJWT = createAxios(user, dispatch);
    const [send, setSend] = useState(props.order.send);
    const [success, setSuccess] = useState(props.order.success);
    const [isOpen, setIsOpen] = useState(false);
    const handleUpdateSend = async () => {
        console.log("handleUpdateSend", !send, success);
        setSend(!send);
        await orderStatusUpdate(props.order.order_id, !send, success, dispatch, user.token, axiosJWT);
        const res = await getAllOrders(dispatch, user.token, axiosJWT);
    }
    const handleUpdateSuccess = async () => {
        console.log("handleUpdateSuccess", send, !success);
        setSuccess(!success);
        if (!success) {
            await orderStatusUpdate(props.order.order_id, 1, !success, dispatch, user.token, axiosJWT);
        }
        else {
            await orderStatusUpdate(props.order.order_id, send, !success, dispatch, user.token, axiosJWT);
        }
        const res = await getAllOrders(dispatch, user.token, axiosJWT);
    }
    const handleCancelOrder = async () => {
        setIsOpen(!isOpen);
        await deleteOrder(props.order.order_id, dispatch, user.token, axiosJWT);
        const res = await getAllOrders(dispatch, user.token, axiosJWT);
        props.setRefresh(!props.refresh);
        toast.success('Hủy đơn hàng thành công!');
    }
    return (
        
        <div className="card card-order">
            <div className="card-body">
                <div className="admin-black">
                <div className="card-body row">
                  
                    <div className="col" style={{color:"white"}} > <h6 className="h6-orders-admin">ID đơn hàng: </h6>{props.order.order_id} </div>
                    <div className="col" style={{color:"white"}}>   <h6 className="h6-orders-admin">ID khách: </h6>{props.order.user_id}</div>
                    <div className="col" style={{color:"white"}} >   <h6 className="h6-orders-admin">Họ và tên: </h6>{props.order.user_name}</div>
                  
                </div>
                <div className="card">
                    <div className="card-body row">
                        <div className="col" ><h4 className="h4-title-admin">Email:</h4> <p className="p-value-admin">{props.order.email}</p> </div>
                        <div className="col"><h4 className="h4-title-admin">Số điện thoại:</h4><p className="p-value-admin"> {props.order.phone_number}</p> </div>
                        <div className="col"><h4 className="h4-title-admin">Địa chỉ:</h4><p className="p-value-admin">{props.order.address}</p> </div>
                        {/* <div className="col"><h4 className="h4-title">Trạng thái:</h4><p className="p-value">Đang lấy hàng</p></div> */}
                        <div className="col"><h4 className="h4-title-admin">Thành tiền:</h4> <p className="p-value-admin">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.order.total)}</p> </div>
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
                        <div className="step active"> <span className="icon" onClick={() => handleUpdateSend()}> <i className="fa fa-truck"></i> </span> <span className="text">Đang giao</span> </div>
                        :
                        <div className="step "> <span className="icon" onClick={() => handleUpdateSend()}> <i className="fa fa-truck"></i> </span> <span className="text">Đang giao</span> </div>

                    }
                   
                    {
                        props.order.success ?
                            <div className="step active"> <span className="icon" onClick={() => handleUpdateSuccess()}> <i className="fa fa-box"></i> </span> <span className="text">Đã Nhận</span> </div>
                            :
                            <div className="step "> <span className="icon" onClick={() => handleUpdateSuccess()}> <i className="fa fa-box"></i> </span> <span className="text">Đã Nhận</span> </div>
                    }
                </div>

                <ul className="row">
                    {
                        props.order.listProducts.map((product, index) => {
                            return <Item key={index} product={product} />
                        })
                    }
                </ul>
                <div className="card-body row">
                    <div className="col" ><textarea className="order-note" rows="8" cols="50" value={props.order.note} placeholder="Ghi chú" readOnly></textarea></div>
                    <div className="col"><button href="#" className="delete-order-admin" onClick={() => setIsOpen(!isOpen)}>  Hủy đơn hàng</button></div>
                </div>
            </div>
            </div>
            <Modal isOpen={isOpen} style={{ fontSize: "1.6rem" }} centered toggle={() => setIsOpen(!isOpen)}>
                <div className="modal-header">
                    Cảnh báo
                </div>
                <ModalBody>
                    Sau khi thực hiện thao tác này sẽ không thể hoàn tác. Bạn vẫn muốn thực hiện ?

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => handleCancelOrder()}
                        style={{ fontSize: "1.4rem" }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ fontSize: "1.4rem" }}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>

    );
}

export default Order;
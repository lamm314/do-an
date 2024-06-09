import { Link } from "react-router-dom";

const Item = (props) => {
    const sizeText = ["60x80", "120x160", "180x240", "240x480"];
    return (
        <li className="col-md-4">
            <figure className="itemside mb-3">
                <Link to={`/product-details/${props.product.product_id}`} className="aside"><img src={`/images/${props.product.product_avatar}`} className="img-sm border" alt="" /></Link>

                <figcaption className="info align-self-center">
                    <Link to={`/product-details/${props.product.product_id}`} className="item-title">{props.product.product_name}</Link> <span style={{color:"white"}}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.product.price * (1 - props.product.discount / 100))}</span>
                   <div> <p style={{color:"white"}}>Size: {sizeText[props.product.size]} </p>
                    </div>
                    
                    <span className="p-value" style={{color:"white"}}>Số lượng: {props.product.quantity}</span>
                </figcaption>
            </figure>
        </li>
    );
}

export default Item;
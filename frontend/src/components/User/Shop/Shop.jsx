import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsFromAPI } from "../../../redux/apiRequest";

import "./style.css";
const Shop = () => {
  const products = useSelector((state) => state.product.products.allProducts);
  const dispatch = useDispatch();
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function callAPI() {
      await getAllProductsFromAPI(dispatch);
    }
    callAPI();
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      setDisplayedProducts(products.slice(0, 4));
      setCurrentIndex(4); // Set the next starting index
    }
  }, [products]);

  const loadMoreProducts = () => {
    let nextIndex = currentIndex + 4;
    let nextProducts;

    if (nextIndex >= products.length) {
      // If not enough products, start over from the beginning
      nextProducts = products.slice(0, 4);
      nextIndex = 4;
    } else {
      nextProducts = products.slice(currentIndex, nextIndex);
    }

    setDisplayedProducts(nextProducts);
    setCurrentIndex(nextIndex);
  };


  return (
      <div className="container-center-horizontal">
        <div className="u355u95cua-hang screen " data-id="1:39">
          <div className="rectangle-100-d6kwVs" data-id="1:40" />
        
          <div className="frame-ca-hng-d6kwVs" data-id="1:50">
            <img className="x4d461084-51ee-41c6-b2ed-2eeb25668ba4-1-l3EI9M" data-id="1:51"
              src="/img/4d461084-51ee-41c6-b2ed-2eeb25668ba4-1.png" alt="4d461084-51ee-41c6-b2ed-2eeb25668ba4 1" />
              <a href="http://localhost:3000/product-details/110"> <img className="rectangle-109-l3EI9M" data-id="1:52" src="/img/rectangle-109.svg" alt="Rectangle 109" /></a>
           
              <a href="http://localhost:3000/product-details/111"><img className="rectangle-110-l3EI9M" data-id="1:53" src="/img/rectangle-110.svg" alt="Rectangle 110" /></a>
            <a href="http://localhost:3000/product-details/112"> <img className="rectangle-111-l3EI9M" data-id="1:54" src="/img/rectangle-111.svg" alt="Rectangle 111" /></a>
           <a href="http://localhost:3000/product-details/110"><img className="rectangle-112-l3EI9M" data-id="1:55" src="/img/rectangle-112.svg" alt="Rectangle 112" /> </a> 
            <img className="rectangle-113-l3EI9M" data-id="1:56" src="/img/rectangle-113.svg" alt="Rectangle 113" />
            <div className="bi-xun-l3EI9M" data-id="1:57">
              Bùi Xuân
            </div>
            <div className="dng-rng-l3EI9M" data-id="1:58">
              Dừng Rừng
            </div>
            <div className="flex-container-159-l3EI9M" data-id="1:59-container">
              <div className="text0-159-KXLRdi inter-extra-bold-white-36px" data-id="1:59-text0">
                <span className="span0-HDX3G3 inter-extra-bold-white-36px">
                 1.000.000đ
                  <br />
                </span>
              </div>
              <div className="text1-159-KXLRdi inter-extra-bold-white-36px" data-id="1:59-text1">
                <span className="span1-3RJxmV">
                  60x80
                  <br />
                </span>
              </div>
              <div className="text2-159-KXLRdi inter-extra-bold-white-36px" data-id="1:59-text2">
                <span className="span2-hwxt9E">sơn dầu</span>
              </div>
            </div>
            <div className="flex-container-160-l3EI9M" data-id="1:60-container">
              <div className="text0-160-ICY87v inter-extra-bold-white-20px" data-id="1:60-text0">
                <span className="span0-2u1EPm inter-extra-bold-white-20px">
                 1.000.000đ
                  <br />
                </span>
              </div>
              <div className="text1-160-ICY87v inter-extra-bold-white-20px" data-id="1:60-text1">
                <span className="span1-GaJwIH inter-extra-light-white-16px">
                  60x80
                  <br />
                </span>
              </div>
              <div className="text2-160-ICY87v inter-extra-bold-white-20px" data-id="1:60-text2">
                <span className="span2-axt27i inter-extra-light-white-16px">
                  sơn dầu
                </span>
              </div>
            </div>
            <div className="flex-container-161-l3EI9M" data-id="1:61-container">
              <div className="text0-161-bDUUA4 inter-extra-bold-white-20px" data-id="1:61-text0">
                <span className="span0-OBpQyq inter-extra-bold-white-20px">
                 1.000.000đ
                  <br />
                </span>
              </div>
              <div className="text1-161-bDUUA4 inter-extra-bold-white-20px" data-id="1:61-text1">
                <span className="span1-5Mcx3f inter-extra-light-white-16px">
                  60x80
                  <br />
                </span>
              </div>
              <div className="text2-161-bDUUA4 inter-extra-bold-white-20px" data-id="1:61-text2">
                <span className="span2-MQlrDJ inter-extra-light-white-16px">
                  sơn dầu
                </span>
              </div>
              
            </div>
            <div className="flex-container-162-l3EI9M" data-id="1:62-container">
              <div className="text0-162-JubMkX inter-extra-bold-white-20px" data-id="1:62-text0">
                <span className="span0-eshgki inter-extra-bold-white-20px">
                 1.000.000đ
                  <br />
                </span>
              </div>
              <div className="text1-162-JubMkX inter-extra-bold-white-20px" data-id="1:62-text1">
                <span className="span1-g2TkWd inter-extra-light-white-16px">
                  60x80
                  <br />
                </span>
              </div>
              <div className="text2-162-JubMkX inter-extra-bold-white-20px" data-id="1:62-text2">
                <span className="span2-KuXa2Q inter-extra-light-white-16px">
                  sơn dầu
                </span>
              </div>
            </div>
            <div className="gc-l3EI9M" data-id="1:63">
              Gộc
            </div>
            <div className="binh" data-id="1:63">
              Bình
            </div>
            <h1 className="d-n-g-r-n-g-l3EI9M" data-id="1:64">
              D ừ n g R ừ n g
            </h1>
            <div className="flex-container-165-l3EI9M" data-id="1:65-container">
              <div className="text0-165-R6OSrC inter-light-white-24px" data-id="1:65-text0">
                <span className="span0-9he2D8 inter-light-white-24px">
                  mỗi lần quay lưng đều chấp nhận mình chỉ là chiếc lá
                  <br />
                </span>
              </div>
              <div className="text1-165-R6OSrC inter-light-white-24px" data-id="1:65-text1">
                <span className="span1-xnRz25 inter-light-white-24px">
                  tự nhiên rơi trong những buổi chiều..
                </span>
              </div>
            </div>
            <div className="component-8-l3EI9M" data-id="1:66">
            {displayedProducts.map((product, index) => {
          let className = "";
          let className_ = "";
          switch (index) {
            case 0:
              className = "group-87-kdyFEV";
              className_ = "mt-kdyFEV";
              break;
            case 1:
              className = "group-88-kdyFEV";
              className_ = "hp-kdyFEV";
              break;
            case 2:
              className = "group-89-kdyFEV";
              className_ = "ch-tr-kdyFEV";
              break;
            case 3:
              className = "group-90-kdyFEV";
              className_ = "gh-kdyFEV";
              console.log(product)
              break;
            default:
              break;
          }
          return (
              <div key={index}  className={className} data-id="I1:66;182:302">
                <a href={`/product-details/${product.product_id}`}>

               <img className="rectangle-114-vVxDMX rectangle-114" data-id="I1:66;182:296" src={`/images/${product.image_array[0]}`} 

alt="Rectangle 114" />
</a>
                <div className="x200000 inter-bold-white-24px" data-id="I1:66;182:301">

                <span className="product-price">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price - product.price * product.discount / 100)}</span>
                    {
                     product.discount !== 0 &&
                    <del className="Pro-real-shop">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(product.price))}</del>
                    }
                </div>
                
                <div className=" inter-extra-bold-fire-bush-32px" data-id="I1:66;186:408">
                {product.product_name}
              </div>
            </div>
             
          );
        })}
          
                
           
            
             
           
              <img className="vector-kdyFEV" data-id="I1:66;186:427" src="/img/vector.svg" alt="Vector"  onClick={loadMoreProducts} />
            </div>
          </div>
        </div>
      </div>
  );
};


export default Shop;
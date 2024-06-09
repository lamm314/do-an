import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsFromAPI } from "../../../redux/apiRequest";
import "./UserHome.scss";
import "react-slideshow-image/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const UserHome = () => {

  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
  };

  useEffect(() => {
    async function callAPI() {
      await getAllProductsFromAPI(dispatch);
      //await getCart(dispatch, user.token, axiosJWT);
    }
    callAPI();
  }, []);
  
  
  
  return (
    <>
  
  <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="u354u95trang-chu"
      />
      <div className="container-center-horizontal" >
        <div className="u354u95trang-chu screen " data-id="1:74">
          <div className="rectangle-100-vX2YPW" data-id="1:75" />
         

          
          <div className="frame-trang-ch-vX2YPW" data-id="1:85">
            <div className="group-82-QqIeGd group-82" data-id="1:86">
              <div className="group-84-G064yM" data-id="1:87">
                <div className="dng-HjxkjZ dng" data-id="1:88">
                  DÒNG
                </div>
                <div className="group-67-HjxkjZ" data-id="1:89">
                  <div
                    className="dng-yCcBdY dng inter-extra-bold-thunderbird-32px"
                    data-id="1:90"
                  >
                    dòng
                  </div>
                  <div
                    className="dng-fTgGLn dng inter-extra-bold-thunderbird-32px"
                    data-id="1:91"
                  >
                    dòng
                  </div>
                  <div
                    className="dng-QN9yE4 dng inter-extra-bold-thunderbird-32px"
                    data-id="1:92"
                  >
                    dòng
                  </div>
                  <div
                    className="dng-rtW4Wk dng inter-extra-bold-thunderbird-32px"
                    data-id="1:93"
                  >
                    dòng
                  </div>
                </div>
              </div>
              <div className="group-68-G064yM" data-id="1:94">
                <div
                  className="dng-vnGPb1 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:95"
                >
                  dòng
                </div>
                <div
                  className="dng-sGSlZn dng inter-extra-bold-thunderbird-32px"
                  data-id="1:96"
                >
                  dòng
                </div>
                <div
                  className="dng-Hnnjb3 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:97"
                >
                  dòng
                </div>
                <div
                  className="dng-xBoxqv dng inter-extra-bold-thunderbird-32px"
                  data-id="1:98"
                >
                  dòng
                </div>
                <div
                  className="dng-IzOnU6 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:99"
                >
                  dòng
                </div>
                <div
                  className="dng-HVOTRx dng inter-extra-bold-thunderbird-32px"
                  data-id="1:100"
                >
                  dòng
                </div>
              </div>
              <div className="group-70-G064yM" data-id="1:101">
                <div
                  className="dng-B1hGax dng inter-extra-bold-thunderbird-32px"
                  data-id="1:102"
                >
                  dòng
                </div>
                <div
                  className="dng-0EhBgq dng inter-extra-bold-thunderbird-32px"
                  data-id="1:103"
                >
                  dòng
                </div>
                <div
                  className="dng-PYUvqR dng inter-extra-bold-thunderbird-32px"
                  data-id="1:104"
                >
                  dòng
                </div>
                <div
                  className="dng-6xgsfP dng inter-extra-bold-thunderbird-32px"
                  data-id="1:105"
                >
                  dòng
                </div>
                <div
                  className="dng-fF2i7Y dng inter-extra-bold-thunderbird-32px"
                  data-id="1:106"
                >
                  dòng
                </div>
                <div
                  className="dng-d4JXyq dng inter-extra-bold-thunderbird-32px"
                  data-id="1:107"
                >
                  dòng
                </div>
              </div>
              <div className="group-82-G064yM group-82" data-id="1:108">
                <div
                  className="dng-aiHyLL dng inter-extra-bold-thunderbird-32px"
                  data-id="1:109"
                >
                  dòng
                </div>
                <div
                  className="dng-Y8ATTb dng inter-extra-bold-thunderbird-32px"
                  data-id="1:110"
                >
                  dòng
                </div>
                <div
                  className="dng-bnOSQr dng inter-extra-bold-thunderbird-32px"
                  data-id="1:111"
                >
                  dòng
                </div>
                <div
                  className="dng-4QB3iW dng inter-extra-bold-thunderbird-32px"
                  data-id="1:112"
                >
                  dòng
                </div>
                <div
                  className="dng-pJ4LTZ dng inter-extra-bold-thunderbird-32px"
                  data-id="1:113"
                >
                  dòng
                </div>
                <div
                  className="dng-iAjxnc dng inter-extra-bold-thunderbird-32px"
                  data-id="1:114"
                >
                  dòng
                </div>
              </div>
              <div className="group-83-G064yM" data-id="1:115">
                <div
                  className="dng-cd5z3r dng inter-extra-bold-thunderbird-32px"
                  data-id="1:116"
                >
                  dòng
                </div>
                <div
                  className="dng-mEexpT dng inter-extra-bold-thunderbird-32px"
                  data-id="1:117"
                >
                  dòng
                </div>
                <div
                  className="dng-EjRKe8 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:118"
                >
                  dòng
                </div>
                <div
                  className="dng-x163hh dng inter-extra-bold-thunderbird-32px"
                  data-id="1:119"
                >
                  dòng
                </div>
                <div
                  className="dng-xGTMt0 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:120"
                >
                  dòng
                </div>
                <div
                  className="dng-W4xUxI dng inter-extra-bold-thunderbird-32px"
                  data-id="1:121"
                >
                  dòng
                </div>
              </div>
              <div className="group-69-G064yM" data-id="1:122">
                <div
                  className="dng-WoTygp dng inter-extra-bold-thunderbird-32px"
                  data-id="1:123"
                >
                  dòng
                </div>
                <div
                  className="dng-wGPxx6 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:124"
                >
                  dòng
                </div>
                <div
                  className="dng-av0goo dng inter-extra-bold-thunderbird-32px"
                  data-id="1:125"
                >
                  dòng
                </div>
                <div
                  className="dng-B3YStY dng inter-extra-bold-thunderbird-32px"
                  data-id="1:126"
                >
                  dòng
                </div>
                <div
                  className="dng-1Gqfuf dng inter-extra-bold-thunderbird-32px"
                  data-id="1:127"
                >
                  dòng
                </div>
                <div
                  className="dng-TwSzhk dng inter-extra-bold-thunderbird-32px"
                  data-id="1:128"
                >
                  dòng
                </div>
              </div>
              <div className="group-71-G064yM" data-id="1:129">
                <div
                  className="dng-35fIgH dng inter-extra-bold-thunderbird-32px"
                  data-id="1:130"
                >
                  dòng
                </div>
                <div
                  className="dng-PKOtnD dng inter-extra-bold-thunderbird-32px"
                  data-id="1:131"
                >
                  dòng
                </div>
                <div
                  className="dng-O0DxJN dng inter-extra-bold-thunderbird-32px"
                  data-id="1:132"
                >
                  dòng
                </div>
                <div
                  className="dng-BgWgKa dng inter-extra-bold-thunderbird-32px"
                  data-id="1:133"
                >
                  dòng
                </div>
                <div
                  className="dng-Rl4K9A dng inter-extra-bold-thunderbird-32px"
                  data-id="1:134"
                >
                  dòng
                </div>
                <div
                  className="dng-ULiFil dng inter-extra-bold-thunderbird-32px"
                  data-id="1:135"
                >
                  dòng
                </div>
              </div>
              <div className="group-72-G064yM" data-id="1:136">
                <div
                  className="dng-aORPla dng inter-extra-bold-thunderbird-32px"
                  data-id="1:137"
                >
                  dòng
                </div>
                <div
                  className="dng-S5iwx6 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:138"
                >
                  dòng
                </div>
                <div
                  className="dng-WUe1R3 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:139"
                >
                  dòng
                </div>
                <div
                  className="dng-nQwCxr dng inter-extra-bold-thunderbird-32px"
                  data-id="1:140"
                >
                  dòng
                </div>
                <div
                  className="dng-g5PLIX dng inter-extra-bold-thunderbird-32px"
                  data-id="1:141"
                >
                  dòng
                </div>
                <div
                  className="dng-LtQexo dng inter-extra-bold-thunderbird-32px"
                  data-id="1:142"
                >
                  dòng
                </div>
              </div>
              <div className="group-73-G064yM" data-id="1:143">
                <div
                  className="dng-3VqjSe dng inter-extra-bold-thunderbird-32px"
                  data-id="1:144"
                >
                  dòng
                </div>
                <div
                  className="dng-NAsIEG dng inter-extra-bold-thunderbird-32px"
                  data-id="1:145"
                >
                  dòng
                </div>
                <div
                  className="dng-aEXsQS dng inter-extra-bold-thunderbird-32px"
                  data-id="1:146"
                >
                  dòng
                </div>
                <div
                  className="dng-uZBSHf dng inter-extra-bold-thunderbird-32px"
                  data-id="1:147"
                >
                  dòng
                </div>
                <div
                  className="dng-K2NYxo dng inter-extra-bold-thunderbird-32px"
                  data-id="1:148"
                >
                  dòng
                </div>
                <div
                  className="dng-ioHLA4 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:149"
                >
                  dòng
                </div>
              </div>
              <div className="group-74-G064yM" data-id="1:150">
                <div
                  className="dng-5Ea8vv dng inter-extra-bold-thunderbird-32px"
                  data-id="1:151"
                >
                  dòng
                </div>
                <div
                  className="dng-Yax2MU dng inter-extra-bold-thunderbird-32px"
                  data-id="1:152"
                >
                  dòng
                </div>
                <div
                  className="dng-a2SJLM dng inter-extra-bold-thunderbird-32px"
                  data-id="1:153"
                >
                  dòng
                </div>
                <div
                  className="dng-RwHQXz dng inter-extra-bold-thunderbird-32px"
                  data-id="1:154"
                >
                  dòng
                </div>
                <div
                  className="dng-Fwx5m5 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:155"
                >
                  dòng
                </div>
                <div
                  className="dng-dsnGpV dng inter-extra-bold-thunderbird-32px"
                  data-id="1:156"
                >
                  dòng
                </div>
              </div>
              <div className="group-75-G064yM" data-id="1:157">
                <div
                  className="dng-bJaS7n dng inter-extra-bold-thunderbird-32px"
                  data-id="1:158"
                >
                  dòng
                </div>
                <div
                  className="dng-8IxTtU dng inter-extra-bold-thunderbird-32px"
                  data-id="1:159"
                >
                  dòng
                </div>
                <div
                  className="dng-ZcKp1l dng inter-extra-bold-thunderbird-32px"
                  data-id="1:160"
                >
                  dòng
                </div>
                <div
                  className="dng-BgFZ4V dng inter-extra-bold-thunderbird-32px"
                  data-id="1:161"
                >
                  dòng
                </div>
                <div
                  className="dng-WBExF6 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:162"
                >
                  dòng
                </div>
                <div
                  className="dng-Pk3siN dng inter-extra-bold-thunderbird-32px"
                  data-id="1:163"
                >
                  dòng
                </div>
              </div>
              <div className="group-76-G064yM" data-id="1:164">
                <div
                  className="dng-SqR3lw dng inter-extra-bold-thunderbird-32px"
                  data-id="1:165"
                >
                  dòng
                </div>
                <div
                  className="dng-x54SWx dng inter-extra-bold-thunderbird-32px"
                  data-id="1:166"
                >
                  dòng
                </div>
                <div
                  className="dng-sqvCmL dng inter-extra-bold-thunderbird-32px"
                  data-id="1:167"
                >
                  dòng
                </div>
                <div
                  className="dng-KQ7vUE dng inter-extra-bold-thunderbird-32px"
                  data-id="1:168"
                >
                  dòng
                </div>
                <div
                  className="dng-xw9J4G dng inter-extra-bold-thunderbird-32px"
                  data-id="1:169"
                >
                  dòng
                </div>
                <div
                  className="dng-JG87JE dng inter-extra-bold-thunderbird-32px"
                  data-id="1:170"
                >
                  dòng
                </div>
              </div>
              <div className="group-77-G064yM" data-id="1:171">
                <div
                  className="dng-8ZtDn7 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:172"
                >
                  dòng
                </div>
                <div
                  className="dng-LLxrLS dng inter-extra-bold-thunderbird-32px"
                  data-id="1:173"
                >
                  dòng
                </div>
                <div
                  className="dng-812U6z dng inter-extra-bold-thunderbird-32px"
                  data-id="1:174"
                >
                  dòng
                </div>
                <div
                  className="dng-aq8WYV dng inter-extra-bold-thunderbird-32px"
                  data-id="1:175"
                >
                  dòng
                </div>
                <div
                  className="dng-lwHFK2 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:176"
                >
                  dòng
                </div>
                <div
                  className="dng-6VDyZn dng inter-extra-bold-thunderbird-32px"
                  data-id="1:177"
                >
                  dòng
                </div>
              </div>
              <div className="group-79-G064yM" data-id="1:178">
                <div
                  className="dng-xUD57z dng inter-extra-bold-thunderbird-32px"
                  data-id="1:179"
                >
                  dòng
                </div>
                <div
                  className="dng-o9Oxwp dng inter-extra-bold-thunderbird-32px"
                  data-id="1:180"
                >
                  dòng
                </div>
                <div
                  className="dng-iuUdfq dng inter-extra-bold-thunderbird-32px"
                  data-id="1:181"
                >
                  dòng
                </div>
                <div
                  className="dng-sXZqWx dng inter-extra-bold-thunderbird-32px"
                  data-id="1:182"
                >
                  dòng
                </div>
                <div
                  className="dng-nSsRTf dng inter-extra-bold-thunderbird-32px"
                  data-id="1:183"
                >
                  dòng
                </div>
                <div
                  className="dng-LfsP7Q dng inter-extra-bold-thunderbird-32px"
                  data-id="1:184"
                >
                  dòng
                </div>
              </div>
              <div className="group-80-G064yM" data-id="1:185">
                <div
                  className="dng-a6iIBT dng inter-extra-bold-thunderbird-32px"
                  data-id="1:186"
                >
                  dòng
                </div>
                <div
                  className="dng-tgPFav dng inter-extra-bold-thunderbird-32px"
                  data-id="1:187"
                >
                  dòng
                </div>
                <div
                  className="dng-Rx63Xq dng inter-extra-bold-thunderbird-32px"
                  data-id="1:188"
                >
                  dòng
                </div>
                <div
                  className="dng-Z9Nx9o dng inter-extra-bold-thunderbird-32px"
                  data-id="1:189"
                >
                  dòng
                </div>
                <div
                  className="dng-UExcw8 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:190"
                >
                  dòng
                </div>
                <div
                  className="dng-EMklDp dng inter-extra-bold-thunderbird-32px"
                  data-id="1:191"
                >
                  dòng
                </div>
              </div>
              <div className="group-81-G064yM" data-id="1:192">
                <div
                  className="dng-xlrxo3 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:193"
                >
                  dòng
                </div>
                <div
                  className="dng-Hz7HHR dng inter-extra-bold-thunderbird-32px"
                  data-id="1:194"
                >
                  dòng
                </div>
                <div
                  className="dng-rpyh1P dng inter-extra-bold-thunderbird-32px"
                  data-id="1:195"
                >
                  dòng
                </div>
                <div
                  className="dng-r1QS6M dng inter-extra-bold-thunderbird-32px"
                  data-id="1:196"
                >
                  dòng
                </div>
                <div
                  className="dng-KrldJb dng inter-extra-bold-thunderbird-32px"
                  data-id="1:197"
                >
                  dòng
                </div>
                <div
                  className="dng-hpAxYd dng inter-extra-bold-thunderbird-32px"
                  data-id="1:198"
                >
                  dòng
                </div>
              </div>
              <div className="group-85-G064yM" data-id="1:199">
                <div
                  className="dng-J8KjIM dng inter-extra-bold-thunderbird-32px"
                  data-id="1:200"
                >
                  dòng
                </div>
                <div
                  className="dng-6gtbQ4 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:201"
                >
                  dòng
                </div>
                <div
                  className="dng-HDxnxb dng inter-extra-bold-thunderbird-32px"
                  data-id="1:202"
                >
                  dòng
                </div>
                <div
                  className="dng-3suHdS dng inter-extra-bold-thunderbird-32px"
                  data-id="1:203"
                >
                  dòng
                </div>
                <div
                  className="dng-Byxn8X dng inter-extra-bold-thunderbird-32px"
                  data-id="1:204"
                >
                  dòng
                </div>
                <div
                  className="dng-BDtAJr dng inter-extra-bold-thunderbird-32px"
                  data-id="1:205"
                >
                  dòng
                </div>
              </div>
              <div className="group-86-G064yM" data-id="1:206">
                <div
                  className="dng-u7l7NS dng inter-extra-bold-thunderbird-32px"
                  data-id="1:207"
                >
                  dòng
                </div>
                <div
                  className="dng-F05SOd dng inter-extra-bold-thunderbird-32px"
                  data-id="1:208"
                >
                  dòng
                </div>
                <div
                  className="dng-mHdAYr dng inter-extra-bold-thunderbird-32px"
                  data-id="1:209"
                >
                  dòng
                </div>
                <div
                  className="dng-rHwxRQ dng inter-extra-bold-thunderbird-32px"
                  data-id="1:210"
                >
                  dòng
                </div>
                <div
                  className="dng-06DPWC dng inter-extra-bold-thunderbird-32px"
                  data-id="1:211"
                >
                  dòng
                </div>
                <div
                  className="dng-13Yg8H dng inter-extra-bold-thunderbird-32px"
                  data-id="1:212"
                >
               dòng
                </div>
              </div>
              <div className="group-78-G064yM" data-id="1:213">
                <div
                  className="dng-9FBcgr dng inter-extra-bold-thunderbird-32px"
                  data-id="1:214"
                >
                  dòng
                </div>
                <div
                  className="dng-HmmwyY dng inter-extra-bold-thunderbird-32px"
                  data-id="1:215"
                >
                  dòng
                </div>
                <div
                  className="dng-PidxV7 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:216"
                >
                  dòng
                </div>
                <div
                  className="dng-9xhLgs dng inter-extra-bold-thunderbird-32px"
                  data-id="1:217"
                >
                  dòng
                </div>
                <div
                  className="dng-GKX175 dng inter-extra-bold-thunderbird-32px"
                  data-id="1:218"
                >
                  dòng
                </div>
                <div
                  className="dng-xLwZHv dng inter-extra-bold-thunderbird-32px"
                  data-id="1:219"
                >
                  dòng
                </div>
              </div>
            </div>
            <img
              className="rectangle-104-QqIeGd"
              data-id="1:220"
              src="/img/rectangle-104.png"
              alt="Rectangle 104"
            />



            {currentSlide === 1 && <div className="slide1"> <div className="frame-2-QqIeGd slide1" data-id="1:221">
              <img
                className="rectangle-102-cmUncO"
                data-id="I1:221;104:114"
                src="/img/rectangle-102.png"
                alt="Rectangle 102"
              />
              <img
                className="rectangle-101-cmUncO"
                data-id="I1:221;104:93"
                src="/img/rectangle-101.png"
                alt="Rectangle 101"
              />
              
              <div className="group-64-cmUncO" data-id="I1:221;105:181" style={{ cursor: 'pointer' }} onClick={handleClick}>
              <svg
  width={157}
  height={285}
  viewBox="0 0 157 285"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.90909 63.2195H39V69.1854L22.2102 80.7621V80.9467H39V87.978H9.90909L9.90909 81.9268L26.6705 70.478V70.2365H9.90909V63.2195Z"
    fill="#E89C31"
  />
  <path
    d="M19.4119 9.37145C18.8153 9.53243 18.2898 9.76918 17.8352 10.0817C17.3712 10.3942 16.9782 10.7777 16.6563 11.2322C16.3343 11.6868 16.0928 12.2076 15.9318 12.7947C15.7614 13.3819 15.6761 14.0258 15.6761 14.7266C15.6761 16.1375 16.017 17.3591 16.6989 18.3913C17.3807 19.4141 18.375 20.2048 19.6818 20.7635C20.9792 21.3222 22.5559 21.6016 24.4119 21.6016C26.2775 21.6016 27.8684 21.3317 29.1847 20.7919C30.5009 20.2521 31.5047 19.4709 32.196 18.4482C32.8873 17.4254 33.233 16.1849 33.233 14.7266C33.233 13.4387 33.0246 12.3497 32.608 11.4595C32.1818 10.5599 31.5805 9.87808 30.804 9.41406C30.0275 8.95005 29.1136 8.71804 28.0625 8.71804L28.2188 7.41122L28.2188 14.4851H23.0909L23.0909 1.94247H26.9403C29.5445 1.94247 31.7746 2.49645 33.6307 3.6044C35.4867 4.70289 36.9119 6.21804 37.9062 8.14986C38.9006 10.0722 39.3977 12.2834 39.3977 14.7834C39.3977 17.558 38.7964 19.9964 37.5938 22.0987C36.3911 24.201 34.6771 25.8393 32.4517 27.0135C30.2169 28.1877 27.5653 28.7749 24.4972 28.7749C22.1108 28.7749 19.9943 28.4197 18.1477 27.7095C16.2917 26.9993 14.7197 26.0097 13.4318 24.7408C12.1439 23.4624 11.1686 21.9851 10.5057 20.3089C9.8428 18.6233 9.51136 16.8099 9.51136 14.8686C9.51136 13.183 9.75284 11.6158 10.2358 10.1669C10.7188 8.70857 11.4006 7.42069 12.2813 6.30327C13.1619 5.17637 14.2083 4.26255 15.4205 3.56179C16.6326 2.86103 17.9631 2.42543 19.4119 2.25497V9.37145Z"
    fill="#E89C31"
  />
  <path
    d="M21.4119 253.371C20.8153 253.532 20.2898 253.769 19.8352 254.082C19.3712 254.394 18.9782 254.778 18.6563 255.232C18.3343 255.687 18.0928 256.208 17.9318 256.795C17.7614 257.382 17.6761 258.026 17.6761 258.727C17.6761 260.138 18.017 261.359 18.6989 262.391C19.3807 263.414 20.375 264.205 21.6818 264.763C22.9792 265.322 24.5559 265.602 26.4119 265.602C28.2775 265.602 29.8684 265.332 31.1847 264.792C32.5009 264.252 33.5047 263.471 34.196 262.448C34.8873 261.425 35.233 260.185 35.233 258.727C35.233 257.439 35.0246 256.35 34.608 255.46C34.1818 254.56 33.5805 253.878 32.804 253.414C32.0275 252.95 31.1136 252.718 30.0625 252.718L30.2188 251.411L30.2188 258.485H25.0909L25.0909 245.942H28.9403C31.5445 245.942 33.7746 246.496 35.6307 247.604C37.4867 248.703 38.9119 250.218 39.9062 252.15C40.9006 254.072 41.3977 256.283 41.3977 258.783C41.3977 261.558 40.7964 263.996 39.5938 266.099C38.3911 268.201 36.6771 269.839 34.4517 271.013C32.2169 272.188 29.5653 272.775 26.4972 272.775C24.1108 272.775 21.9943 272.42 20.1477 271.71C18.2917 270.999 16.7197 270.01 15.4318 268.741C14.1439 267.462 13.1686 265.985 12.5057 264.309C11.8428 262.623 11.5114 260.81 11.5114 258.869C11.5114 257.183 11.7528 255.616 12.2358 254.167C12.7188 252.709 13.4006 251.421 14.2813 250.303C15.1619 249.176 16.2083 248.263 17.4205 247.562C18.6326 246.861 19.9631 246.425 21.4119 246.255V253.371Z"
    fill="#E89C31"
  />
  <path
    d="M11.0994 188.366V184.261C13.0597 184.261 14.7453 184.512 16.1562 185.013C17.5672 185.515 18.6515 186.401 19.4091 187.67C20.1572 188.939 20.5313 190.724 20.5313 193.025H17.2074C17.2074 191.529 16.9612 190.459 16.4688 189.815C15.9669 189.161 15.2614 188.759 14.3523 188.607C13.4337 188.446 12.3494 188.366 11.0994 188.366ZM11.9091 198.082V191.065H30.6733C32.8419 191.065 34.7311 191.581 36.3409 192.613C37.9413 193.645 39.1818 195.085 40.0625 196.931C40.9337 198.778 41.3693 200.923 41.3693 203.366C41.3693 205.837 40.9337 207.996 40.0625 209.843C39.1818 211.69 37.9413 213.124 36.3409 214.147C34.7311 215.17 32.8419 215.681 30.6733 215.681H11.9091L11.9091 208.65H30.0625C31.0663 208.65 31.9612 208.432 32.7472 207.996C33.5331 207.551 34.1487 206.931 34.5938 206.136C35.0388 205.34 35.2614 204.417 35.2614 203.366C35.2614 202.315 35.0388 201.396 34.5938 200.61C34.1487 199.815 33.5331 199.194 32.7472 198.749C31.9612 198.304 31.0663 198.082 30.0625 198.082H11.9091Z"
    fill="#E89C31"
  />
  <path
    d="M10.7159 126.553V122.462C13.5473 122.462 15.7491 123.054 17.321 124.237C18.893 125.421 19.679 127.324 19.679 129.947H16.4403C16.4403 128.603 15.9384 127.703 14.9347 127.249C13.9309 126.785 12.5246 126.553 10.7159 126.553ZM26.4545 125.388C29.6553 125.388 32.3684 126.003 34.5938 127.234C36.8191 128.465 38.5095 130.132 39.6648 132.234C40.8201 134.327 41.3977 136.676 41.3977 139.28C41.3977 141.893 40.8153 144.247 39.6506 146.339C38.4858 148.432 36.7955 150.094 34.5795 151.325C32.3542 152.547 29.6458 153.158 26.4545 153.158C23.2538 153.158 20.5407 152.547 18.3153 151.325C16.09 150.094 14.3996 148.432 13.2443 146.339C12.089 144.247 11.5114 141.893 11.5114 139.28C11.5114 136.676 12.089 134.327 13.2443 132.234C14.3996 130.132 16.09 128.465 18.3153 127.234C20.5407 126.003 23.2538 125.388 26.4545 125.388ZM26.4545 132.575C24.5606 132.575 22.9602 132.845 21.6534 133.385C20.3466 133.915 19.357 134.682 18.6847 135.686C18.0123 136.68 17.6761 137.878 17.6761 139.28C17.6761 140.672 18.0123 141.87 18.6847 142.874C19.357 143.877 20.3466 144.649 21.6534 145.189C22.9602 145.719 24.5606 145.984 26.4545 145.984C28.3485 145.984 29.9489 145.719 31.2557 145.189C32.5625 144.649 33.5521 143.877 34.2244 142.874C34.8968 141.87 35.233 140.672 35.233 139.28C35.233 137.878 34.8968 136.68 34.2244 135.686C33.5521 134.682 32.5625 133.915 31.2557 133.385C29.9489 132.845 28.3485 132.575 26.4545 132.575Z"
    fill="#E89C31"
  />
  <path
    d="M80 268.243H66.9091V264.28H69.3125V264.135C68.517 263.862 67.8892 263.402 67.429 262.754C66.9688 262.107 66.7386 261.334 66.7386 260.436C66.7386 259.527 66.9716 258.749 67.4375 258.101C67.9034 257.453 68.5284 257.041 69.3125 256.865V256.729C68.5341 256.485 67.9119 256.007 67.446 255.297C66.9744 254.587 66.7386 253.749 66.7386 252.783C66.7386 251.544 67.1364 250.538 67.9318 249.766C68.7216 248.993 69.8068 248.607 71.1875 248.607H80V252.774H72.142C71.4886 252.774 70.9915 252.942 70.6506 253.277C70.304 253.612 70.1307 254.047 70.1307 254.581C70.1307 255.155 70.3182 255.607 70.6932 255.936C71.0625 256.26 71.5597 256.422 72.1847 256.422H80V260.428H72.0994C71.4915 260.428 71.0114 260.592 70.6591 260.922C70.3068 261.252 70.1307 261.686 70.1307 262.226C70.1307 262.59 70.2187 262.911 70.3949 263.189C70.5653 263.467 70.8097 263.686 71.1278 263.845C71.446 263.999 71.821 264.075 72.2528 264.075H80V268.243ZM80.2216 239.934C80.2216 240.769 80.0824 241.511 79.804 242.158C79.5199 242.8 79.0937 243.309 78.5256 243.684C77.9517 244.053 77.233 244.238 76.3693 244.238C75.642 244.238 75.0284 244.11 74.5284 243.854C74.0284 243.599 73.6222 243.246 73.3097 242.798C72.9972 242.349 72.7614 241.832 72.6023 241.246C72.4375 240.661 72.3267 240.036 72.2699 239.371C72.2017 238.627 72.1307 238.028 72.0568 237.573C71.9773 237.119 71.8665 236.789 71.7244 236.585C71.5767 236.374 71.3693 236.269 71.1023 236.269H71.0597C70.6222 236.269 70.2841 236.42 70.0455 236.721C69.8068 237.022 69.6875 237.428 69.6875 237.94C69.6875 238.491 69.8068 238.934 70.0455 239.269C70.2841 239.604 70.6136 239.817 71.0341 239.908L70.8977 243.752C70.1023 243.638 69.392 243.346 68.767 242.874C68.1364 242.397 67.642 241.744 67.2841 240.914C66.9205 240.079 66.7386 239.076 66.7386 237.906C66.7386 237.07 66.8381 236.3 67.0369 235.596C67.2301 234.891 67.5142 234.278 67.8892 233.755C68.2585 233.232 68.7131 232.829 69.2528 232.545C69.7926 232.255 70.4091 232.11 71.1023 232.11H80V236.031H78.1761V236.133C78.6193 236.366 78.9943 236.664 79.3011 237.028C79.608 237.386 79.8381 237.809 79.9915 238.298C80.1449 238.781 80.2216 239.326 80.2216 239.934ZM77.4943 238.647C77.4943 238.198 77.4034 237.795 77.2216 237.437C77.0398 237.073 76.7898 236.783 76.4716 236.567C76.1477 236.352 75.7727 236.244 75.3466 236.244H74.1023C74.1648 236.363 74.2216 236.508 74.2727 236.678C74.3239 236.843 74.3722 237.025 74.4176 237.224C74.4631 237.423 74.5028 237.627 74.5369 237.837C74.571 238.048 74.6023 238.249 74.6307 238.442C74.6932 238.835 74.7898 239.17 74.9205 239.448C75.0511 239.721 75.2216 239.931 75.4318 240.079C75.6364 240.221 75.8807 240.292 76.1648 240.292C76.5966 240.292 76.9261 240.138 77.1534 239.832C77.3807 239.519 77.4943 239.124 77.4943 238.647ZM62.6989 235.835V233.32C63.5625 233.326 64.2642 233.735 64.804 234.548C65.3438 235.354 65.6136 236.44 65.6136 237.803C65.6136 239.161 65.3438 240.241 64.804 241.042C64.2642 241.837 63.5625 242.232 62.6989 242.227V239.772C63.0284 239.778 63.3324 239.63 63.6108 239.329C63.8892 239.028 64.0284 238.519 64.0284 237.803C64.0284 237.087 63.8892 236.582 63.6108 236.286C63.3324 235.991 63.0284 235.84 62.6989 235.835ZM62.8097 238.894L60.679 237.309V234.607L62.8097 236.789V238.894ZM66.9091 219.773H69.9773V228.031H66.9091V219.773ZM63.7727 226.301V222.133H75.8835C76.1392 222.133 76.3466 222.094 76.5057 222.014C76.6591 221.929 76.7699 221.807 76.8381 221.648C76.9006 221.488 76.9318 221.298 76.9318 221.077C76.9318 220.917 76.9176 220.75 76.8892 220.574C76.8551 220.392 76.8267 220.256 76.804 220.165L79.8125 219.534C79.8693 219.733 79.9403 220.014 80.0256 220.378C80.1108 220.736 80.1648 221.165 80.1875 221.665C80.233 222.642 80.1193 223.48 79.8466 224.179C79.5682 224.872 79.1364 225.403 78.5511 225.773C77.9659 226.136 77.2301 226.312 76.3438 226.301H63.7727ZM80.1875 202.909C80.1875 203.875 79.9375 204.752 79.4375 205.542C78.9375 206.332 78.1875 206.963 77.1875 207.434C76.1875 207.906 74.946 208.142 73.4631 208.142C71.9233 208.142 70.6562 207.897 69.6619 207.409C68.6676 206.92 67.9318 206.281 67.4545 205.491C66.9773 204.696 66.7386 203.84 66.7386 202.926C66.7386 202.238 66.858 201.65 67.0966 201.162C67.3295 200.673 67.6307 200.269 68 199.951C68.3693 199.633 68.7528 199.392 69.1506 199.227V199.142H62.5455V194.974H80V199.099H77.8778V199.227C78.2812 199.403 78.6591 199.653 79.0114 199.977C79.3636 200.301 79.6477 200.707 79.8636 201.196C80.0795 201.679 80.1875 202.25 80.1875 202.909ZM76.9403 201.46C76.9403 200.954 76.7983 200.522 76.5142 200.164C76.2244 199.806 75.8182 199.531 75.2955 199.338C74.7727 199.144 74.1591 199.048 73.4545 199.048C72.7386 199.048 72.1222 199.144 71.6051 199.338C71.0881 199.525 70.6903 199.801 70.4119 200.164C70.1335 200.522 69.9943 200.954 69.9943 201.46C69.9943 201.977 70.1364 202.414 70.4205 202.772C70.7045 203.13 71.1051 203.403 71.6222 203.59C72.1392 203.772 72.75 203.863 73.4545 203.863C74.1591 203.863 74.7727 203.769 75.2955 203.582C75.8182 203.394 76.2244 203.125 76.5142 202.772C76.7983 202.414 76.9403 201.977 76.9403 201.46ZM66.0824 202.457H63.7557V193.619H66.0824V202.457ZM80.2472 183.828C80.2472 185.203 79.9659 186.384 79.4034 187.373C78.8352 188.356 78.0455 189.114 77.0341 189.649C76.017 190.177 74.8381 190.441 73.4972 190.441C72.1506 190.441 70.9716 190.177 69.9602 189.649C68.9432 189.114 68.1534 188.356 67.5909 187.373C67.0227 186.384 66.7386 185.203 66.7386 183.828C66.7386 182.453 67.0227 181.274 67.5909 180.291C68.1534 179.302 68.9432 178.543 69.9602 178.015C70.9716 177.481 72.1506 177.214 73.4972 177.214C74.8381 177.214 76.017 177.481 77.0341 178.015C78.0455 178.543 78.8352 179.302 79.4034 180.291C79.9659 181.274 80.2472 182.453 80.2472 183.828ZM77.1023 183.802C77.1023 183.302 76.9489 182.879 76.642 182.532C76.3352 182.186 75.9091 181.921 75.3636 181.739C74.8182 181.552 74.1875 181.458 73.4716 181.458C72.7443 181.458 72.108 181.552 71.5625 181.739C71.017 181.921 70.5909 182.186 70.2841 182.532C69.9773 182.879 69.8239 183.302 69.8239 183.802C69.8239 184.319 69.9773 184.757 70.2841 185.114C70.5909 185.467 71.017 185.737 71.5625 185.924C72.108 186.106 72.7443 186.197 73.4716 186.197C74.1875 186.197 74.8182 186.106 75.3636 185.924C75.9091 185.737 76.3352 185.467 76.642 185.114C76.9489 184.757 77.1023 184.319 77.1023 183.802ZM63.0909 182.856L65.5881 179.455V182.089L64.3182 183.828L65.5881 185.626V188.259L63.0909 184.85V182.856ZM64.1477 178.543V180.572L62.9545 180.793C62.9375 180.299 62.8778 179.944 62.7756 179.728C62.6676 179.507 62.5256 179.396 62.3494 179.396C62.0937 179.396 61.9233 179.529 61.8381 179.796C61.7528 180.063 61.7102 180.399 61.7102 180.802L60.2614 180.708C60.2614 179.509 60.429 178.595 60.7642 177.964C61.0994 177.328 61.5767 177.009 62.196 177.009C62.5994 177.009 62.9119 177.171 63.1335 177.495C63.3551 177.813 63.5 178.163 63.5682 178.543H64.1477Z"
    fill="#E89C31"
  />
  <path
    d="M143.182 91.3486C143.182 92.5929 143.009 93.6582 142.662 94.5446C142.315 95.431 141.841 96.127 141.239 96.6327C140.636 97.1384 139.955 97.4423 139.193 97.5446L138.972 93.5986C139.239 93.5247 139.472 93.3884 139.67 93.1895C139.869 92.9849 140.023 92.7207 140.131 92.3969C140.239 92.0673 140.293 91.681 140.293 91.2378C140.293 90.5389 140.122 89.9622 139.781 89.5077C139.446 89.0474 138.858 88.8173 138.017 88.8173H135.716V88.9622C136.119 89.127 136.48 89.377 136.798 89.7122C137.116 90.0474 137.366 90.4651 137.548 90.9651C137.73 91.4594 137.821 92.0276 137.821 92.6696C137.821 93.6241 137.599 94.4991 137.156 95.2946C136.707 96.0844 136.014 96.7179 135.077 97.1952C134.134 97.6668 132.92 97.9026 131.438 97.9026C129.909 97.9026 128.651 97.6582 127.662 97.1696C126.668 96.681 125.932 96.0418 125.455 95.252C124.977 94.4565 124.739 93.6014 124.739 92.6866C124.739 91.9991 124.858 91.4111 125.097 90.9224C125.33 90.4281 125.631 90.0219 126 89.7037C126.369 89.3855 126.753 89.144 127.151 88.9793V88.8599H124.909V84.7094H138.051C139.159 84.7094 140.094 84.9878 140.855 85.5446C141.616 86.1014 142.193 86.8798 142.585 87.8798C142.983 88.8798 143.182 90.0361 143.182 91.3486ZM134.787 91.2207C134.787 90.7151 134.653 90.2832 134.386 89.9253C134.119 89.5673 133.736 89.2918 133.236 89.0986C132.736 88.9054 132.136 88.8088 131.438 88.8088C130.727 88.8088 130.116 88.9054 129.605 89.0986C129.088 89.2861 128.69 89.5616 128.412 89.9253C128.134 90.2832 127.994 90.7151 127.994 91.2207C127.994 91.7378 128.136 92.1753 128.42 92.5332C128.705 92.8912 129.105 93.1639 129.622 93.3514C130.134 93.5332 130.739 93.6241 131.438 93.6241C132.136 93.6241 132.736 93.5304 133.236 93.3429C133.736 93.1554 134.119 92.8855 134.386 92.5332C134.653 92.1753 134.787 91.7378 134.787 91.2207ZM124.142 65.1297V62.9223C125.165 62.9223 126.026 63.0785 126.724 63.391C127.418 63.7035 127.94 64.2263 128.293 64.9592C128.645 65.6865 128.821 66.678 128.821 67.9337H127.125C127.125 67.1155 127.014 66.5075 126.793 66.1098C126.571 65.7121 126.239 65.4507 125.795 65.3257C125.352 65.2007 124.801 65.1354 124.142 65.1297ZM132.349 71.1041H124.909V66.9365H138V70.9081H135.562V71.0445C136.364 71.3342 137 71.8285 137.472 72.5274C137.937 73.2263 138.17 74.0643 138.17 75.0416C138.17 75.9393 137.966 76.7263 137.557 77.4024C137.148 78.0729 136.577 78.5956 135.844 78.9706C135.105 79.3456 134.241 79.5359 133.253 79.5416H124.909V75.374H132.435C133.145 75.3683 133.705 75.1837 134.114 74.82C134.523 74.4507 134.727 73.945 134.727 73.303C134.727 72.8882 134.636 72.516 134.455 72.1865C134.267 71.8513 133.997 71.5871 133.645 71.3939C133.287 71.195 132.855 71.0984 132.349 71.1041ZM124.219 47.67V45.4115C125.707 45.4115 126.864 45.7751 127.688 46.5024C128.506 47.2297 128.915 48.3746 128.915 49.9371H127.449C127.449 49.3234 127.321 48.8547 127.065 48.5308C126.81 48.2013 126.44 47.9768 125.957 47.8575C125.474 47.7325 124.895 47.67 124.219 47.67ZM138.247 53.4229C138.247 54.7979 137.966 55.9797 137.403 56.9683C136.835 57.9513 136.045 58.7098 135.034 59.2439C134.017 59.7723 132.838 60.0365 131.497 60.0365C130.151 60.0365 128.972 59.7723 127.96 59.2439C126.943 58.7098 126.153 57.9513 125.591 56.9683C125.023 55.9797 124.739 54.7979 124.739 53.4229C124.739 52.0479 125.023 50.8689 125.591 49.8859C126.153 48.8973 126.943 48.1388 127.96 47.6104C128.972 47.0763 130.151 46.8092 131.497 46.8092C132.838 46.8092 134.017 47.0763 135.034 47.6104C136.045 48.1388 136.835 48.8973 137.403 49.8859C137.966 50.8689 138.247 52.0479 138.247 53.4229ZM135.102 53.3973C135.102 52.8973 134.949 52.474 134.642 52.1274C134.335 51.7808 133.909 51.5166 133.364 51.3348C132.818 51.1473 132.187 51.0536 131.472 51.0536C130.744 51.0536 130.108 51.1473 129.562 51.3348C129.017 51.5166 128.591 51.7808 128.284 52.1274C127.977 52.474 127.824 52.8973 127.824 53.3973C127.824 53.9143 127.977 54.3518 128.284 54.7098C128.591 55.0621 129.017 55.332 129.562 55.5195C130.108 55.7013 130.744 55.7922 131.472 55.7922C132.187 55.7922 132.818 55.7013 133.364 55.5195C133.909 55.332 134.335 55.0621 134.642 54.7098C134.949 54.3518 135.102 53.9143 135.102 53.3973ZM130.534 37.5207H138V41.6883H124.909V37.7253H127.312V37.5804C126.511 37.2906 125.884 36.7963 125.429 36.0974C124.969 35.3986 124.739 34.5662 124.739 33.6003C124.739 32.6798 124.946 31.8815 125.361 31.2054C125.77 30.5236 126.344 29.9952 127.082 29.6202C127.815 29.2395 128.673 29.052 129.656 29.0577H138V33.2253H130.474C129.747 33.2196 129.179 33.4043 128.77 33.7793C128.361 34.1486 128.156 34.6628 128.156 35.3219C128.156 35.7594 128.253 36.1457 128.446 36.481C128.634 36.8105 128.903 37.0662 129.256 37.248C129.608 37.4241 130.034 37.5151 130.534 37.5207ZM143.182 17.9751C143.182 19.2195 143.009 20.2848 142.662 21.1712C142.315 22.0575 141.841 22.7536 141.239 23.2592C140.636 23.7649 139.955 24.0689 139.193 24.1712L138.972 20.2251C139.239 20.1513 139.472 20.0149 139.67 19.8161C139.869 19.6115 140.023 19.3473 140.131 19.0234C140.239 18.6939 140.293 18.3075 140.293 17.8643C140.293 17.1655 140.122 16.5888 139.781 16.1342C139.446 15.674 138.858 15.4439 138.017 15.4439H135.716V15.5888C136.119 15.7536 136.48 16.0036 136.798 16.3388C137.116 16.674 137.366 17.0916 137.548 17.5916C137.73 18.0859 137.821 18.6541 137.821 19.2962C137.821 20.2507 137.599 21.1257 137.156 21.9212C136.707 22.7109 136.014 23.3445 135.077 23.8217C134.134 24.2933 132.92 24.5291 131.438 24.5291C129.909 24.5291 128.651 24.2848 127.662 23.7962C126.668 23.3075 125.932 22.6683 125.455 21.8786C124.977 21.0831 124.739 20.228 124.739 19.3132C124.739 18.6257 124.858 18.0376 125.097 17.549C125.33 17.0547 125.631 16.6484 126 16.3303C126.369 16.0121 126.753 15.7706 127.151 15.6058V15.4865H124.909V11.3359H138.051C139.159 11.3359 140.094 11.6143 140.855 12.1712C141.616 12.728 142.193 13.5064 142.585 14.5064C142.983 15.5064 143.182 16.6626 143.182 17.9751ZM134.787 17.8473C134.787 17.3416 134.653 16.9098 134.386 16.5518C134.119 16.1939 133.736 15.9183 133.236 15.7251C132.736 15.532 132.136 15.4354 131.438 15.4354C130.727 15.4354 130.116 15.532 129.605 15.7251C129.088 15.9126 128.69 16.1882 128.412 16.5518C128.134 16.9098 127.994 17.3416 127.994 17.8473C127.994 18.3643 128.136 18.8018 128.42 19.1598C128.705 19.5178 129.105 19.7905 129.622 19.978C130.134 20.1598 130.739 20.2507 131.438 20.2507C132.136 20.2507 132.736 20.157 133.236 19.9695C133.736 19.782 134.119 19.5121 134.386 19.1598C134.653 18.8018 134.787 18.3643 134.787 17.8473Z"
    fill="#E89C31"
  />
  <path
    d="M91.5455 266.511H109V270.679H91.5455V266.511ZM109.247 255.819C109.247 257.189 108.977 258.37 108.438 259.365C107.892 260.353 107.116 261.115 106.111 261.649C105.099 262.177 103.898 262.442 102.506 262.442C101.153 262.442 99.9716 262.174 98.9602 261.64C97.9432 261.106 97.1534 260.353 96.5909 259.382C96.0227 258.41 95.7386 257.265 95.7386 255.947C95.7386 255.015 95.8835 254.163 96.1733 253.39C96.4631 252.618 96.892 251.95 97.4602 251.388C98.0284 250.825 98.7301 250.388 99.5653 250.075C100.395 249.763 101.347 249.606 102.42 249.606H103.46V260.984H101.04V253.484C100.597 253.49 100.202 253.595 99.8551 253.799C99.5085 254.004 99.2386 254.285 99.0455 254.643C98.8466 254.995 98.7472 255.402 98.7472 255.862C98.7472 256.328 98.8523 256.745 99.0625 257.115C99.267 257.484 99.5483 257.777 99.9062 257.993C100.259 258.209 100.659 258.322 101.108 258.334H103.571C104.105 258.334 104.574 258.228 104.977 258.018C105.375 257.808 105.685 257.51 105.906 257.123C106.128 256.737 106.239 256.277 106.239 255.743C106.239 255.373 106.187 255.038 106.085 254.737C105.983 254.436 105.832 254.177 105.634 253.961C105.435 253.745 105.19 253.584 104.901 253.476L105.011 249.649C105.869 249.808 106.616 250.157 107.253 250.697C107.884 251.231 108.375 251.933 108.727 252.802C109.074 253.672 109.247 254.677 109.247 255.819ZM94.3409 254.328L92.3636 256.024L94.3409 257.711V261.206H94.2301L90.4119 257.515V254.524L94.2301 250.842H94.3409V254.328ZM114.097 256.015C114.097 256.606 113.901 257.112 113.509 257.532C113.116 257.947 112.648 258.155 112.102 258.155C111.557 258.155 111.088 257.944 110.696 257.524C110.304 257.103 110.108 256.601 110.108 256.015C110.108 255.424 110.304 254.922 110.696 254.507C111.088 254.086 111.557 253.876 112.102 253.876C112.648 253.876 113.116 254.086 113.509 254.507C113.901 254.922 114.097 255.424 114.097 256.015ZM124.909 263.29H127.977V271.548H124.909V263.29ZM121.773 269.818V265.651H133.884C134.139 265.651 134.347 265.611 134.506 265.531C134.659 265.446 134.77 265.324 134.838 265.165C134.901 265.006 134.932 264.815 134.932 264.594C134.932 264.435 134.918 264.267 134.889 264.091C134.855 263.909 134.827 263.773 134.804 263.682L137.812 263.051C137.869 263.25 137.94 263.531 138.026 263.895C138.111 264.253 138.165 264.682 138.188 265.182C138.233 266.159 138.119 266.997 137.847 267.696C137.568 268.389 137.136 268.92 136.551 269.29C135.966 269.653 135.23 269.83 134.344 269.818H121.773ZM130.534 254.794H138V258.962H120.545V254.931H127.312V254.786C126.506 254.491 125.875 254.008 125.42 253.337C124.966 252.661 124.739 251.834 124.739 250.857C124.739 249.937 124.943 249.135 125.352 248.454C125.756 247.772 126.327 247.243 127.065 246.868C127.804 246.488 128.668 246.3 129.656 246.306H138V250.473H130.474C129.747 250.468 129.179 250.65 128.77 251.019C128.361 251.388 128.156 251.908 128.156 252.579C128.156 253.016 128.253 253.402 128.446 253.738C128.634 254.067 128.903 254.326 129.256 254.513C129.608 254.695 130.034 254.789 130.534 254.794ZM124.142 227.262V225.054C125.165 225.054 126.026 225.21 126.724 225.523C127.418 225.835 127.94 226.358 128.293 227.091C128.645 227.818 128.821 228.81 128.821 230.066H127.125C127.125 229.247 127.014 228.639 126.793 228.242C126.571 227.844 126.239 227.583 125.795 227.458C125.352 227.333 124.801 227.267 124.142 227.262ZM132.349 233.236H124.909V229.068H138V233.04H135.562V233.176C136.364 233.466 137 233.96 137.472 234.659C137.937 235.358 138.17 236.196 138.17 237.173C138.17 238.071 137.966 238.858 137.557 239.534C137.148 240.205 136.577 240.727 135.844 241.102C135.105 241.477 134.241 241.668 133.253 241.673H124.909V237.506H132.435C133.145 237.5 133.705 237.316 134.114 236.952C134.523 236.583 134.727 236.077 134.727 235.435C134.727 235.02 134.636 234.648 134.455 234.318C134.267 233.983 133.997 233.719 133.645 233.526C133.287 233.327 132.855 233.23 132.349 233.236ZM124.219 210.282V208.023C125.707 208.023 126.864 208.387 127.688 209.114C128.506 209.842 128.915 210.986 128.915 212.549H127.449C127.449 211.935 127.321 211.467 127.065 211.143C126.81 210.813 126.44 210.589 125.957 210.469C125.474 210.344 124.895 210.282 124.219 210.282ZM138.247 216.035C138.247 217.41 137.966 218.592 137.403 219.58C136.835 220.563 136.045 221.322 135.034 221.856C134.017 222.384 132.838 222.648 131.497 222.648C130.151 222.648 128.972 222.384 127.96 221.856C126.943 221.322 126.153 220.563 125.591 219.58C125.023 218.592 124.739 217.41 124.739 216.035C124.739 214.66 125.023 213.481 125.591 212.498C126.153 211.509 126.943 210.751 127.96 210.222C128.972 209.688 130.151 209.421 131.497 209.421C132.838 209.421 134.017 209.688 135.034 210.222C136.045 210.751 136.835 211.509 137.403 212.498C137.966 213.481 138.247 214.66 138.247 216.035ZM135.102 216.009C135.102 215.509 134.949 215.086 134.642 214.739C134.335 214.393 133.909 214.128 133.364 213.947C132.818 213.759 132.187 213.665 131.472 213.665C130.744 213.665 130.108 213.759 129.562 213.947C129.017 214.128 128.591 214.393 128.284 214.739C127.977 215.086 127.824 215.509 127.824 216.009C127.824 216.526 127.977 216.964 128.284 217.322C128.591 217.674 129.017 217.944 129.562 218.131C130.108 218.313 130.744 218.404 131.472 218.404C132.187 218.404 132.818 218.313 133.364 218.131C133.909 217.944 134.335 217.674 134.642 217.322C134.949 216.964 135.102 216.526 135.102 216.009ZM130.534 200.613H138V204.78H124.909V200.817H127.312V200.672C126.511 200.382 125.884 199.888 125.429 199.189C124.969 198.49 124.739 197.658 124.739 196.692C124.739 195.772 124.946 194.973 125.361 194.297C125.77 193.615 126.344 193.087 127.082 192.712C127.815 192.331 128.673 192.144 129.656 192.15H138V196.317H130.474C129.747 196.311 129.179 196.496 128.77 196.871C128.361 197.24 128.156 197.755 128.156 198.414C128.156 198.851 128.253 199.238 128.446 199.573C128.634 199.902 128.903 200.158 129.256 200.34C129.608 200.516 130.034 200.607 130.534 200.613ZM143.182 181.547C143.182 182.791 143.009 183.857 142.662 184.743C142.315 185.629 141.841 186.325 141.239 186.831C140.636 187.337 139.955 187.641 139.193 187.743L138.972 183.797C139.239 183.723 139.472 183.587 139.67 183.388C139.869 183.183 140.023 182.919 140.131 182.595C140.239 182.266 140.293 181.879 140.293 181.436C140.293 180.737 140.122 180.161 139.781 179.706C139.446 179.246 138.858 179.016 138.017 179.016H135.716V179.161C136.119 179.325 136.48 179.575 136.798 179.911C137.116 180.246 137.366 180.663 137.548 181.163C137.73 181.658 137.821 182.226 137.821 182.868C137.821 183.823 137.599 184.698 137.156 185.493C136.707 186.283 136.014 186.916 135.077 187.394C134.134 187.865 132.92 188.101 131.438 188.101C129.909 188.101 128.651 187.857 127.662 187.368C126.668 186.879 125.932 186.24 125.455 185.45C124.977 184.655 124.739 183.8 124.739 182.885C124.739 182.198 124.858 181.61 125.097 181.121C125.33 180.627 125.631 180.22 126 179.902C126.369 179.584 126.753 179.342 127.151 179.178V179.058H124.909V174.908H138.051C139.159 174.908 140.094 175.186 140.855 175.743C141.616 176.3 142.193 177.078 142.585 178.078C142.983 179.078 143.182 180.235 143.182 181.547ZM134.787 181.419C134.787 180.913 134.653 180.482 134.386 180.124C134.119 179.766 133.736 179.49 133.236 179.297C132.736 179.104 132.136 179.007 131.438 179.007C130.727 179.007 130.116 179.104 129.605 179.297C129.088 179.485 128.69 179.76 128.412 180.124C128.134 180.482 127.994 180.913 127.994 181.419C127.994 181.936 128.136 182.374 128.42 182.732C128.705 183.09 129.105 183.362 129.622 183.55C130.134 183.732 130.739 183.823 131.438 183.823C132.136 183.823 132.736 183.729 133.236 183.541C133.736 183.354 134.119 183.084 134.386 182.732C134.653 182.374 134.787 181.936 134.787 181.419Z"
    fill="#E89C31"
  />
</svg>

              </div>
             
            
              <div
                className="flex-container-i1221104111-cmUncO"
                data-id="I1:221;104:111-container"
              >
                <svg
  width={303}
  height={247}
  viewBox="0 0 303 247"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M76.6477 62V15.4545H87.8977V34.1364H106.239V15.4545H117.466V62H106.239V43.2955H87.8977V62H76.6477Z"
    fill="#E89C31"
  />
  <path
    d="M169.216 62H157.125L172.83 15.4545H187.807L203.511 62H191.42L180.489 27.1818H180.125L169.216 62ZM167.602 43.6818H192.875V52.2273H167.602V43.6818ZM176.489 11.0227L181.08 0.772724H190.92L184.057 11.0227H176.489Z"
    fill="#E89C31"
  />
  <path
    d="M280.085 32.3182H268.722C268.57 31.1515 268.259 30.0985 267.79 29.1591C267.32 28.2197 266.699 27.4167 265.926 26.75C265.153 26.0833 264.237 25.5758 263.176 25.2273C262.131 24.8636 260.972 24.6818 259.699 24.6818C257.441 24.6818 255.494 25.2348 253.858 26.3409C252.237 27.447 250.987 29.0455 250.108 31.1364C249.244 33.2273 248.812 35.7576 248.812 38.7273C248.812 41.8182 249.252 44.4091 250.131 46.5C251.025 48.5758 252.275 50.1439 253.881 51.2045C255.502 52.25 257.419 52.7727 259.631 52.7727C260.873 52.7727 262.002 52.6136 263.017 52.2955C264.047 51.9773 264.949 51.5152 265.722 50.9091C266.509 50.2879 267.153 49.5379 267.653 48.6591C268.169 47.7652 268.525 46.7576 268.722 45.6364L280.085 45.7045C279.888 47.7652 279.29 49.7955 278.29 51.7955C277.305 53.7955 275.949 55.6212 274.222 57.2727C272.494 58.9091 270.388 60.2121 267.903 61.1818C265.434 62.1515 262.6 62.6364 259.403 62.6364C255.191 62.6364 251.419 61.7121 248.085 59.8636C244.767 58 242.146 55.2879 240.222 51.7273C238.297 48.1667 237.335 43.8333 237.335 38.7273C237.335 33.6061 238.312 29.2652 240.267 25.7045C242.222 22.1439 244.866 19.4394 248.199 17.5909C251.532 15.7424 255.267 14.8182 259.403 14.8182C262.222 14.8182 264.828 15.2121 267.222 16C269.616 16.7727 271.722 17.9091 273.54 19.4091C275.358 20.8939 276.835 22.7197 277.972 24.8864C279.108 27.053 279.812 29.5303 280.085 32.3182Z"
    fill="#E89C31"
  />
  <path
    d="M6.6875 24.5909V15.4545H46.0284V24.5909H31.9148V62H20.8239V24.5909H6.6875Z"
    fill="#E89C31"
  />
  <path
    d="M23.7273 180H11.3182V170.409H23.2955C25.9015 170.409 28.1061 169.97 29.9091 169.091C31.7273 168.197 33.0985 166.75 34.0227 164.75C34.9621 162.735 35.4318 160.053 35.4318 156.705C35.4318 153.356 34.9621 150.689 34.0227 148.705C33.0833 146.705 31.697 145.265 29.8636 144.386C28.0455 143.492 25.803 143.045 23.1364 143.045H11.1136V133.455H23.7045C28.447 133.455 32.5303 134.386 35.9545 136.25C39.3939 138.098 42.0455 140.765 43.9091 144.25C45.7727 147.72 46.7045 151.871 46.7045 156.705C46.7045 161.553 45.7727 165.72 43.9091 169.205C42.0606 172.689 39.4167 175.364 35.9773 177.227C32.5379 179.076 28.4545 180 23.7273 180ZM17.7727 133.455V180H6.52273V133.455H17.7727ZM0.295455 158.386V152.159H23.8636V158.386H0.295455Z"
    fill="#E89C31"
  />
  <path
    d="M116.705 156.727C116.705 161.848 115.72 166.189 113.75 169.75C111.78 173.311 109.114 176.015 105.75 177.864C102.402 179.712 98.6439 180.636 94.4773 180.636C90.2955 180.636 86.5303 179.705 83.1818 177.841C79.8333 175.977 77.1742 173.273 75.2045 169.727C73.25 166.167 72.2727 161.833 72.2727 156.727C72.2727 151.606 73.25 147.265 75.2045 143.705C77.1742 140.144 79.8333 137.439 83.1818 135.591C86.5303 133.742 90.2955 132.818 94.4773 132.818C98.6439 132.818 102.402 133.742 105.75 135.591C109.114 137.439 111.78 140.144 113.75 143.705C115.72 147.265 116.705 151.606 116.705 156.727ZM105.205 156.727C105.205 153.697 104.773 151.136 103.909 149.045C103.061 146.955 101.833 145.371 100.227 144.295C98.6364 143.22 96.7197 142.682 94.4773 142.682C92.25 142.682 90.3333 143.22 88.7273 144.295C87.1212 145.371 85.8864 146.955 85.0227 149.045C84.1742 151.136 83.75 153.697 83.75 156.727C83.75 159.758 84.1742 162.318 85.0227 164.409C85.8864 166.5 87.1212 168.083 88.7273 169.159C90.3333 170.235 92.25 170.773 94.4773 170.773C96.7197 170.773 98.6364 170.235 100.227 169.159C101.833 168.083 103.061 166.5 103.909 164.409C104.773 162.318 105.205 159.758 105.205 156.727ZM98.4318 128.364H90.3409L89.7045 124.545C91.3106 124.485 92.4545 124.28 93.1364 123.932C93.8182 123.568 94.1515 123.114 94.1364 122.568C94.1515 121.75 93.7424 121.212 92.9091 120.955C92.0758 120.697 91.0152 120.568 89.7273 120.568L89.9773 115.864C94.3409 115.864 97.6591 116.409 99.9318 117.5C102.205 118.591 103.333 120.121 103.318 122.091C103.333 123.409 102.833 124.424 101.818 125.136C100.803 125.833 99.6742 126.273 98.4318 126.455V128.364Z"
    fill="#E89C31"
  />
  <path
    d="M188.506 107.909V110.977H180.247V107.909H188.506ZM181.977 104.773H186.145V116.884C186.145 117.139 186.185 117.347 186.264 117.506C186.349 117.659 186.471 117.77 186.631 117.838C186.79 117.901 186.98 117.932 187.202 117.932C187.361 117.932 187.528 117.918 187.704 117.889C187.886 117.855 188.023 117.827 188.113 117.804L188.744 120.812C188.545 120.869 188.264 120.94 187.9 121.026C187.542 121.111 187.113 121.165 186.613 121.188C185.636 121.233 184.798 121.119 184.099 120.847C183.406 120.568 182.875 120.136 182.506 119.551C182.142 118.966 181.966 118.23 181.977 117.344V104.773ZM197.481 113.534V121H193.313V103.545H197.344V110.312H197.489C197.785 109.506 198.268 108.875 198.938 108.42C199.614 107.966 200.441 107.739 201.418 107.739C202.339 107.739 203.14 107.943 203.822 108.352C204.504 108.756 205.032 109.327 205.407 110.065C205.788 110.804 205.975 111.668 205.969 112.656V121H201.802V113.474C201.808 112.747 201.626 112.179 201.256 111.77C200.887 111.361 200.367 111.156 199.697 111.156C199.259 111.156 198.873 111.253 198.538 111.446C198.208 111.634 197.95 111.903 197.762 112.256C197.58 112.608 197.487 113.034 197.481 113.534ZM214.661 121.222C213.826 121.222 213.085 121.082 212.437 120.804C211.795 120.52 211.286 120.094 210.911 119.526C210.542 118.952 210.357 118.233 210.357 117.369C210.357 116.642 210.485 116.028 210.741 115.528C210.997 115.028 211.349 114.622 211.798 114.31C212.247 113.997 212.764 113.761 213.349 113.602C213.934 113.437 214.559 113.327 215.224 113.27C215.968 113.202 216.568 113.131 217.022 113.057C217.477 112.977 217.806 112.866 218.011 112.724C218.221 112.577 218.326 112.369 218.326 112.102V112.06C218.326 111.622 218.176 111.284 217.874 111.045C217.573 110.807 217.167 110.688 216.656 110.688C216.105 110.688 215.661 110.807 215.326 111.045C214.991 111.284 214.778 111.614 214.687 112.034L210.843 111.898C210.957 111.102 211.249 110.392 211.721 109.767C212.198 109.136 212.852 108.642 213.681 108.284C214.516 107.92 215.519 107.739 216.69 107.739C217.525 107.739 218.295 107.838 218.999 108.037C219.704 108.23 220.318 108.514 220.84 108.889C221.363 109.259 221.766 109.713 222.051 110.253C222.34 110.793 222.485 111.409 222.485 112.102V121H218.565V119.176H218.462C218.23 119.619 217.931 119.994 217.568 120.301C217.21 120.608 216.786 120.838 216.298 120.991C215.815 121.145 215.269 121.222 214.661 121.222ZM215.948 118.494C216.397 118.494 216.801 118.403 217.159 118.222C217.522 118.04 217.812 117.79 218.028 117.472C218.244 117.148 218.352 116.773 218.352 116.347V115.102C218.232 115.165 218.087 115.222 217.917 115.273C217.752 115.324 217.57 115.372 217.372 115.418C217.173 115.463 216.968 115.503 216.758 115.537C216.548 115.571 216.346 115.602 216.153 115.631C215.761 115.693 215.426 115.79 215.147 115.92C214.874 116.051 214.664 116.222 214.516 116.432C214.374 116.636 214.303 116.881 214.303 117.165C214.303 117.597 214.457 117.926 214.764 118.153C215.076 118.381 215.471 118.494 215.948 118.494ZM215.394 106.247L217.116 102.403H220.806L218.232 106.247H215.394ZM233.544 121.247C232.164 121.247 230.979 120.963 229.99 120.395C229.007 119.827 228.252 119.037 227.723 118.026C227.195 117.009 226.931 115.832 226.931 114.497C226.931 113.156 227.195 111.98 227.723 110.969C228.257 109.952 229.016 109.159 229.999 108.591C230.987 108.023 232.166 107.739 233.536 107.739C234.746 107.739 235.8 107.957 236.698 108.395C237.601 108.832 238.306 109.452 238.811 110.253C239.323 111.048 239.593 111.983 239.621 113.057H235.726C235.647 112.386 235.419 111.861 235.044 111.48C234.675 111.099 234.192 110.909 233.595 110.909C233.112 110.909 232.689 111.045 232.326 111.318C231.962 111.585 231.678 111.983 231.473 112.511C231.274 113.034 231.175 113.682 231.175 114.455C231.175 115.227 231.274 115.881 231.473 116.415C231.678 116.943 231.962 117.344 232.326 117.616C232.689 117.884 233.112 118.017 233.595 118.017C233.982 118.017 234.323 117.935 234.618 117.77C234.919 117.605 235.166 117.364 235.36 117.045C235.553 116.722 235.675 116.33 235.726 115.869H239.621C239.581 116.949 239.311 117.892 238.811 118.699C238.317 119.506 237.621 120.134 236.723 120.582C235.831 121.026 234.772 121.247 233.544 121.247ZM256.491 121.188C255.525 121.188 254.648 120.938 253.858 120.438C253.068 119.938 252.437 119.188 251.966 118.188C251.494 117.188 251.258 115.946 251.258 114.463C251.258 112.923 251.503 111.656 251.991 110.662C252.48 109.668 253.119 108.932 253.909 108.455C254.704 107.977 255.56 107.739 256.474 107.739C257.162 107.739 257.75 107.858 258.238 108.097C258.727 108.33 259.131 108.631 259.449 109C259.767 109.369 260.008 109.753 260.173 110.151H260.258V103.545H264.426V121H260.301V118.878H260.173C259.997 119.281 259.747 119.659 259.423 120.011C259.099 120.364 258.693 120.648 258.204 120.864C257.721 121.08 257.15 121.188 256.491 121.188ZM257.94 117.94C258.446 117.94 258.878 117.798 259.236 117.514C259.594 117.224 259.869 116.818 260.062 116.295C260.256 115.773 260.352 115.159 260.352 114.455C260.352 113.739 260.256 113.122 260.062 112.605C259.875 112.088 259.599 111.69 259.236 111.412C258.878 111.134 258.446 110.994 257.94 110.994C257.423 110.994 256.986 111.136 256.628 111.42C256.27 111.705 255.997 112.105 255.81 112.622C255.628 113.139 255.537 113.75 255.537 114.455C255.537 115.159 255.631 115.773 255.818 116.295C256.006 116.818 256.275 117.224 256.628 117.514C256.986 117.798 257.423 117.94 257.94 117.94ZM256.943 107.082V104.756H265.781V107.082H256.943ZM275.572 121.247C274.197 121.247 273.016 120.966 272.027 120.403C271.044 119.835 270.286 119.045 269.751 118.034C269.223 117.017 268.959 115.838 268.959 114.497C268.959 113.151 269.223 111.972 269.751 110.96C270.286 109.943 271.044 109.153 272.027 108.591C273.016 108.023 274.197 107.739 275.572 107.739C276.947 107.739 278.126 108.023 279.109 108.591C280.098 109.153 280.857 109.943 281.385 110.96C281.919 111.972 282.186 113.151 282.186 114.497C282.186 115.838 281.919 117.017 281.385 118.034C280.857 119.045 280.098 119.835 279.109 120.403C278.126 120.966 276.947 121.247 275.572 121.247ZM275.598 118.102C276.098 118.102 276.521 117.949 276.868 117.642C277.214 117.335 277.479 116.909 277.661 116.364C277.848 115.818 277.942 115.187 277.942 114.472C277.942 113.744 277.848 113.108 277.661 112.562C277.479 112.017 277.214 111.591 276.868 111.284C276.521 110.977 276.098 110.824 275.598 110.824C275.081 110.824 274.643 110.977 274.286 111.284C273.933 111.591 273.663 112.017 273.476 112.562C273.294 113.108 273.203 113.744 273.203 114.472C273.203 115.187 273.294 115.818 273.476 116.364C273.663 116.909 273.933 117.335 274.286 117.642C274.643 117.949 275.081 118.102 275.598 118.102ZM277.055 106H274.021L273.783 104.568C274.385 104.545 274.814 104.469 275.07 104.338C275.325 104.202 275.45 104.031 275.445 103.827C275.45 103.52 275.297 103.318 274.984 103.222C274.672 103.125 274.274 103.077 273.791 103.077L273.885 101.312C275.521 101.312 276.766 101.517 277.618 101.926C278.47 102.335 278.893 102.909 278.888 103.648C278.893 104.142 278.706 104.523 278.325 104.79C277.945 105.051 277.521 105.216 277.055 105.284V106Z"
    fill="#E89C31"
  />
  <path
    d="M247.321 173V159.909H251.369V162.295H251.506C251.744 161.432 252.134 160.79 252.673 160.369C253.213 159.943 253.841 159.73 254.557 159.73C254.75 159.73 254.949 159.744 255.153 159.773C255.358 159.795 255.548 159.832 255.724 159.884V163.506C255.526 163.437 255.264 163.384 254.94 163.344C254.622 163.304 254.338 163.284 254.088 163.284C253.594 163.284 253.148 163.395 252.75 163.616C252.358 163.832 252.048 164.136 251.821 164.528C251.599 164.915 251.489 165.369 251.489 165.892V173H247.321ZM271.007 159.219H273.265C273.265 160.707 272.901 161.864 272.174 162.688C271.447 163.506 270.302 163.915 268.739 163.915V162.449C269.353 162.449 269.822 162.321 270.146 162.065C270.475 161.81 270.7 161.44 270.819 160.957C270.944 160.474 271.007 159.895 271.007 159.219ZM265.254 173.247C263.879 173.247 262.697 172.966 261.708 172.403C260.725 171.835 259.967 171.045 259.433 170.034C258.904 169.017 258.64 167.838 258.64 166.497C258.64 165.151 258.904 163.972 259.433 162.96C259.967 161.943 260.725 161.153 261.708 160.591C262.697 160.023 263.879 159.739 265.254 159.739C266.629 159.739 267.808 160.023 268.791 160.591C269.779 161.153 270.538 161.943 271.066 162.96C271.6 163.972 271.867 165.151 271.867 166.497C271.867 167.838 271.6 169.017 271.066 170.034C270.538 171.045 269.779 171.835 268.791 172.403C267.808 172.966 266.629 173.247 265.254 173.247ZM265.279 170.102C265.779 170.102 266.203 169.949 266.549 169.642C266.896 169.335 267.16 168.909 267.342 168.364C267.529 167.818 267.623 167.187 267.623 166.472C267.623 165.744 267.529 165.108 267.342 164.562C267.16 164.017 266.896 163.591 266.549 163.284C266.203 162.977 265.779 162.824 265.279 162.824C264.762 162.824 264.325 162.977 263.967 163.284C263.614 163.591 263.345 164.017 263.157 164.562C262.975 165.108 262.884 165.744 262.884 166.472C262.884 167.187 262.975 167.818 263.157 168.364C263.345 168.909 263.614 169.335 263.967 169.642C264.325 169.949 264.762 170.102 265.279 170.102ZM276.988 173V159.909H281.156V173H276.988ZM279.076 158.384C278.491 158.384 277.988 158.19 277.568 157.804C277.147 157.412 276.937 156.94 276.937 156.389C276.937 155.844 277.147 155.378 277.568 154.991C277.988 154.599 278.491 154.403 279.076 154.403C279.667 154.403 280.17 154.599 280.585 154.991C281.005 155.378 281.215 155.844 281.215 156.389C281.215 156.94 281.005 157.412 280.585 157.804C280.17 158.19 279.667 158.384 279.076 158.384Z"
    fill="#E89C31"
  />
  <path
    d="M209.02 202.909L204.528 216H199.756L195.273 202.909H199.662L202.074 211.926H202.21L204.631 202.909H209.02ZM227.541 202.142H229.748C229.748 203.165 229.592 204.026 229.279 204.724C228.967 205.418 228.444 205.94 227.711 206.293C226.984 206.645 225.992 206.821 224.737 206.821V205.125C225.555 205.125 226.163 205.014 226.561 204.793C226.958 204.571 227.22 204.239 227.345 203.795C227.47 203.352 227.535 202.801 227.541 202.142ZM221.566 210.349V202.909H225.734V216H221.762V213.562H221.626C221.336 214.364 220.842 215 220.143 215.472C219.444 215.937 218.606 216.17 217.629 216.17C216.731 216.17 215.944 215.966 215.268 215.557C214.597 215.148 214.075 214.577 213.7 213.844C213.325 213.105 213.134 212.241 213.129 211.253V202.909H217.296V210.435C217.302 211.145 217.487 211.705 217.85 212.114C218.22 212.523 218.725 212.727 219.367 212.727C219.782 212.727 220.154 212.636 220.484 212.455C220.819 212.267 221.083 211.997 221.276 211.645C221.475 211.287 221.572 210.855 221.566 210.349ZM245 202.219H247.259C247.259 203.707 246.895 204.864 246.168 205.688C245.441 206.506 244.296 206.915 242.733 206.915V205.449C243.347 205.449 243.816 205.321 244.139 205.065C244.469 204.81 244.693 204.44 244.813 203.957C244.938 203.474 245 202.895 245 202.219ZM239.247 216.247C237.872 216.247 236.691 215.966 235.702 215.403C234.719 214.835 233.961 214.045 233.426 213.034C232.898 212.017 232.634 210.838 232.634 209.497C232.634 208.151 232.898 206.972 233.426 205.96C233.961 204.943 234.719 204.153 235.702 203.591C236.691 203.023 237.872 202.739 239.247 202.739C240.622 202.739 241.801 203.023 242.784 203.591C243.773 204.153 244.532 204.943 245.06 205.96C245.594 206.972 245.861 208.151 245.861 209.497C245.861 210.838 245.594 212.017 245.06 213.034C244.532 214.045 243.773 214.835 242.784 215.403C241.801 215.966 240.622 216.247 239.247 216.247ZM239.273 213.102C239.773 213.102 240.196 212.949 240.543 212.642C240.889 212.335 241.154 211.909 241.336 211.364C241.523 210.818 241.617 210.187 241.617 209.472C241.617 208.744 241.523 208.108 241.336 207.562C241.154 207.017 240.889 206.591 240.543 206.284C240.196 205.977 239.773 205.824 239.273 205.824C238.756 205.824 238.318 205.977 237.961 206.284C237.608 206.591 237.338 207.017 237.151 207.562C236.969 208.108 236.878 208.744 236.878 209.472C236.878 210.187 236.969 210.818 237.151 211.364C237.338 211.909 237.608 212.335 237.961 212.642C238.318 212.949 238.756 213.102 239.273 213.102ZM255.15 208.534V216H250.982V202.909H254.945V205.312H255.09C255.38 204.511 255.874 203.884 256.573 203.429C257.272 202.969 258.104 202.739 259.07 202.739C259.99 202.739 260.789 202.946 261.465 203.361C262.147 203.77 262.675 204.344 263.05 205.082C263.431 205.815 263.618 206.673 263.613 207.656V216H259.445V208.474C259.451 207.747 259.266 207.179 258.891 206.77C258.522 206.361 258.008 206.156 257.348 206.156C256.911 206.156 256.525 206.253 256.189 206.446C255.86 206.634 255.604 206.903 255.422 207.256C255.246 207.608 255.155 208.034 255.15 208.534ZM274.695 221.182C273.451 221.182 272.386 221.009 271.499 220.662C270.613 220.315 269.917 219.841 269.411 219.239C268.905 218.636 268.601 217.955 268.499 217.193L272.445 216.972C272.519 217.239 272.655 217.472 272.854 217.67C273.059 217.869 273.323 218.023 273.647 218.131C273.976 218.239 274.363 218.293 274.806 218.293C275.505 218.293 276.082 218.122 276.536 217.781C276.996 217.446 277.226 216.858 277.226 216.017V213.716H277.082C276.917 214.119 276.667 214.48 276.332 214.798C275.996 215.116 275.579 215.366 275.079 215.548C274.584 215.73 274.016 215.821 273.374 215.821C272.42 215.821 271.545 215.599 270.749 215.156C269.959 214.707 269.326 214.014 268.849 213.077C268.377 212.134 268.141 210.92 268.141 209.438C268.141 207.909 268.386 206.651 268.874 205.662C269.363 204.668 270.002 203.932 270.792 203.455C271.587 202.977 272.442 202.739 273.357 202.739C274.045 202.739 274.633 202.858 275.121 203.097C275.616 203.33 276.022 203.631 276.34 204C276.658 204.369 276.9 204.753 277.064 205.151H277.184V202.909H281.334V216.051C281.334 217.159 281.056 218.094 280.499 218.855C279.942 219.616 279.164 220.193 278.164 220.585C277.164 220.983 276.008 221.182 274.695 221.182ZM274.823 212.787C275.329 212.787 275.761 212.653 276.118 212.386C276.476 212.119 276.752 211.736 276.945 211.236C277.138 210.736 277.235 210.136 277.235 209.438C277.235 208.727 277.138 208.116 276.945 207.605C276.758 207.088 276.482 206.69 276.118 206.412C275.761 206.134 275.329 205.994 274.823 205.994C274.306 205.994 273.868 206.136 273.511 206.42C273.153 206.705 272.88 207.105 272.692 207.622C272.511 208.134 272.42 208.739 272.42 209.438C272.42 210.136 272.513 210.736 272.701 211.236C272.888 211.736 273.158 212.119 273.511 212.386C273.868 212.653 274.306 212.787 274.823 212.787Z"
    fill="#E89C31"
  />
  <path
    d="M9.22727 217.188C8.26136 217.188 7.38352 216.938 6.59375 216.438C5.80398 215.938 5.1733 215.188 4.7017 214.188C4.23011 213.188 3.99432 211.946 3.99432 210.463C3.99432 208.923 4.23864 207.656 4.72727 206.662C5.21591 205.668 5.85511 204.932 6.64489 204.455C7.44034 203.977 8.29545 203.739 9.21023 203.739C9.89773 203.739 10.4858 203.858 10.9744 204.097C11.4631 204.33 11.8665 204.631 12.1847 205C12.5028 205.369 12.7443 205.753 12.9091 206.151H12.9943V199.545H17.1619V217H13.0369V214.878H12.9091C12.733 215.281 12.483 215.659 12.1591 216.011C11.8352 216.364 11.429 216.648 10.9403 216.864C10.4574 217.08 9.88636 217.188 9.22727 217.188ZM10.6761 213.94C11.1818 213.94 11.6136 213.798 11.9716 213.514C12.3295 213.224 12.6051 212.818 12.7983 212.295C12.9915 211.773 13.0881 211.159 13.0881 210.455C13.0881 209.739 12.9915 209.122 12.7983 208.605C12.6108 208.088 12.3352 207.69 11.9716 207.412C11.6136 207.134 11.1818 206.994 10.6761 206.994C10.1591 206.994 9.72159 207.136 9.36364 207.42C9.00568 207.705 8.73295 208.105 8.54545 208.622C8.36364 209.139 8.27273 209.75 8.27273 210.455C8.27273 211.159 8.36648 211.773 8.55398 212.295C8.74148 212.818 9.01136 213.224 9.36364 213.514C9.72159 213.798 10.1591 213.94 10.6761 213.94ZM25.8879 217.222C25.0527 217.222 24.3112 217.082 23.6635 216.804C23.0214 216.52 22.5129 216.094 22.1379 215.526C21.7686 214.952 21.5839 214.233 21.5839 213.369C21.5839 212.642 21.7118 212.028 21.9675 211.528C22.2232 211.028 22.5754 210.622 23.0243 210.31C23.4732 209.997 23.9902 209.761 24.5754 209.602C25.1607 209.437 25.7857 209.327 26.4504 209.27C27.1947 209.202 27.7942 209.131 28.2487 209.057C28.7033 208.977 29.0328 208.866 29.2374 208.724C29.4476 208.577 29.5527 208.369 29.5527 208.102V208.06C29.5527 207.622 29.4021 207.284 29.101 207.045C28.7999 206.807 28.3936 206.688 27.8822 206.688C27.3311 206.688 26.8879 206.807 26.5527 207.045C26.2175 207.284 26.0044 207.614 25.9135 208.034L22.0697 207.898C22.1834 207.102 22.476 206.392 22.9476 205.767C23.4249 205.136 24.0783 204.642 24.9078 204.284C25.743 203.92 26.7459 203.739 27.9163 203.739C28.7516 203.739 29.5214 203.838 30.226 204.037C30.9305 204.23 31.5442 204.514 32.0669 204.889C32.5896 205.259 32.993 205.713 33.2771 206.253C33.5669 206.793 33.7118 207.409 33.7118 208.102V217H29.7913V215.176H29.6891C29.4561 215.619 29.1578 215.994 28.7942 216.301C28.4362 216.608 28.0129 216.838 27.5243 216.991C27.0413 217.145 26.4959 217.222 25.8879 217.222ZM27.1749 214.494C27.6237 214.494 28.0271 214.403 28.3851 214.222C28.7487 214.04 29.0385 213.79 29.2544 213.472C29.4703 213.148 29.5783 212.773 29.5783 212.347V211.102C29.4589 211.165 29.3141 211.222 29.1436 211.273C28.9788 211.324 28.797 211.372 28.5982 211.418C28.3993 211.463 28.1947 211.503 27.9845 211.537C27.7743 211.571 27.5726 211.602 27.3794 211.631C26.9874 211.693 26.6521 211.79 26.3737 211.92C26.101 212.051 25.8908 212.222 25.743 212.432C25.601 212.636 25.53 212.881 25.53 213.165C25.53 213.597 25.6834 213.926 25.9902 214.153C26.3027 214.381 26.6976 214.494 27.1749 214.494ZM29.5357 202H26.5016L26.2629 200.568C26.8652 200.545 27.2942 200.469 27.5499 200.338C27.8055 200.202 27.9305 200.031 27.9249 199.827C27.9305 199.52 27.7771 199.318 27.4646 199.222C27.1521 199.125 26.7544 199.077 26.2714 199.077L26.3652 197.312C28.0016 197.312 29.2459 197.517 30.0982 197.926C30.9504 198.335 31.3737 198.909 31.368 199.648C31.3737 200.142 31.1862 200.523 30.8055 200.79C30.4249 201.051 30.0016 201.216 29.5357 201.284V202ZM38.6601 217V203.909H42.8277V217H38.6601ZM40.7482 202.384C40.1629 202.384 39.6601 202.19 39.2396 201.804C38.8192 201.412 38.6089 200.94 38.6089 200.389C38.6089 199.844 38.8192 199.378 39.2396 198.991C39.6601 198.599 40.1629 198.403 40.7482 198.403C41.3391 198.403 41.8419 198.599 42.2567 198.991C42.6771 199.378 42.8874 199.844 42.8874 200.389C42.8874 200.94 42.6771 201.412 42.2567 201.804C41.8419 202.19 41.3391 202.384 40.7482 202.384ZM68.1355 203.909L63.644 217H58.8713L54.3884 203.909H58.7776L61.1895 212.926H61.3259L63.7463 203.909H68.1355ZM75.4723 217.222C74.6371 217.222 73.8956 217.082 73.2479 216.804C72.6058 216.52 72.0973 216.094 71.7223 215.526C71.353 214.952 71.1683 214.233 71.1683 213.369C71.1683 212.642 71.2962 212.028 71.5518 211.528C71.8075 211.028 72.1598 210.622 72.6087 210.31C73.0575 209.997 73.5746 209.761 74.1598 209.602C74.745 209.437 75.37 209.327 76.0348 209.27C76.7791 209.202 77.3786 209.131 77.8331 209.057C78.2876 208.977 78.6172 208.866 78.8217 208.724C79.032 208.577 79.1371 208.369 79.1371 208.102V208.06C79.1371 207.622 78.9865 207.284 78.6854 207.045C78.3842 206.807 77.978 206.688 77.4666 206.688C76.9155 206.688 76.4723 206.807 76.1371 207.045C75.8018 207.284 75.5888 207.614 75.4979 208.034L71.6541 207.898C71.7678 207.102 72.0604 206.392 72.532 205.767C73.0092 205.136 73.6626 204.642 74.4922 204.284C75.3274 203.92 76.3303 203.739 77.5007 203.739C78.3359 203.739 79.1058 203.838 79.8104 204.037C80.5149 204.23 81.1286 204.514 81.6513 204.889C82.174 205.259 82.5774 205.713 82.8615 206.253C83.1513 206.793 83.2962 207.409 83.2962 208.102V217H79.3757V215.176H79.2734C79.0405 215.619 78.7422 215.994 78.3786 216.301C78.0206 216.608 77.5973 216.838 77.1087 216.991C76.6257 217.145 76.0803 217.222 75.4723 217.222ZM76.7592 214.494C77.2081 214.494 77.6115 214.403 77.9695 214.222C78.3331 214.04 78.6229 213.79 78.8388 213.472C79.0547 213.148 79.1626 212.773 79.1626 212.347V211.102C79.0433 211.165 78.8984 211.222 78.728 211.273C78.5632 211.324 78.3814 211.372 78.1825 211.418C77.9837 211.463 77.7791 211.503 77.5689 211.537C77.3587 211.571 77.157 211.602 76.9638 211.631C76.5717 211.693 76.2365 211.79 75.9581 211.92C75.6854 212.051 75.4751 212.222 75.3274 212.432C75.1854 212.636 75.1143 212.881 75.1143 213.165C75.1143 213.597 75.2678 213.926 75.5746 214.153C75.8871 214.381 76.282 214.494 76.7592 214.494ZM79.3331 202.341L77.6371 200.364L75.9496 202.341H72.4553V202.23L76.1456 198.412H79.1371L82.8189 202.23V202.341H79.3331ZM92.4121 209.534V217H88.2445V203.909H92.2075V206.312H92.3524C92.6422 205.511 93.1365 204.884 93.8354 204.429C94.5342 203.969 95.3666 203.739 96.3325 203.739C97.253 203.739 98.0513 203.946 98.7274 204.361C99.4092 204.77 99.9376 205.344 100.313 206.082C100.693 206.815 100.881 207.673 100.875 208.656V217H96.7075V209.474C96.7132 208.747 96.5286 208.179 96.1536 207.77C95.7842 207.361 95.27 207.156 94.6109 207.156C94.1734 207.156 93.7871 207.253 93.4518 207.446C93.1223 207.634 92.8666 207.903 92.6848 208.256C92.5087 208.608 92.4178 209.034 92.4121 209.534ZM113.412 217V203.909H117.375V206.312H117.52C117.792 205.517 118.253 204.889 118.9 204.429C119.548 203.969 120.321 203.739 121.218 203.739C122.128 203.739 122.906 203.972 123.554 204.438C124.201 204.903 124.613 205.528 124.789 206.312H124.926C125.17 205.534 125.647 204.912 126.358 204.446C127.068 203.974 127.906 203.739 128.872 203.739C130.111 203.739 131.116 204.136 131.889 204.932C132.662 205.722 133.048 206.807 133.048 208.188V217H128.88V209.142C128.88 208.489 128.713 207.991 128.378 207.651C128.042 207.304 127.608 207.131 127.074 207.131C126.5 207.131 126.048 207.318 125.718 207.693C125.395 208.062 125.233 208.56 125.233 209.185V217H121.227V209.099C121.227 208.491 121.062 208.011 120.733 207.659C120.403 207.307 119.968 207.131 119.429 207.131C119.065 207.131 118.744 207.219 118.466 207.395C118.187 207.565 117.968 207.81 117.809 208.128C117.656 208.446 117.579 208.821 117.579 209.253V217H113.412ZM141.721 217.222C140.886 217.222 140.144 217.082 139.496 216.804C138.854 216.52 138.346 216.094 137.971 215.526C137.601 214.952 137.417 214.233 137.417 213.369C137.417 212.642 137.545 212.028 137.8 211.528C138.056 211.028 138.408 210.622 138.857 210.31C139.306 209.997 139.823 209.761 140.408 209.602C140.993 209.437 141.618 209.327 142.283 209.27C143.028 209.202 143.627 209.131 144.082 209.057C144.536 208.977 144.866 208.866 145.07 208.724C145.28 208.577 145.386 208.369 145.386 208.102V208.06C145.386 207.622 145.235 207.284 144.934 207.045C144.633 206.807 144.226 206.688 143.715 206.688C143.164 206.688 142.721 206.807 142.386 207.045C142.05 207.284 141.837 207.614 141.746 208.034L137.903 207.898C138.016 207.102 138.309 206.392 138.78 205.767C139.258 205.136 139.911 204.642 140.741 204.284C141.576 203.92 142.579 203.739 143.749 203.739C144.584 203.739 145.354 203.838 146.059 204.037C146.763 204.23 147.377 204.514 147.9 204.889C148.422 205.259 148.826 205.713 149.11 206.253C149.4 206.793 149.545 207.409 149.545 208.102V217H145.624V215.176H145.522C145.289 215.619 144.991 215.994 144.627 216.301C144.269 216.608 143.846 216.838 143.357 216.991C142.874 217.145 142.329 217.222 141.721 217.222ZM143.008 214.494C143.457 214.494 143.86 214.403 144.218 214.222C144.582 214.04 144.871 213.79 145.087 213.472C145.303 213.148 145.411 212.773 145.411 212.347V211.102C145.292 211.165 145.147 211.222 144.976 211.273C144.812 211.324 144.63 211.372 144.431 211.418C144.232 211.463 144.028 211.503 143.817 211.537C143.607 211.571 143.405 211.602 143.212 211.631C142.82 211.693 142.485 211.79 142.207 211.92C141.934 212.051 141.724 212.222 141.576 212.432C141.434 212.636 141.363 212.881 141.363 213.165C141.363 213.597 141.516 213.926 141.823 214.153C142.136 214.381 142.53 214.494 143.008 214.494ZM145.582 202.341L143.886 200.364L142.198 202.341H138.704V202.23L142.394 198.412H145.386L149.067 202.23V202.341H145.582ZM156.572 221.909C156.072 221.909 155.601 221.869 155.158 221.79C154.714 221.716 154.334 221.616 154.016 221.491L154.936 218.466C155.345 218.602 155.714 218.682 156.044 218.705C156.379 218.727 156.666 218.673 156.905 218.543C157.149 218.418 157.337 218.193 157.467 217.869L157.629 217.477L152.976 203.909H157.339L159.751 213.25H159.888L162.334 203.909H166.723L161.788 218.253C161.55 218.969 161.212 219.599 160.774 220.145C160.342 220.696 159.783 221.128 159.095 221.44C158.413 221.753 157.572 221.909 156.572 221.909Z"
    fill="#E89C31"
  />
</svg>

              </div>
            </div></div>}
            {currentSlide === 2 && <div className="slide2"> <div className="frame-2-QqIeGd slide1" data-id="1:221">
              <img
                className="rectangle-102-cmUncO"
                data-id="I1:221;104:114"
                src="/img/image.png"
                alt="Rectangle 102"
              />
              <img
                className="rectangle-101-cmUncO"
                data-id="I1:221;104:93"
                src="/img/rectangle-102.png"
                alt="Rectangle 101"
              />
              
              <div className="group-64-cmUncO" data-id="I1:221;105:181" style={{ cursor: 'pointer' }} onClick={handleClick}>
              <svg
  width={157}
  height={224}
  viewBox="0 0 157 224"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M19.4119 9.37145C18.8153 9.53243 18.2898 9.76918 17.8352 10.0817C17.3712 10.3942 16.9782 10.7777 16.6563 11.2322C16.3343 11.6868 16.0928 12.2076 15.9318 12.7947C15.7614 13.3819 15.6761 14.0258 15.6761 14.7266C15.6761 16.1375 16.017 17.3591 16.6989 18.3913C17.3807 19.4141 18.375 20.2048 19.6818 20.7635C20.9792 21.3222 22.5559 21.6016 24.4119 21.6016C26.2775 21.6016 27.8684 21.3317 29.1847 20.7919C30.5009 20.2521 31.5047 19.4709 32.196 18.4482C32.8873 17.4254 33.233 16.1849 33.233 14.7266C33.233 13.4387 33.0246 12.3497 32.608 11.4595C32.1818 10.5599 31.5805 9.87808 30.804 9.41406C30.0275 8.95005 29.1136 8.71804 28.0625 8.71804L28.2188 7.41122L28.2188 14.4851H23.0909L23.0909 1.94247H26.9403C29.5445 1.94247 31.7746 2.49645 33.6307 3.6044C35.4867 4.70289 36.9119 6.21804 37.9062 8.14986C38.9006 10.0722 39.3977 12.2834 39.3977 14.7834C39.3977 17.558 38.7964 19.9964 37.5938 22.0987C36.3911 24.201 34.6771 25.8393 32.4517 27.0135C30.2169 28.1877 27.5653 28.7749 24.4972 28.7749C22.1108 28.7749 19.9943 28.4197 18.1477 27.7095C16.2917 26.9993 14.7197 26.0097 13.4318 24.7408C12.1439 23.4624 11.1686 21.9851 10.5057 20.3089C9.8428 18.6233 9.51136 16.8099 9.51136 14.8686C9.51136 13.183 9.75284 11.6158 10.2358 10.1669C10.7188 8.70857 11.4006 7.42069 12.2813 6.30327C13.1619 5.17637 14.2083 4.26255 15.4205 3.56179C16.6326 2.86103 17.9631 2.42543 19.4119 2.25497V9.37145Z"
    fill="#E89C31"
  />
  <path
    d="M11.9091 205.053L33.2159 198.547V198.305L11.9091 191.8V183.93L41 193.746V203.107L11.9091 212.922L11.9091 205.053Z"
    fill="#E89C31"
  />
  <path
    d="M11.9091 131.222V124.205H30.6733C32.8419 124.205 34.7311 124.721 36.3409 125.754C37.9413 126.786 39.1818 128.225 40.0625 130.072C40.9337 131.918 41.3693 134.063 41.3693 136.506C41.3693 138.978 40.9337 141.137 40.0625 142.984C39.1818 144.83 37.9413 146.265 36.3409 147.288C34.7311 148.31 32.8419 148.822 30.6733 148.822H11.9091L11.9091 141.79H30.0625C31.0663 141.79 31.9612 141.573 32.7472 141.137C33.5331 140.692 34.1487 140.072 34.5938 139.276C35.0388 138.481 35.2614 137.558 35.2614 136.506C35.2614 135.455 35.0388 134.537 34.5938 133.751C34.1487 132.955 33.5331 132.335 32.7472 131.89C31.9612 131.445 31.0663 131.222 30.0625 131.222H11.9091ZM9.21023 140.469L9.18182 144.092C7.25947 144.092 5.80587 143.632 4.82102 142.714C3.83617 141.795 3.33902 140.678 3.32955 139.362C3.32955 138.661 3.44318 138.064 3.67045 137.572C3.88826 137.07 4.14867 136.629 4.4517 136.251C4.74526 135.862 5.00568 135.503 5.23295 135.171C5.45076 134.83 5.55966 134.47 5.55966 134.092C5.55019 133.552 5.35132 133.154 4.96307 132.898C4.56534 132.633 4.0303 132.496 3.35795 132.487L3.40057 128.921C5.30398 128.95 6.75757 129.418 7.76136 130.327C8.75568 131.237 9.25758 132.344 9.26705 133.651C9.27652 134.371 9.16761 134.982 8.94034 135.484C8.71307 135.986 8.45265 136.421 8.15909 136.79C7.86553 137.15 7.60985 137.496 7.39205 137.827C7.16477 138.159 7.05114 138.523 7.05114 138.921C7.05114 139.385 7.24053 139.759 7.61932 140.043C7.98864 140.327 8.51894 140.469 9.21023 140.469Z"
    fill="#E89C31"
  />
  <path
    d="M11.9091 63.2195H41V69.1854L24.2102 80.7621V80.9467H41V87.978H11.9091L11.9091 81.9268L28.6705 70.478V70.2365H11.9091V63.2195Z"
    fill="#E89C31"
  />
  <path
    d="M66.9091 199.114L80 203.606V208.379L66.9091 212.862V208.472L75.9261 206.061V205.924L66.9091 203.504V199.114ZM80.2472 189.419C80.2472 190.788 79.9773 191.97 79.4375 192.964C78.892 193.953 78.1165 194.714 77.1108 195.249C76.0994 195.777 74.8977 196.041 73.5057 196.041C72.1534 196.041 70.9716 195.774 69.9602 195.24C68.9432 194.706 68.1534 193.953 67.5909 192.982C67.0227 192.01 66.7386 190.865 66.7386 189.547C66.7386 188.615 66.8835 187.763 67.1733 186.99C67.4631 186.217 67.892 185.55 68.4602 184.987C69.0284 184.425 69.7301 183.987 70.5653 183.675C71.3949 183.362 72.3466 183.206 73.4205 183.206H74.4602V194.584H72.0398V187.084C71.5966 187.089 71.2017 187.195 70.8551 187.399C70.5085 187.604 70.2386 187.885 70.0455 188.243C69.8466 188.595 69.7472 189.001 69.7472 189.462C69.7472 189.928 69.8523 190.345 70.0625 190.714C70.267 191.084 70.5483 191.376 70.9062 191.592C71.2585 191.808 71.6591 191.922 72.108 191.933H74.571C75.1051 191.933 75.5739 191.828 75.9773 191.618C76.375 191.408 76.6847 191.109 76.9062 190.723C77.1278 190.337 77.2386 189.876 77.2386 189.342C77.2386 188.973 77.1875 188.638 77.0852 188.337C76.983 188.036 76.8324 187.777 76.6335 187.561C76.4347 187.345 76.1903 187.183 75.9006 187.075L76.0114 183.249C76.8693 183.408 77.6165 183.757 78.2528 184.297C78.8835 184.831 79.375 185.533 79.7273 186.402C80.0739 187.271 80.2472 188.277 80.2472 189.419ZM65.3409 187.928L63.3636 189.624L65.3409 191.311V194.805H65.2301L61.4119 191.115V188.124L65.2301 184.442H65.3409V187.928ZM85.0966 189.615C85.0966 190.206 84.9006 190.712 84.5085 191.132C84.1165 191.547 83.6477 191.754 83.1023 191.754C82.5568 191.754 82.0881 191.544 81.696 191.124C81.304 190.703 81.108 190.2 81.108 189.615C81.108 189.024 81.304 188.521 81.696 188.107C82.0881 187.686 82.5568 187.476 83.1023 187.476C83.6477 187.476 84.1165 187.686 84.5085 188.107C84.9006 188.521 85.0966 189.024 85.0966 189.615ZM66.9091 171.288H69.9773V179.547H66.9091V171.288ZM63.7727 177.817V173.649H75.8835C76.1392 173.649 76.3466 173.609 76.5057 173.53C76.6591 173.444 76.7699 173.322 76.8381 173.163C76.9006 173.004 76.9318 172.814 76.9318 172.592C76.9318 172.433 76.9176 172.265 76.8892 172.089C76.8551 171.908 76.8267 171.771 76.804 171.68L79.8125 171.05C79.8693 171.248 79.9403 171.53 80.0256 171.893C80.1108 172.251 80.1648 172.68 80.1875 173.18C80.233 174.158 80.1193 174.996 79.8466 175.694C79.5682 176.388 79.1364 176.919 78.5511 177.288C77.9659 177.652 77.2301 177.828 76.3438 177.817H63.7727ZM70.9062 147.777L71.0085 151.603C70.7358 151.643 70.4943 151.751 70.2841 151.927C70.0682 152.103 69.9006 152.333 69.7812 152.617C69.6562 152.896 69.5938 153.22 69.5938 153.589C69.5938 154.072 69.6903 154.484 69.8835 154.825C70.0767 155.16 70.3381 155.325 70.6676 155.319C70.9233 155.325 71.1449 155.223 71.3324 155.012C71.5199 154.796 71.6705 154.413 71.7841 153.862L72.2614 151.339C72.5114 150.032 72.9261 149.061 73.5057 148.424C74.0852 147.782 74.8523 147.458 75.8068 147.453C76.7045 147.458 77.4858 147.725 78.1506 148.254C78.8153 148.777 79.3324 149.492 79.7017 150.402C80.0653 151.311 80.2472 152.35 80.2472 153.521C80.2472 155.39 79.8636 156.865 79.0966 157.944C78.3239 159.018 77.2898 159.632 75.9943 159.785L75.892 155.669C76.3693 155.578 76.733 155.342 76.983 154.961C77.233 154.581 77.358 154.095 77.358 153.504C77.358 152.97 77.2585 152.535 77.0597 152.2C76.8608 151.865 76.5966 151.694 76.267 151.688C75.9716 151.694 75.7358 151.825 75.5597 152.081C75.3778 152.336 75.2358 152.737 75.1335 153.282L74.6989 155.566C74.4602 156.879 74.0199 157.856 73.3778 158.498C72.7301 159.14 71.9062 159.458 70.9062 159.453C70.0312 159.458 69.2841 159.225 68.6648 158.754C68.0398 158.282 67.5625 157.612 67.233 156.742C66.9034 155.873 66.7386 154.848 66.7386 153.666C66.7386 151.893 67.1108 150.495 67.8551 149.473C68.5937 148.45 69.6108 147.885 70.9062 147.777ZM80.2216 139.311C80.2216 140.146 80.0824 140.887 79.804 141.535C79.5199 142.177 79.0937 142.686 78.5256 143.061C77.9517 143.43 77.233 143.614 76.3693 143.614C75.642 143.614 75.0284 143.487 74.5284 143.231C74.0284 142.975 73.6222 142.623 73.3097 142.174C72.9972 141.725 72.7614 141.208 72.6023 140.623C72.4375 140.038 72.3267 139.413 72.2699 138.748C72.2017 138.004 72.1307 137.404 72.0568 136.95C71.9773 136.495 71.8665 136.166 71.7244 135.961C71.5767 135.751 71.3693 135.646 71.1023 135.646H71.0597C70.6222 135.646 70.2841 135.796 70.0455 136.097C69.8068 136.399 69.6875 136.805 69.6875 137.316C69.6875 137.867 69.8068 138.311 70.0455 138.646C70.2841 138.981 70.6136 139.194 71.0341 139.285L70.8977 143.129C70.1023 143.015 69.392 142.722 68.767 142.251C68.1364 141.774 67.642 141.12 67.2841 140.291C66.9205 139.455 66.7386 138.453 66.7386 137.282C66.7386 136.447 66.8381 135.677 67.0369 134.972C67.2301 134.268 67.5142 133.654 67.8892 133.132C68.2585 132.609 68.7131 132.205 69.2528 131.921C69.7926 131.632 70.4091 131.487 71.1023 131.487H80V135.407H78.1761V135.509C78.6193 135.742 78.9943 136.041 79.3011 136.404C79.608 136.762 79.8381 137.186 79.9915 137.674C80.1449 138.157 80.2216 138.703 80.2216 139.311ZM77.4943 138.024C77.4943 137.575 77.4034 137.171 77.2216 136.813C77.0398 136.45 76.7898 136.16 76.4716 135.944C76.1477 135.728 75.7727 135.62 75.3466 135.62H74.1023C74.1648 135.739 74.2216 135.884 74.2727 136.055C74.3239 136.22 74.3722 136.401 74.4176 136.6C74.4631 136.799 74.5028 137.004 74.5369 137.214C74.571 137.424 74.6023 137.626 74.6307 137.819C74.6932 138.211 74.7898 138.546 74.9205 138.825C75.0511 139.097 75.2216 139.308 75.4318 139.455C75.6364 139.597 75.8807 139.668 76.1648 139.668C76.5966 139.668 76.9261 139.515 77.1534 139.208C77.3807 138.896 77.4943 138.501 77.4943 138.024ZM80.2472 120.428C80.2472 121.803 79.9659 122.984 79.4034 123.973C78.8352 124.956 78.0455 125.714 77.0341 126.249C76.017 126.777 74.8381 127.041 73.4972 127.041C72.1506 127.041 70.9716 126.777 69.9602 126.249C68.9432 125.714 68.1534 124.956 67.5909 123.973C67.0227 122.984 66.7386 121.803 66.7386 120.428C66.7386 119.053 67.0227 117.874 67.5909 116.891C68.1534 115.902 68.9432 115.143 69.9602 114.615C70.9716 114.081 72.1506 113.814 73.4972 113.814C74.8381 113.814 76.017 114.081 77.0341 114.615C78.0455 115.143 78.8352 115.902 79.4034 116.891C79.9659 117.874 80.2472 119.053 80.2472 120.428ZM77.1023 120.402C77.1023 119.902 76.9489 119.479 76.642 119.132C76.3352 118.786 75.9091 118.521 75.3636 118.339C74.8182 118.152 74.1875 118.058 73.4716 118.058C72.7443 118.058 72.108 118.152 71.5625 118.339C71.017 118.521 70.5909 118.786 70.2841 119.132C69.9773 119.479 69.8239 119.902 69.8239 120.402C69.8239 120.919 69.9773 121.357 70.2841 121.714C70.5909 122.067 71.017 122.337 71.5625 122.524C72.108 122.706 72.7443 122.797 73.4716 122.797C74.1875 122.797 74.8182 122.706 75.3636 122.524C75.9091 122.337 76.3352 122.067 76.642 121.714C76.9489 121.357 77.1023 120.919 77.1023 120.402Z"
    fill="#E89C31"
  />
  <path
    d="M130.534 90.4504H138V94.618H120.545V90.5868H127.312V90.4419C126.506 90.1465 125.875 89.6635 125.42 88.993C124.966 88.3169 124.739 87.4902 124.739 86.5129C124.739 85.5925 124.943 84.7913 125.352 84.1095C125.756 83.4277 126.327 82.8993 127.065 82.5243C127.804 82.1436 128.668 81.9561 129.656 81.9618H138V86.1294H130.474C129.747 86.1237 129.179 86.3055 128.77 86.6749C128.361 87.0442 128.156 87.5641 128.156 88.2345C128.156 88.672 128.253 89.0584 128.446 89.3936C128.634 89.7232 128.903 89.9817 129.256 90.1692C129.608 90.351 130.034 90.4447 130.534 90.4504ZM138.247 70.8494C138.247 72.2244 137.966 73.4063 137.403 74.3949C136.835 75.3778 136.045 76.1364 135.034 76.6705C134.017 77.1989 132.838 77.4631 131.497 77.4631C130.151 77.4631 128.972 77.1989 127.96 76.6705C126.943 76.1364 126.153 75.3778 125.591 74.3949C125.023 73.4063 124.739 72.2244 124.739 70.8494C124.739 69.4744 125.023 68.2955 125.591 67.3125C126.153 66.3239 126.943 65.5653 127.96 65.0369C128.972 64.5028 130.151 64.2358 131.497 64.2358C132.838 64.2358 134.017 64.5028 135.034 65.0369C136.045 65.5653 136.835 66.3239 137.403 67.3125C137.966 68.2955 138.247 69.4744 138.247 70.8494ZM135.102 70.8239C135.102 70.3239 134.949 69.9006 134.642 69.554C134.335 69.2074 133.909 68.9432 133.364 68.7614C132.818 68.5739 132.187 68.4801 131.472 68.4801C130.744 68.4801 130.108 68.5739 129.562 68.7614C129.017 68.9432 128.591 69.2074 128.284 69.554C127.977 69.9006 127.824 70.3239 127.824 70.8239C127.824 71.3409 127.977 71.7784 128.284 72.1364C128.591 72.4886 129.017 72.7585 129.562 72.946C130.108 73.1278 130.744 73.2188 131.472 73.2188C132.187 73.2188 132.818 73.1278 133.364 72.946C133.909 72.7585 134.335 72.4886 134.642 72.1364C134.949 71.7784 135.102 71.3409 135.102 70.8239ZM121.108 69.8693L123.605 66.4261V69.0938L122.293 70.8494L123.605 72.6307V75.2727L121.108 71.8551V69.8693ZM119.08 76.517L122.293 74.3864V76.5085L119.08 79.3892V76.517ZM130.534 55.5332H138V59.7009H124.909V55.7378H127.312V55.5929C126.511 55.3031 125.884 54.8088 125.429 54.1099C124.969 53.4111 124.739 52.5787 124.739 51.6128C124.739 50.6923 124.946 49.894 125.361 49.2179C125.77 48.5361 126.344 48.0077 127.082 47.6327C127.815 47.252 128.673 47.0645 129.656 47.0702H138V51.2378H130.474C129.747 51.2321 129.179 51.4168 128.77 51.7918C128.361 52.1611 128.156 52.6753 128.156 53.3344C128.156 53.7719 128.253 54.1582 128.446 54.4935C128.634 54.823 128.903 55.0787 129.256 55.2605C129.608 55.4366 130.034 55.5276 130.534 55.5332ZM124.909 27.1445H127.977V35.403H124.909V27.1445ZM121.773 33.6729V29.5053H133.884C134.139 29.5053 134.347 29.4655 134.506 29.3859C134.659 29.3007 134.77 29.1786 134.838 29.0195C134.901 28.8604 134.932 28.67 134.932 28.4484C134.932 28.2893 134.918 28.1217 134.889 27.9456C134.855 27.7638 134.827 27.6274 134.804 27.5365L137.812 26.9058C137.869 27.1047 137.94 27.3859 138.026 27.7496C138.111 28.1075 138.165 28.5365 138.188 29.0365C138.233 30.0138 138.119 30.8518 137.847 31.5507C137.568 32.2439 137.136 32.7751 136.551 33.1445C135.966 33.5081 135.23 33.6842 134.344 33.6729H121.773ZM138.247 16.6479C138.247 18.0229 137.966 19.2047 137.403 20.1933C136.835 21.1763 136.045 21.9348 135.034 22.4689C134.017 22.9973 132.838 23.2615 131.497 23.2615C130.151 23.2615 128.972 22.9973 127.96 22.4689C126.943 21.9348 126.153 21.1763 125.591 20.1933C125.023 19.2047 124.739 18.0229 124.739 16.6479C124.739 15.2729 125.023 14.0939 125.591 13.1109C126.153 12.1223 126.943 11.3638 127.96 10.8354C128.972 10.3013 130.151 10.0342 131.497 10.0342C132.838 10.0342 134.017 10.3013 135.034 10.8354C136.045 11.3638 136.835 12.1223 137.403 13.1109C137.966 14.0939 138.247 15.2729 138.247 16.6479ZM135.102 16.6223C135.102 16.1223 134.949 15.699 134.642 15.3524C134.335 15.0058 133.909 14.7416 133.364 14.5598C132.818 14.3723 132.187 14.2786 131.472 14.2786C130.744 14.2786 130.108 14.3723 129.562 14.5598C129.017 14.7416 128.591 15.0058 128.284 15.3524C127.977 15.699 127.824 16.1223 127.824 16.6223C127.824 17.1393 127.977 17.5768 128.284 17.9348C128.591 18.2871 129.017 18.557 129.562 18.7445C130.108 18.9263 130.744 19.0172 131.472 19.0172C132.187 19.0172 132.818 18.9263 133.364 18.7445C133.909 18.557 134.335 18.2871 134.642 17.9348C134.949 17.5768 135.102 17.1393 135.102 16.6223ZM123.341 14.9518L121.364 16.6479L123.341 18.3354V21.8297H123.23L119.412 18.1393V15.1479L123.23 11.4661H123.341V14.9518ZM138 5.49929H124.909V1.33168H138V5.49929ZM123.384 3.41122C123.384 3.99645 123.19 4.49929 122.804 4.91974C122.412 5.3402 121.94 5.55043 121.389 5.55043C120.844 5.55043 120.378 5.3402 119.991 4.91974C119.599 4.49929 119.403 3.99645 119.403 3.41122C119.403 2.82031 119.599 2.31747 119.991 1.9027C120.378 1.48224 120.844 1.27202 121.389 1.27202C121.94 1.27202 122.412 1.48224 122.804 1.9027C123.19 2.31747 123.384 2.82031 123.384 3.41122Z"
    fill="#E89C31"
  />
  <path
    d="M109 209.679H91.5455V205.511H98.1506V205.426C97.7528 205.256 97.3693 205.014 97 204.702C96.6307 204.384 96.3295 203.98 96.0966 203.491C95.858 202.997 95.7386 202.406 95.7386 201.719C95.7386 200.81 95.9773 199.96 96.4545 199.17C96.9318 198.375 97.6676 197.733 98.6619 197.244C99.6562 196.756 100.923 196.511 102.463 196.511C103.946 196.511 105.188 196.747 106.188 197.219C107.188 197.685 107.938 198.315 108.438 199.111C108.938 199.901 109.188 200.778 109.188 201.744C109.188 202.403 109.08 202.974 108.864 203.457C108.648 203.94 108.364 204.347 108.011 204.676C107.659 205 107.281 205.25 106.878 205.426V205.554H109V209.679ZM102.455 205.597C103.159 205.597 103.773 205.503 104.295 205.315C104.818 205.122 105.224 204.847 105.514 204.489C105.798 204.125 105.94 203.69 105.94 203.185C105.94 202.673 105.798 202.239 105.514 201.881C105.224 201.523 104.818 201.253 104.295 201.071C103.773 200.884 103.159 200.79 102.455 200.79C101.75 200.79 101.139 200.884 100.622 201.071C100.105 201.253 99.7045 201.523 99.4205 201.881C99.1364 202.233 98.9943 202.668 98.9943 203.185C98.9943 203.696 99.1335 204.131 99.4119 204.489C99.6903 204.847 100.088 205.122 100.605 205.315C101.122 205.503 101.739 205.597 102.455 205.597ZM109.222 188.717C109.222 189.552 109.082 190.294 108.804 190.942C108.52 191.584 108.094 192.092 107.526 192.467C106.952 192.836 106.233 193.021 105.369 193.021C104.642 193.021 104.028 192.893 103.528 192.638C103.028 192.382 102.622 192.03 102.31 191.581C101.997 191.132 101.761 190.615 101.602 190.03C101.437 189.444 101.327 188.819 101.27 188.155C101.202 187.41 101.131 186.811 101.057 186.356C100.977 185.902 100.866 185.572 100.724 185.368C100.577 185.157 100.369 185.052 100.102 185.052H100.06C99.6222 185.052 99.2841 185.203 99.0455 185.504C98.8068 185.805 98.6875 186.211 98.6875 186.723C98.6875 187.274 98.8068 187.717 99.0455 188.052C99.2841 188.388 99.6136 188.601 100.034 188.692L99.8977 192.535C99.1023 192.422 98.392 192.129 97.767 191.657C97.1364 191.18 96.642 190.527 96.2841 189.697C95.9205 188.862 95.7386 187.859 95.7386 186.689C95.7386 185.853 95.8381 185.084 96.0369 184.379C96.2301 183.674 96.5142 183.061 96.8892 182.538C97.2585 182.015 97.7131 181.612 98.2528 181.328C98.7926 181.038 99.4091 180.893 100.102 180.893H109V184.814H107.176V184.916C107.619 185.149 107.994 185.447 108.301 185.811C108.608 186.169 108.838 186.592 108.991 187.081C109.145 187.564 109.222 188.109 109.222 188.717ZM106.494 187.43C106.494 186.981 106.403 186.578 106.222 186.22C106.04 185.856 105.79 185.567 105.472 185.351C105.148 185.135 104.773 185.027 104.347 185.027H103.102C103.165 185.146 103.222 185.291 103.273 185.461C103.324 185.626 103.372 185.808 103.418 186.007C103.463 186.206 103.503 186.41 103.537 186.62C103.571 186.831 103.602 187.032 103.631 187.226C103.693 187.618 103.79 187.953 103.92 188.231C104.051 188.504 104.222 188.714 104.432 188.862C104.636 189.004 104.881 189.075 105.165 189.075C105.597 189.075 105.926 188.922 106.153 188.615C106.381 188.302 106.494 187.907 106.494 187.43ZM113.909 174.345C113.909 174.845 113.869 175.317 113.79 175.76C113.716 176.203 113.616 176.584 113.491 176.902L110.466 175.982C110.602 175.573 110.682 175.203 110.705 174.874C110.727 174.539 110.673 174.252 110.543 174.013C110.418 173.769 110.193 173.581 109.869 173.45L109.477 173.289L95.9091 177.942V173.578L105.25 171.166V171.03L95.9091 168.584V164.195L110.253 169.129C110.969 169.368 111.599 169.706 112.145 170.144C112.696 170.575 113.128 171.135 113.44 171.823C113.753 172.504 113.909 173.345 113.909 174.345ZM142.909 201.131H135.878V201.216C136.281 201.392 136.659 201.642 137.011 201.966C137.364 202.29 137.648 202.696 137.864 203.185C138.08 203.668 138.188 204.239 138.188 204.898C138.188 205.864 137.938 206.741 137.438 207.531C136.938 208.321 136.188 208.952 135.188 209.423C134.188 209.895 132.946 210.131 131.463 210.131C129.923 210.131 128.656 209.886 127.662 209.398C126.668 208.909 125.932 208.27 125.455 207.48C124.977 206.685 124.739 205.83 124.739 204.915C124.739 204.227 124.858 203.639 125.097 203.151C125.33 202.662 125.631 202.259 126 201.94C126.369 201.622 126.753 201.381 127.151 201.216V201.088H124.909V196.963H142.909V201.131ZM134.94 203.449C134.94 202.943 134.798 202.511 134.514 202.153C134.224 201.795 133.818 201.52 133.295 201.327C132.773 201.134 132.159 201.037 131.455 201.037C130.739 201.037 130.122 201.134 129.605 201.327C129.088 201.514 128.69 201.79 128.412 202.153C128.134 202.511 127.994 202.943 127.994 203.449C127.994 203.966 128.136 204.403 128.42 204.761C128.705 205.119 129.105 205.392 129.622 205.58C130.139 205.761 130.75 205.852 131.455 205.852C132.159 205.852 132.773 205.759 133.295 205.571C133.818 205.384 134.224 205.114 134.514 204.761C134.798 204.403 134.94 203.966 134.94 203.449ZM132.349 183.961H124.909V179.802H138V183.774H135.562V183.91C136.364 184.2 137 184.694 137.472 185.393C137.937 186.086 138.17 186.924 138.17 187.907C138.17 188.799 137.966 189.584 137.557 190.26C137.148 190.936 136.577 191.461 135.844 191.836C135.105 192.211 134.241 192.402 133.253 192.407H124.909V188.24H132.435C133.145 188.234 133.705 188.047 134.114 187.677C134.523 187.308 134.727 186.805 134.727 186.169C134.727 185.754 134.636 185.382 134.455 185.052C134.267 184.717 133.997 184.453 133.645 184.26C133.287 184.061 132.855 183.961 132.349 183.961ZM138.222 171.539C138.222 172.374 138.082 173.116 137.804 173.764C137.52 174.406 137.094 174.914 136.526 175.289C135.952 175.659 135.233 175.843 134.369 175.843C133.642 175.843 133.028 175.715 132.528 175.46C132.028 175.204 131.622 174.852 131.31 174.403C130.997 173.954 130.761 173.437 130.602 172.852C130.437 172.267 130.327 171.642 130.27 170.977C130.202 170.232 130.131 169.633 130.057 169.178C129.977 168.724 129.866 168.394 129.724 168.19C129.577 167.98 129.369 167.874 129.102 167.874H129.06C128.622 167.874 128.284 168.025 128.045 168.326C127.807 168.627 127.688 169.034 127.688 169.545C127.688 170.096 127.807 170.539 128.045 170.874C128.284 171.21 128.614 171.423 129.034 171.514L128.898 175.357C128.102 175.244 127.392 174.951 126.767 174.48C126.136 174.002 125.642 173.349 125.284 172.519C124.92 171.684 124.739 170.681 124.739 169.511C124.739 168.676 124.838 167.906 125.037 167.201C125.23 166.497 125.514 165.883 125.889 165.36C126.259 164.838 126.713 164.434 127.253 164.15C127.793 163.86 128.409 163.715 129.102 163.715H138V167.636H136.176V167.738C136.619 167.971 136.994 168.269 137.301 168.633C137.608 168.991 137.838 169.414 137.991 169.903C138.145 170.386 138.222 170.931 138.222 171.539ZM135.494 170.252C135.494 169.803 135.403 169.4 135.222 169.042C135.04 168.678 134.79 168.389 134.472 168.173C134.148 167.957 133.773 167.849 133.347 167.849H132.102C132.165 167.968 132.222 168.113 132.273 168.284C132.324 168.448 132.372 168.63 132.418 168.829C132.463 169.028 132.503 169.232 132.537 169.443C132.571 169.653 132.602 169.855 132.631 170.048C132.693 170.44 132.79 170.775 132.92 171.053C133.051 171.326 133.222 171.536 133.432 171.684C133.636 171.826 133.881 171.897 134.165 171.897C134.597 171.897 134.926 171.744 135.153 171.437C135.381 171.124 135.494 170.73 135.494 170.252Z"
    fill="#E89C31"
  />
</svg>

              </div>
             
             
              <div
                className="flex-container-i1221104111-cmUncO"
                data-id="I1:221;104:111-container"
              >
                <svg
  width={364}
  height={212}
  viewBox="0 0 364 212"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M118.415 14.1591H124.983C124.983 17.2955 124.581 19.9924 123.778 22.25C122.975 24.5076 121.559 26.2424 119.528 27.4545C117.498 28.6515 114.642 29.25 110.96 29.25V23.9318C113.354 23.9318 115.066 23.5379 116.097 22.75C117.142 21.947 117.786 20.8182 118.028 19.3636C118.286 17.8939 118.415 16.1591 118.415 14.1591ZM102.869 15.4545H114.097V45.4773C114.097 48.947 113.271 51.9697 111.619 54.5455C109.968 57.1061 107.665 59.0909 104.71 60.5C101.756 61.8939 98.3239 62.5909 94.4148 62.5909C90.4602 62.5909 87.0057 61.8939 84.0511 60.5C81.0966 59.0909 78.8011 57.1061 77.1648 54.5455C75.5284 51.9697 74.7102 48.947 74.7102 45.4773V15.4545H85.9602V44.5C85.9602 46.1061 86.3087 47.5379 87.0057 48.7955C87.7178 50.053 88.7102 51.0379 89.983 51.75C91.2557 52.4621 92.733 52.8182 94.4148 52.8182C96.0966 52.8182 97.5663 52.4621 98.8239 51.75C100.097 51.0379 101.089 50.053 101.801 48.7955C102.513 47.5379 102.869 46.1061 102.869 44.5V15.4545Z"
    fill="#E89C31"
  />
  <path
    d="M199.716 13.5455H206.261C206.261 18.0758 205.314 21.5985 203.42 24.1136C201.527 26.6288 198.481 27.8864 194.284 27.8864V22.7045C196.436 22.7045 197.875 21.9015 198.602 20.2955C199.345 18.6894 199.716 16.4394 199.716 13.5455ZM201.58 38.7273C201.58 43.8485 200.595 48.1894 198.625 51.75C196.655 55.3106 193.989 58.0152 190.625 59.8636C187.277 61.7121 183.519 62.6364 179.352 62.6364C175.17 62.6364 171.405 61.7045 168.057 59.8409C164.708 57.9773 162.049 55.2727 160.08 51.7273C158.125 48.1667 157.148 43.8333 157.148 38.7273C157.148 33.6061 158.125 29.2652 160.08 25.7045C162.049 22.1439 164.708 19.4394 168.057 17.5909C171.405 15.7424 175.17 14.8182 179.352 14.8182C183.519 14.8182 187.277 15.7424 190.625 17.5909C193.989 19.4394 196.655 22.1439 198.625 25.7045C200.595 29.2652 201.58 33.6061 201.58 38.7273ZM190.08 38.7273C190.08 35.697 189.648 33.1364 188.784 31.0455C187.936 28.9545 186.708 27.3712 185.102 26.2955C183.511 25.2197 181.595 24.6818 179.352 24.6818C177.125 24.6818 175.208 25.2197 173.602 26.2955C171.996 27.3712 170.761 28.9545 169.898 31.0455C169.049 33.1364 168.625 35.697 168.625 38.7273C168.625 41.7576 169.049 44.3182 169.898 46.4091C170.761 48.5 171.996 50.0833 173.602 51.1591C175.208 52.2348 177.125 52.7727 179.352 52.7727C181.595 52.7727 183.511 52.2348 185.102 51.1591C186.708 50.0833 187.936 48.5 188.784 46.4091C189.648 44.3182 190.08 41.7576 190.08 38.7273Z"
    fill="#E89C31"
  />
  <path
    d="M283.449 15.4545V62H273.903L255.381 35.1364H255.085V62H243.835V15.4545H253.517L271.835 42.2727H272.222V15.4545H283.449Z"
    fill="#E89C31"
  />
  <path
    d="M32.0057 30.6591C31.7481 29.7045 31.3693 28.8636 30.8693 28.1364C30.3693 27.3939 29.7557 26.7652 29.0284 26.25C28.3011 25.7348 27.4678 25.3485 26.5284 25.0909C25.589 24.8182 24.5587 24.6818 23.4375 24.6818C21.1799 24.6818 19.2254 25.2273 17.5739 26.3182C15.9375 27.4091 14.6723 29 13.7784 31.0909C12.8845 33.1667 12.4375 35.6894 12.4375 38.6591C12.4375 41.6439 12.8693 44.1894 13.733 46.2955C14.5966 48.4015 15.8466 50.0076 17.483 51.1136C19.1193 52.2197 21.1042 52.7727 23.4375 52.7727C25.4981 52.7727 27.2405 52.4394 28.6648 51.7727C30.1042 51.0909 31.1951 50.1288 31.9375 48.8864C32.6799 47.6439 33.0511 46.1818 33.0511 44.5L35.142 44.75H23.8239V36.5455H43.892V42.7045C43.892 46.8712 43.0057 50.4394 41.233 53.4091C39.4754 56.3788 37.0511 58.6591 33.9602 60.25C30.8845 61.8409 27.3466 62.6364 23.3466 62.6364C18.9072 62.6364 15.0057 61.6742 11.642 59.75C8.27841 57.8258 5.6572 55.0833 3.77841 51.5227C1.89962 47.947 0.960227 43.7045 0.960227 38.7955C0.960227 34.9773 1.52841 31.5909 2.66477 28.6364C3.80114 25.6667 5.38447 23.1515 7.41477 21.0909C9.46023 19.0303 11.8239 17.4697 14.5057 16.4091C17.2027 15.3485 20.1042 14.8182 23.2102 14.8182C25.9072 14.8182 28.4148 15.2045 30.733 15.9773C33.0663 16.75 35.1269 17.8409 36.9148 19.25C38.7178 20.6591 40.1799 22.3333 41.3011 24.2727C42.4223 26.2121 43.1193 28.3409 43.392 30.6591H32.0057Z"
    fill="#E89C31"
  />
  <path
    d="M339.006 30.6591C338.748 29.7045 338.369 28.8636 337.869 28.1364C337.369 27.3939 336.756 26.7652 336.028 26.25C335.301 25.7348 334.468 25.3485 333.528 25.0909C332.589 24.8182 331.559 24.6818 330.438 24.6818C328.18 24.6818 326.225 25.2273 324.574 26.3182C322.938 27.4091 321.672 29 320.778 31.0909C319.884 33.1667 319.438 35.6894 319.438 38.6591C319.438 41.6439 319.869 44.1894 320.733 46.2955C321.597 48.4015 322.847 50.0076 324.483 51.1136C326.119 52.2197 328.104 52.7727 330.438 52.7727C332.498 52.7727 334.241 52.4394 335.665 51.7727C337.104 51.0909 338.195 50.1288 338.938 48.8864C339.68 47.6439 340.051 46.1818 340.051 44.5L342.142 44.75H330.824V36.5455H350.892V42.7045C350.892 46.8712 350.006 50.4394 348.233 53.4091C346.475 56.3788 344.051 58.6591 340.96 60.25C337.884 61.8409 334.347 62.6364 330.347 62.6364C325.907 62.6364 322.006 61.6742 318.642 59.75C315.278 57.8258 312.657 55.0833 310.778 51.5227C308.9 47.947 307.96 43.7045 307.96 38.7955C307.96 34.9773 308.528 31.5909 309.665 28.6364C310.801 25.6667 312.384 23.1515 314.415 21.0909C316.46 19.0303 318.824 17.4697 321.506 16.4091C324.203 15.3485 327.104 14.8182 330.21 14.8182C332.907 14.8182 335.415 15.2045 337.733 15.9773C340.066 16.75 342.127 17.8409 343.915 19.25C345.718 20.6591 347.18 22.3333 348.301 24.2727C349.422 26.2121 350.119 28.3409 350.392 30.6591H339.006Z"
    fill="#E89C31"
  />
  <path
    d="M262.157 121V107.909H266.12V110.312H266.265C266.538 109.517 266.998 108.889 267.646 108.429C268.293 107.969 269.066 107.739 269.964 107.739C270.873 107.739 271.651 107.972 272.299 108.438C272.947 108.903 273.359 109.528 273.535 110.312H273.671C273.915 109.534 274.393 108.912 275.103 108.446C275.813 107.974 276.651 107.739 277.617 107.739C278.856 107.739 279.862 108.136 280.634 108.932C281.407 109.722 281.793 110.807 281.793 112.188V121H277.626V113.142C277.626 112.489 277.458 111.991 277.123 111.651C276.788 111.304 276.353 111.131 275.819 111.131C275.245 111.131 274.793 111.318 274.464 111.693C274.14 112.062 273.978 112.56 273.978 113.185V121H269.972V113.099C269.972 112.491 269.808 112.011 269.478 111.659C269.148 111.307 268.714 111.131 268.174 111.131C267.81 111.131 267.489 111.219 267.211 111.395C266.933 111.565 266.714 111.81 266.555 112.128C266.401 112.446 266.325 112.821 266.325 113.253V121H262.157ZM290.466 121.222C289.631 121.222 288.889 121.082 288.242 120.804C287.6 120.52 287.091 120.094 286.716 119.526C286.347 118.952 286.162 118.233 286.162 117.369C286.162 116.642 286.29 116.028 286.546 115.528C286.801 115.028 287.154 114.622 287.602 114.31C288.051 113.997 288.568 113.761 289.154 113.602C289.739 113.437 290.364 113.327 291.029 113.27C291.773 113.202 292.372 113.131 292.827 113.057C293.281 112.977 293.611 112.866 293.815 112.724C294.026 112.577 294.131 112.369 294.131 112.102V112.06C294.131 111.622 293.98 111.284 293.679 111.045C293.378 110.807 292.972 110.688 292.46 110.688C291.909 110.688 291.466 110.807 291.131 111.045C290.796 111.284 290.583 111.614 290.492 112.034L286.648 111.898C286.762 111.102 287.054 110.392 287.526 109.767C288.003 109.136 288.656 108.642 289.486 108.284C290.321 107.92 291.324 107.739 292.494 107.739C293.33 107.739 294.1 107.838 294.804 108.037C295.509 108.23 296.122 108.514 296.645 108.889C297.168 109.259 297.571 109.713 297.855 110.253C298.145 110.793 298.29 111.409 298.29 112.102V121H294.369V119.176H294.267C294.034 119.619 293.736 119.994 293.372 120.301C293.014 120.608 292.591 120.838 292.102 120.991C291.619 121.145 291.074 121.222 290.466 121.222ZM291.753 118.494C292.202 118.494 292.605 118.403 292.963 118.222C293.327 118.04 293.617 117.79 293.833 117.472C294.048 117.148 294.156 116.773 294.156 116.347V115.102C294.037 115.165 293.892 115.222 293.722 115.273C293.557 115.324 293.375 115.372 293.176 115.418C292.977 115.463 292.773 115.503 292.563 115.537C292.352 115.571 292.151 115.602 291.958 115.631C291.565 115.693 291.23 115.79 290.952 115.92C290.679 116.051 290.469 116.222 290.321 116.432C290.179 116.636 290.108 116.881 290.108 117.165C290.108 117.597 290.262 117.926 290.568 118.153C290.881 118.381 291.276 118.494 291.753 118.494ZM294.565 103.699H297.08C297.074 104.562 296.665 105.264 295.852 105.804C295.046 106.344 293.96 106.614 292.597 106.614C291.239 106.614 290.159 106.344 289.358 105.804C288.563 105.264 288.168 104.562 288.173 103.699H290.628C290.622 104.028 290.77 104.332 291.071 104.611C291.372 104.889 291.881 105.028 292.597 105.028C293.313 105.028 293.818 104.889 294.114 104.611C294.409 104.332 294.56 104.028 294.565 103.699ZM291.506 103.81L293.091 101.679H295.793L293.611 103.81H291.506ZM310.627 107.909V110.977H302.369V107.909H310.627ZM304.099 104.773H308.267V116.884C308.267 117.139 308.306 117.347 308.386 117.506C308.471 117.659 308.593 117.77 308.752 117.838C308.912 117.901 309.102 117.932 309.323 117.932C309.483 117.932 309.65 117.918 309.826 117.889C310.008 117.855 310.144 117.827 310.235 117.804L310.866 120.812C310.667 120.869 310.386 120.94 310.022 121.026C309.664 121.111 309.235 121.165 308.735 121.188C307.758 121.233 306.92 121.119 306.221 120.847C305.528 120.568 304.997 120.136 304.627 119.551C304.264 118.966 304.088 118.23 304.099 117.344V104.773ZM327.491 121.188C326.525 121.188 325.648 120.938 324.858 120.438C324.068 119.938 323.437 119.188 322.966 118.188C322.494 117.188 322.258 115.946 322.258 114.463C322.258 112.923 322.503 111.656 322.991 110.662C323.48 109.668 324.119 108.932 324.909 108.455C325.704 107.977 326.56 107.739 327.474 107.739C328.162 107.739 328.75 107.858 329.238 108.097C329.727 108.33 330.131 108.631 330.449 109C330.767 109.369 331.008 109.753 331.173 110.151H331.258V103.545H335.426V121H331.301V118.878H331.173C330.997 119.281 330.747 119.659 330.423 120.011C330.099 120.364 329.693 120.648 329.204 120.864C328.721 121.08 328.15 121.188 327.491 121.188ZM328.94 117.94C329.446 117.94 329.878 117.798 330.236 117.514C330.594 117.224 330.869 116.818 331.062 116.295C331.256 115.773 331.352 115.159 331.352 114.455C331.352 113.739 331.256 113.122 331.062 112.605C330.875 112.088 330.599 111.69 330.236 111.412C329.878 111.134 329.446 110.994 328.94 110.994C328.423 110.994 327.986 111.136 327.628 111.42C327.27 111.705 326.997 112.105 326.81 112.622C326.628 113.139 326.537 113.75 326.537 114.455C326.537 115.159 326.631 115.773 326.818 116.295C327.006 116.818 327.275 117.224 327.628 117.514C327.986 117.798 328.423 117.94 328.94 117.94ZM327.943 107.082V104.756H336.781V107.082H327.943ZM346.572 121.247C345.197 121.247 344.016 120.966 343.027 120.403C342.044 119.835 341.286 119.045 340.751 118.034C340.223 117.017 339.959 115.838 339.959 114.497C339.959 113.151 340.223 111.972 340.751 110.96C341.286 109.943 342.044 109.153 343.027 108.591C344.016 108.023 345.197 107.739 346.572 107.739C347.947 107.739 349.126 108.023 350.109 108.591C351.098 109.153 351.857 109.943 352.385 110.96C352.919 111.972 353.186 113.151 353.186 114.497C353.186 115.838 352.919 117.017 352.385 118.034C351.857 119.045 351.098 119.835 350.109 120.403C349.126 120.966 347.947 121.247 346.572 121.247ZM346.598 118.102C347.098 118.102 347.521 117.949 347.868 117.642C348.214 117.335 348.479 116.909 348.661 116.364C348.848 115.818 348.942 115.187 348.942 114.472C348.942 113.744 348.848 113.108 348.661 112.562C348.479 112.017 348.214 111.591 347.868 111.284C347.521 110.977 347.098 110.824 346.598 110.824C346.081 110.824 345.643 110.977 345.286 111.284C344.933 111.591 344.663 112.017 344.476 112.562C344.294 113.108 344.203 113.744 344.203 114.472C344.203 115.187 344.294 115.818 344.476 116.364C344.663 116.909 344.933 117.335 345.286 117.642C345.643 117.949 346.081 118.102 346.598 118.102ZM347.544 104.091L350.945 106.588H348.311L346.572 105.318L344.774 106.588H342.141L345.55 104.091H347.544ZM351.857 105.148H349.828L349.607 103.955C350.101 103.937 350.456 103.878 350.672 103.776C350.893 103.668 351.004 103.526 351.004 103.349C351.004 103.094 350.871 102.923 350.604 102.838C350.337 102.753 350.001 102.71 349.598 102.71L349.692 101.261C350.891 101.261 351.805 101.429 352.436 101.764C353.072 102.099 353.391 102.577 353.391 103.196C353.391 103.599 353.229 103.912 352.905 104.134C352.587 104.355 352.237 104.5 351.857 104.568V105.148Z"
    fill="#E89C31"
  />
  <path
    d="M332.489 148.545V166H328.321V148.545H332.489ZM343.661 166.247C342.291 166.247 341.11 165.977 340.115 165.438C339.127 164.892 338.365 164.116 337.831 163.111C337.303 162.099 337.038 160.898 337.038 159.506C337.038 158.153 337.306 156.972 337.84 155.96C338.374 154.943 339.127 154.153 340.098 153.591C341.07 153.023 342.215 152.739 343.533 152.739C344.465 152.739 345.317 152.884 346.09 153.173C346.862 153.463 347.53 153.892 348.092 154.46C348.655 155.028 349.092 155.73 349.405 156.565C349.717 157.395 349.874 158.347 349.874 159.42V160.46H338.496V158.04H345.996C345.99 157.597 345.885 157.202 345.681 156.855C345.476 156.509 345.195 156.239 344.837 156.045C344.485 155.847 344.078 155.747 343.618 155.747C343.152 155.747 342.735 155.852 342.365 156.062C341.996 156.267 341.703 156.548 341.487 156.906C341.271 157.259 341.158 157.659 341.146 158.108V160.571C341.146 161.105 341.252 161.574 341.462 161.977C341.672 162.375 341.97 162.685 342.357 162.906C342.743 163.128 343.203 163.239 343.737 163.239C344.107 163.239 344.442 163.187 344.743 163.085C345.044 162.983 345.303 162.832 345.519 162.634C345.735 162.435 345.896 162.19 346.004 161.901L349.831 162.011C349.672 162.869 349.323 163.616 348.783 164.253C348.249 164.884 347.547 165.375 346.678 165.727C345.808 166.074 344.803 166.247 343.661 166.247ZM345.152 151.341L343.456 149.364L341.769 151.341H338.274V151.23L341.965 147.412H344.956L348.638 151.23V151.341H345.152ZM343.465 171.097C342.874 171.097 342.368 170.901 341.948 170.509C341.533 170.116 341.325 169.648 341.325 169.102C341.325 168.557 341.536 168.088 341.956 167.696C342.377 167.304 342.879 167.108 343.465 167.108C344.056 167.108 344.558 167.304 344.973 167.696C345.394 168.088 345.604 168.557 345.604 169.102C345.604 169.648 345.394 170.116 344.973 170.509C344.558 170.901 344.056 171.097 343.465 171.097Z"
    fill="#E89C31"
  />
  <path
    d="M271.423 206.182C270.179 206.182 269.114 206.009 268.227 205.662C267.341 205.315 266.645 204.841 266.139 204.239C265.634 203.636 265.33 202.955 265.227 202.193L269.173 201.972C269.247 202.239 269.384 202.472 269.582 202.67C269.787 202.869 270.051 203.023 270.375 203.131C270.705 203.239 271.091 203.293 271.534 203.293C272.233 203.293 272.81 203.122 273.264 202.781C273.724 202.446 273.955 201.858 273.955 201.017V198.716H273.81C273.645 199.119 273.395 199.48 273.06 199.798C272.724 200.116 272.307 200.366 271.807 200.548C271.313 200.73 270.744 200.821 270.102 200.821C269.148 200.821 268.273 200.599 267.477 200.156C266.688 199.707 266.054 199.014 265.577 198.077C265.105 197.134 264.869 195.92 264.869 194.438C264.869 192.909 265.114 191.651 265.602 190.662C266.091 189.668 266.73 188.932 267.52 188.455C268.315 187.977 269.17 187.739 270.085 187.739C270.773 187.739 271.361 187.858 271.849 188.097C272.344 188.33 272.75 188.631 273.068 189C273.386 189.369 273.628 189.753 273.793 190.151H273.912V187.909H278.062V201.051C278.062 202.159 277.784 203.094 277.227 203.855C276.67 204.616 275.892 205.193 274.892 205.585C273.892 205.983 272.736 206.182 271.423 206.182ZM271.551 197.787C272.057 197.787 272.489 197.653 272.847 197.386C273.205 197.119 273.48 196.736 273.673 196.236C273.866 195.736 273.963 195.136 273.963 194.438C273.963 193.727 273.866 193.116 273.673 192.605C273.486 192.088 273.21 191.69 272.847 191.412C272.489 191.134 272.057 190.994 271.551 190.994C271.034 190.994 270.597 191.136 270.239 191.42C269.881 191.705 269.608 192.105 269.42 192.622C269.239 193.134 269.148 193.739 269.148 194.438C269.148 195.136 269.241 195.736 269.429 196.236C269.616 196.736 269.886 197.119 270.239 197.386C270.597 197.653 271.034 197.787 271.551 197.787ZM297.642 187.142H299.85C299.85 188.165 299.693 189.026 299.381 189.724C299.068 190.418 298.546 190.94 297.813 191.293C297.085 191.645 296.094 191.821 294.838 191.821V190.125C295.656 190.125 296.264 190.014 296.662 189.793C297.06 189.571 297.321 189.239 297.446 188.795C297.571 188.352 297.637 187.801 297.642 187.142ZM291.668 195.349V187.909H295.835V201H291.864V198.562H291.727C291.438 199.364 290.943 200 290.244 200.472C289.546 200.937 288.708 201.17 287.73 201.17C286.833 201.17 286.046 200.966 285.369 200.557C284.699 200.148 284.176 199.577 283.801 198.844C283.426 198.105 283.236 197.241 283.23 196.253V187.909H287.398V195.435C287.404 196.145 287.588 196.705 287.952 197.114C288.321 197.523 288.827 197.727 289.469 197.727C289.884 197.727 290.256 197.636 290.585 197.455C290.921 197.267 291.185 196.997 291.378 196.645C291.577 196.287 291.673 195.855 291.668 195.349ZM315.102 187.219H317.36C317.36 188.707 316.997 189.864 316.269 190.688C315.542 191.506 314.397 191.915 312.835 191.915V190.449C313.448 190.449 313.917 190.321 314.241 190.065C314.571 189.81 314.795 189.44 314.914 188.957C315.039 188.474 315.102 187.895 315.102 187.219ZM309.349 201.247C307.974 201.247 306.792 200.966 305.804 200.403C304.821 199.835 304.062 199.045 303.528 198.034C303 197.017 302.735 195.838 302.735 194.497C302.735 193.151 303 191.972 303.528 190.96C304.062 189.943 304.821 189.153 305.804 188.591C306.792 188.023 307.974 187.739 309.349 187.739C310.724 187.739 311.903 188.023 312.886 188.591C313.875 189.153 314.633 189.943 315.162 190.96C315.696 191.972 315.963 193.151 315.963 194.497C315.963 195.838 315.696 197.017 315.162 198.034C314.633 199.045 313.875 199.835 312.886 200.403C311.903 200.966 310.724 201.247 309.349 201.247ZM309.375 198.102C309.875 198.102 310.298 197.949 310.644 197.642C310.991 197.335 311.255 196.909 311.437 196.364C311.625 195.818 311.718 195.187 311.718 194.472C311.718 193.744 311.625 193.108 311.437 192.562C311.255 192.017 310.991 191.591 310.644 191.284C310.298 190.977 309.875 190.824 309.375 190.824C308.858 190.824 308.42 190.977 308.062 191.284C307.71 191.591 307.44 192.017 307.252 192.562C307.071 193.108 306.98 193.744 306.98 194.472C306.98 195.187 307.071 195.818 307.252 196.364C307.44 196.909 307.71 197.335 308.062 197.642C308.42 197.949 308.858 198.102 309.375 198.102ZM325.251 193.534V201H321.084V187.909H325.047V190.312H325.191C325.481 189.511 325.976 188.884 326.674 188.429C327.373 187.969 328.206 187.739 329.172 187.739C330.092 187.739 330.89 187.946 331.566 188.361C332.248 188.77 332.777 189.344 333.152 190.082C333.532 190.815 333.72 191.673 333.714 192.656V201H329.547V193.474C329.552 192.747 329.368 192.179 328.993 191.77C328.623 191.361 328.109 191.156 327.45 191.156C327.013 191.156 326.626 191.253 326.291 191.446C325.961 191.634 325.706 191.903 325.524 192.256C325.348 192.608 325.257 193.034 325.251 193.534ZM344.797 206.182C343.552 206.182 342.487 206.009 341.601 205.662C340.714 205.315 340.018 204.841 339.513 204.239C339.007 203.636 338.703 202.955 338.601 202.193L342.547 201.972C342.621 202.239 342.757 202.472 342.956 202.67C343.16 202.869 343.425 203.023 343.748 203.131C344.078 203.239 344.464 203.293 344.908 203.293C345.606 203.293 346.183 203.122 346.638 202.781C347.098 202.446 347.328 201.858 347.328 201.017V198.716H347.183C347.018 199.119 346.768 199.48 346.433 199.798C346.098 200.116 345.68 200.366 345.18 200.548C344.686 200.73 344.118 200.821 343.476 200.821C342.521 200.821 341.646 200.599 340.851 200.156C340.061 199.707 339.427 199.014 338.95 198.077C338.479 197.134 338.243 195.92 338.243 194.438C338.243 192.909 338.487 191.651 338.976 190.662C339.464 189.668 340.104 188.932 340.893 188.455C341.689 187.977 342.544 187.739 343.459 187.739C344.146 187.739 344.734 187.858 345.223 188.097C345.717 188.33 346.123 188.631 346.442 189C346.76 189.369 347.001 189.753 347.166 190.151H347.285V187.909H351.436V201.051C351.436 202.159 351.158 203.094 350.601 203.855C350.044 204.616 349.265 205.193 348.265 205.585C347.265 205.983 346.109 206.182 344.797 206.182ZM344.925 197.787C345.43 197.787 345.862 197.653 346.22 197.386C346.578 197.119 346.854 196.736 347.047 196.236C347.24 195.736 347.337 195.136 347.337 194.438C347.337 193.727 347.24 193.116 347.047 192.605C346.859 192.088 346.584 191.69 346.22 191.412C345.862 191.134 345.43 190.994 344.925 190.994C344.408 190.994 343.97 191.136 343.612 191.42C343.254 191.705 342.981 192.105 342.794 192.622C342.612 193.134 342.521 193.739 342.521 194.438C342.521 195.136 342.615 195.736 342.802 196.236C342.99 196.736 343.26 197.119 343.612 197.386C343.97 197.653 344.408 197.787 344.925 197.787Z"
    fill="#E89C31"
  />
  <path
    d="M16.8821 192.909V195.977H8.62358V192.909H16.8821ZM10.3537 189.773H14.5213V201.884C14.5213 202.139 14.5611 202.347 14.6406 202.506C14.7259 202.659 14.848 202.77 15.0071 202.838C15.1662 202.901 15.3565 202.932 15.5781 202.932C15.7372 202.932 15.9048 202.918 16.081 202.889C16.2628 202.855 16.3991 202.827 16.4901 202.804L17.1207 205.812C16.9219 205.869 16.6406 205.94 16.277 206.026C15.919 206.111 15.4901 206.165 14.9901 206.188C14.0128 206.233 13.1747 206.119 12.4759 205.847C11.7827 205.568 11.2514 205.136 10.8821 204.551C10.5185 203.966 10.3423 203.23 10.3537 202.344V189.773ZM25.8574 198.534V206H21.6898V188.545H25.721V195.312H25.8659C26.1614 194.506 26.6443 193.875 27.3148 193.42C27.9909 192.966 28.8176 192.739 29.7949 192.739C30.7153 192.739 31.5165 192.943 32.1983 193.352C32.8801 193.756 33.4085 194.327 33.7835 195.065C34.1642 195.804 34.3517 196.668 34.346 197.656V206H30.1784V198.474C30.1841 197.747 30.0023 197.179 29.633 196.77C29.2636 196.361 28.7438 196.156 28.0733 196.156C27.6358 196.156 27.2494 196.253 26.9142 196.446C26.5847 196.634 26.3261 196.903 26.1386 197.256C25.9568 197.608 25.8631 198.034 25.8574 198.534ZM53.8703 192.142H56.0777C56.0777 193.165 55.9214 194.026 55.6089 194.724C55.2964 195.418 54.7737 195.94 54.0408 196.293C53.3135 196.645 52.322 196.821 51.0663 196.821V195.125C51.8845 195.125 52.4925 195.014 52.8902 194.793C53.2879 194.571 53.5493 194.239 53.6743 193.795C53.7993 193.352 53.8646 192.801 53.8703 192.142ZM47.8959 200.349V192.909H52.0635V206H48.0919V203.562H47.9555C47.6658 204.364 47.1714 205 46.4726 205.472C45.7737 205.937 44.9357 206.17 43.9584 206.17C43.0607 206.17 42.2737 205.966 41.5976 205.557C40.9271 205.148 40.4044 204.577 40.0294 203.844C39.6544 203.105 39.4641 202.241 39.4584 201.253V192.909H43.626V200.435C43.6317 201.145 43.8163 201.705 44.18 202.114C44.5493 202.523 45.055 202.727 45.697 202.727C46.1118 202.727 46.4839 202.636 46.8135 202.455C47.1487 202.267 47.4129 201.997 47.6061 201.645C47.805 201.287 47.9016 200.855 47.8959 200.349ZM71.33 192.219H73.5885C73.5885 193.707 73.2249 194.864 72.4976 195.688C71.7703 196.506 70.6254 196.915 69.0629 196.915V195.449C69.6766 195.449 70.1453 195.321 70.4692 195.065C70.7987 194.81 71.0232 194.44 71.1425 193.957C71.2675 193.474 71.33 192.895 71.33 192.219ZM65.5771 206.247C64.2021 206.247 63.0203 205.966 62.0317 205.403C61.0487 204.835 60.2902 204.045 59.7561 203.034C59.2277 202.017 58.9635 200.838 58.9635 199.497C58.9635 198.151 59.2277 196.972 59.7561 195.96C60.2902 194.943 61.0487 194.153 62.0317 193.591C63.0203 193.023 64.2021 192.739 65.5771 192.739C66.9521 192.739 68.1311 193.023 69.1141 193.591C70.1027 194.153 70.8612 194.943 71.3896 195.96C71.9237 196.972 72.1908 198.151 72.1908 199.497C72.1908 200.838 71.9237 202.017 71.3896 203.034C70.8612 204.045 70.1027 204.835 69.1141 205.403C68.1311 205.966 66.9521 206.247 65.5771 206.247ZM65.6027 203.102C66.1027 203.102 66.526 202.949 66.8726 202.642C67.2192 202.335 67.4834 201.909 67.6652 201.364C67.8527 200.818 67.9464 200.187 67.9464 199.472C67.9464 198.744 67.8527 198.108 67.6652 197.562C67.4834 197.017 67.2192 196.591 66.8726 196.284C66.526 195.977 66.1027 195.824 65.6027 195.824C65.0857 195.824 64.6482 195.977 64.2902 196.284C63.9379 196.591 63.668 197.017 63.4805 197.562C63.2987 198.108 63.2078 198.744 63.2078 199.472C63.2078 200.187 63.2987 200.818 63.4805 201.364C63.668 201.909 63.9379 202.335 64.2902 202.642C64.6482 202.949 65.0857 203.102 65.6027 203.102ZM81.4793 198.534V206H77.3116V192.909H81.2747V195.312H81.4196C81.7094 194.511 82.2037 193.884 82.9026 193.429C83.6014 192.969 84.4338 192.739 85.3997 192.739C86.3202 192.739 87.1185 192.946 87.7946 193.361C88.4764 193.77 89.0048 194.344 89.3798 195.082C89.7605 195.815 89.948 196.673 89.9423 197.656V206H85.7747V198.474C85.7804 197.747 85.5957 197.179 85.2207 196.77C84.8514 196.361 84.3372 196.156 83.6781 196.156C83.2406 196.156 82.8543 196.253 82.519 196.446C82.1895 196.634 81.9338 196.903 81.752 197.256C81.5759 197.608 81.4849 198.034 81.4793 198.534ZM101.025 211.182C99.7805 211.182 98.7152 211.009 97.8288 210.662C96.9425 210.315 96.2464 209.841 95.7408 209.239C95.2351 208.636 94.9311 207.955 94.8288 207.193L98.7749 206.972C98.8487 207.239 98.9851 207.472 99.1839 207.67C99.3885 207.869 99.6527 208.023 99.9766 208.131C100.306 208.239 100.692 208.293 101.136 208.293C101.835 208.293 102.411 208.122 102.866 207.781C103.326 207.446 103.556 206.858 103.556 206.017V203.716H103.411C103.246 204.119 102.996 204.48 102.661 204.798C102.326 205.116 101.908 205.366 101.408 205.548C100.914 205.73 100.346 205.821 99.7038 205.821C98.7493 205.821 97.8743 205.599 97.0788 205.156C96.2891 204.707 95.6555 204.014 95.1783 203.077C94.7067 202.134 94.4709 200.92 94.4709 199.438C94.4709 197.909 94.7152 196.651 95.2038 195.662C95.6925 194.668 96.3317 193.932 97.1214 193.455C97.9169 192.977 98.772 192.739 99.6868 192.739C100.374 192.739 100.962 192.858 101.451 193.097C101.945 193.33 102.352 193.631 102.67 194C102.988 194.369 103.229 194.753 103.394 195.151H103.513V192.909H107.664V206.051C107.664 207.159 107.386 208.094 106.829 208.855C106.272 209.616 105.494 210.193 104.494 210.585C103.494 210.983 102.337 211.182 101.025 211.182ZM101.153 202.787C101.658 202.787 102.09 202.653 102.448 202.386C102.806 202.119 103.082 201.736 103.275 201.236C103.468 200.736 103.565 200.136 103.565 199.438C103.565 198.727 103.468 198.116 103.275 197.605C103.087 197.088 102.812 196.69 102.448 196.412C102.09 196.134 101.658 195.994 101.153 195.994C100.636 195.994 100.198 196.136 99.8402 196.42C99.4822 196.705 99.2095 197.105 99.022 197.622C98.8402 198.134 98.7493 198.739 98.7493 199.438C98.7493 200.136 98.843 200.736 99.0305 201.236C99.218 201.736 99.4879 202.119 99.8402 202.386C100.198 202.653 100.636 202.787 101.153 202.787Z"
    fill="#E89C31"
  />
</svg>

              </div>
            </div></div>}
            {currentSlide === 3 && <div className="slide3"> <div className="frame-2-QqIeGd slide1" data-id="1:221">
              <img
                className="rectangle-102-cmUncO"
                data-id="I1:221;104:114"
                src="/img/rectangle-101.png"
                alt="Rectangle 102"
              />
              <img
                className="rectangle-101-cmUncO"
                data-id="I1:221;104:93"
                src="/img/image.png"
                alt="Rectangle 101"
              />
              
              <div className="group-64-cmUncO" data-id="I1:221;105:181" style={{ cursor: 'pointer' }} onClick={handleClick}>
              <svg
  width={185}
  height={304}
  viewBox="0 0 185 304"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M39 199.155H9.90909V192.124H21.5852V180.66H9.90909L9.90909 173.643H39V180.66H27.3097V192.124H39V199.155Z"
    fill="#E89C31"
  />
  <path
    d="M39 114.759V122.316L9.90909 112.501V103.14L39 93.3245V100.881L17.2386 107.714V107.941L39 114.759ZM27.5511 115.768L27.5511 99.9722H32.892V115.768H27.5511ZM7.1392 110.214L0.732953 107.344L0.732953 101.194L7.1392 105.484L7.1392 110.214Z"
    fill="#E89C31"
  />
  <path
    d="M20.4489 20.8218V27.9241C19.7197 28.0188 19.0616 28.2129 18.4744 28.5065C17.8873 28.8 17.3854 29.1883 16.9688 29.6712C16.5521 30.1542 16.2348 30.7271 16.017 31.39C15.7898 32.0434 15.6761 32.7678 15.6761 33.5633C15.6761 34.9743 16.0218 36.1911 16.7131 37.2139C17.4044 38.2271 18.4034 39.0084 19.7102 39.5576C21.017 40.0974 22.5985 40.3673 24.4545 40.3673C26.3864 40.3673 28.0057 40.0926 29.3125 39.5434C30.6098 38.9847 31.59 38.2034 32.2528 37.1996C32.9062 36.1864 33.233 34.9885 33.233 33.6059C33.233 32.8294 33.1335 32.1239 32.9347 31.4894C32.7358 30.8455 32.447 30.282 32.0682 29.7991C31.6799 29.3067 31.2112 28.9042 30.6619 28.5917C30.1032 28.2697 29.4735 28.0472 28.7727 27.9241L28.8153 20.8218C30.1032 20.9449 31.3722 21.319 32.6222 21.944C33.8722 22.5595 35.0133 23.407 36.0455 24.4866C37.0682 25.5661 37.8826 26.8824 38.4886 28.4354C39.0947 29.979 39.3977 31.7498 39.3977 33.7479C39.3977 36.3805 38.8201 38.7385 37.6648 40.8218C36.5 42.8957 34.8049 44.5339 32.5795 45.7366C30.3542 46.9392 27.6458 47.5406 24.4545 47.5406C21.2538 47.5406 18.5407 46.9298 16.3153 45.7082C14.09 44.4866 12.3996 42.8341 11.2443 40.7508C10.089 38.6674 9.51136 36.3332 9.51136 33.7479C9.51136 31.9866 9.75758 30.3578 10.25 28.8616C10.733 27.3654 11.4432 26.0491 12.3807 24.9127C13.3087 23.7764 14.4498 22.8531 15.804 22.1428C17.1581 21.4326 18.7064 20.9923 20.4489 20.8218Z"
    fill="#E89C31"
  />
  <path
    d="M15.6193 276.82H9.90909L9.90909 252.232H15.6193V261.053H39V267.985H15.6193L15.6193 276.82Z"
    fill="#E89C31"
  />
  <path
    d="M139.324 269.512V277.268H133.329V269.782C133.329 268.153 133.055 266.776 132.506 265.649C131.947 264.512 131.042 263.655 129.792 263.078C128.533 262.49 126.857 262.197 124.764 262.197C122.671 262.197 121.005 262.49 119.764 263.078C118.514 263.665 117.614 264.531 117.065 265.677C116.506 266.813 116.227 268.215 116.227 269.882V277.396H110.233V269.526C110.233 266.562 110.815 264.01 111.98 261.87C113.135 259.721 114.802 258.063 116.98 256.899C119.149 255.734 121.743 255.151 124.764 255.151C127.794 255.151 130.399 255.734 132.577 256.899C134.755 258.054 136.426 259.706 137.591 261.856C138.746 264.006 139.324 266.558 139.324 269.512ZM110.233 273.234H139.324V280.265H110.233V273.234ZM125.815 284.157H121.923V269.427H125.815V284.157Z"
    fill="#E89C31"
  />
  <path
    d="M124.778 182.492C127.979 182.492 130.692 183.107 132.917 184.339C135.143 185.57 136.833 187.236 137.989 189.339C139.144 191.431 139.721 193.78 139.721 196.384C139.721 198.998 139.139 201.351 137.974 203.444C136.81 205.536 135.119 207.198 132.903 208.429C130.678 209.651 127.97 210.262 124.778 210.262C121.578 210.262 118.864 209.651 116.639 208.429C114.414 207.198 112.723 205.536 111.568 203.444C110.413 201.351 109.835 198.998 109.835 196.384C109.835 193.78 110.413 191.431 111.568 189.339C112.723 187.236 114.414 185.57 116.639 184.339C118.864 183.107 121.578 182.492 124.778 182.492ZM124.778 189.679C122.884 189.679 121.284 189.949 119.977 190.489C118.67 191.019 117.681 191.786 117.008 192.79C116.336 193.785 116 194.982 116 196.384C116 197.776 116.336 198.974 117.008 199.978C117.681 200.982 118.67 201.753 119.977 202.293C121.284 202.823 122.884 203.089 124.778 203.089C126.672 203.089 128.273 202.823 129.579 202.293C130.886 201.753 131.876 200.982 132.548 199.978C133.221 198.974 133.557 197.776 133.557 196.384C133.557 194.982 133.221 193.785 132.548 192.79C131.876 191.786 130.886 191.019 129.579 190.489C128.273 189.949 126.672 189.679 124.778 189.679ZM107.051 193.912V198.969L104.665 199.367C104.627 198.363 104.499 197.648 104.281 197.222C104.054 196.796 103.77 196.588 103.429 196.597C102.917 196.588 102.581 196.843 102.42 197.364C102.259 197.885 102.179 198.548 102.179 199.353L99.2385 199.196C99.2385 196.469 99.5794 194.395 100.261 192.975C100.943 191.554 101.899 190.849 103.131 190.858C103.954 190.849 104.589 191.161 105.034 191.796C105.47 192.43 105.744 193.136 105.858 193.912H107.051Z"
    fill="#E89C31"
  />
  <path
    d="M164.909 92.9801L178 97.4716V102.244L164.909 106.727V102.338L173.926 99.9261V99.7898L164.909 97.3693V92.9801ZM164.142 74.4594V72.252C165.165 72.252 166.026 72.4082 166.724 72.7207C167.418 73.0332 167.94 73.556 168.293 74.2889C168.645 75.0162 168.821 76.0077 168.821 77.2634H167.125C167.125 76.4452 167.014 75.8372 166.793 75.4395C166.571 75.0418 166.239 74.7804 165.795 74.6554C165.352 74.5304 164.801 74.4651 164.142 74.4594ZM172.349 80.4338H164.909V76.2662H178V80.2378H175.562V80.3741C176.364 80.6639 177 81.1582 177.472 81.8571C177.937 82.556 178.17 83.394 178.17 84.3713C178.17 85.269 177.966 86.056 177.557 86.7321C177.148 87.4026 176.577 87.9253 175.844 88.3003C175.105 88.6753 174.241 88.8656 173.253 88.8713H164.909V84.7037H172.435C173.145 84.698 173.705 84.5134 174.114 84.1497C174.523 83.7804 174.727 83.2747 174.727 82.6327C174.727 82.2179 174.636 81.8457 174.455 81.5162C174.267 81.181 173.997 80.9168 173.645 80.7236C173.287 80.5247 172.855 80.4281 172.349 80.4338ZM164.219 56.9997V54.7412C165.707 54.7412 166.864 55.1048 167.688 55.8321C168.506 56.5594 168.915 57.7043 168.915 59.2668H167.449C167.449 58.6531 167.321 58.1844 167.065 57.8605C166.81 57.531 166.44 57.3065 165.957 57.1872C165.474 57.0622 164.895 56.9997 164.219 56.9997ZM178.247 62.7526C178.247 64.1276 177.966 65.3094 177.403 66.298C176.835 67.281 176.045 68.0395 175.034 68.5736C174.017 69.102 172.838 69.3662 171.497 69.3662C170.151 69.3662 168.972 69.102 167.96 68.5736C166.943 68.0395 166.153 67.281 165.591 66.298C165.023 65.3094 164.739 64.1276 164.739 62.7526C164.739 61.3776 165.023 60.1986 165.591 59.2156C166.153 58.227 166.943 57.4685 167.96 56.9401C168.972 56.406 170.151 56.1389 171.497 56.1389C172.838 56.1389 174.017 56.406 175.034 56.9401C176.045 57.4685 176.835 58.227 177.403 59.2156C177.966 60.1986 178.247 61.3776 178.247 62.7526ZM175.102 62.727C175.102 62.227 174.949 61.8037 174.642 61.4571C174.335 61.1105 173.909 60.8463 173.364 60.6645C172.818 60.477 172.187 60.3832 171.472 60.3832C170.744 60.3832 170.108 60.477 169.562 60.6645C169.017 60.8463 168.591 61.1105 168.284 61.4571C167.977 61.8037 167.824 62.227 167.824 62.727C167.824 63.244 167.977 63.6815 168.284 64.0395C168.591 64.3918 169.017 64.6616 169.562 64.8491C170.108 65.031 170.744 65.1219 171.472 65.1219C172.187 65.1219 172.818 65.031 173.364 64.8491C173.909 64.6616 174.335 64.3918 174.642 64.0395C174.949 63.6815 175.102 63.244 175.102 62.727ZM170.534 46.8504H178V51.018H164.909V47.055H167.312V46.9101C166.511 46.6203 165.884 46.126 165.429 45.4271C164.969 44.7283 164.739 43.8959 164.739 42.93C164.739 42.0095 164.946 41.2112 165.361 40.5351C165.77 39.8533 166.344 39.3249 167.082 38.9499C167.815 38.5692 168.673 38.3817 169.656 38.3874H178V42.555H170.474C169.747 42.5493 169.179 42.7339 168.77 43.1089C168.361 43.4783 168.156 43.9925 168.156 44.6516C168.156 45.0891 168.253 45.4754 168.446 45.8107C168.634 46.1402 168.903 46.3959 169.256 46.5777C169.608 46.7538 170.034 46.8447 170.534 46.8504ZM183.182 27.3048C183.182 28.5491 183.009 29.6145 182.662 30.5009C182.315 31.3872 181.841 32.0832 181.239 32.5889C180.636 33.0946 179.955 33.3986 179.193 33.5009L178.972 29.5548C179.239 29.481 179.472 29.3446 179.67 29.1457C179.869 28.9412 180.023 28.677 180.131 28.3531C180.239 28.0236 180.293 27.6372 180.293 27.194C180.293 26.4952 180.122 25.9185 179.781 25.4639C179.446 25.0037 178.858 24.7736 178.017 24.7736H175.716V24.9185C176.119 25.0832 176.48 25.3332 176.798 25.6685C177.116 26.0037 177.366 26.4213 177.548 26.9213C177.73 27.4156 177.821 27.9838 177.821 28.6259C177.821 29.5804 177.599 30.4554 177.156 31.2509C176.707 32.0406 176.014 32.6741 175.077 33.1514C174.134 33.623 172.92 33.8588 171.438 33.8588C169.909 33.8588 168.651 33.6145 167.662 33.1259C166.668 32.6372 165.932 31.998 165.455 31.2082C164.977 30.4128 164.739 29.5577 164.739 28.6429C164.739 27.9554 164.858 27.3673 165.097 26.8787C165.33 26.3844 165.631 25.9781 166 25.6599C166.369 25.3418 166.753 25.1003 167.151 24.9355V24.8162H164.909V20.6656H178.051C179.159 20.6656 180.094 20.944 180.855 21.5009C181.616 22.0577 182.193 22.8361 182.585 23.8361C182.983 24.8361 183.182 25.9923 183.182 27.3048ZM174.787 27.177C174.787 26.6713 174.653 26.2395 174.386 25.8815C174.119 25.5236 173.736 25.248 173.236 25.0548C172.736 24.8616 172.136 24.7651 171.438 24.7651C170.727 24.7651 170.116 24.8616 169.605 25.0548C169.088 25.2423 168.69 25.5179 168.412 25.8815C168.134 26.2395 167.994 26.6713 167.994 27.177C167.994 27.694 168.136 28.1315 168.42 28.4895C168.705 28.8474 169.105 29.1202 169.622 29.3077C170.134 29.4895 170.739 29.5804 171.438 29.5804C172.136 29.5804 172.736 29.4866 173.236 29.2991C173.736 29.1116 174.119 28.8418 174.386 28.4895C174.653 28.1315 174.787 27.694 174.787 27.177Z"
    fill="#E89C31"
  />
  <path
    d="M180.188 274.773C180.188 275.739 179.938 276.616 179.438 277.406C178.938 278.196 178.188 278.827 177.188 279.298C176.188 279.77 174.946 280.006 173.463 280.006C171.923 280.006 170.656 279.761 169.662 279.273C168.668 278.784 167.932 278.145 167.455 277.355C166.977 276.56 166.739 275.705 166.739 274.79C166.739 274.102 166.858 273.514 167.097 273.026C167.33 272.537 167.631 272.134 168 271.815C168.369 271.497 168.753 271.256 169.151 271.091V271.006H162.545V266.838H180V270.963H177.878V271.091C178.281 271.267 178.659 271.517 179.011 271.841C179.364 272.165 179.648 272.571 179.864 273.06C180.08 273.543 180.188 274.114 180.188 274.773ZM176.94 273.324C176.94 272.818 176.798 272.386 176.514 272.028C176.224 271.67 175.818 271.395 175.295 271.202C174.773 271.009 174.159 270.912 173.455 270.912C172.739 270.912 172.122 271.009 171.605 271.202C171.088 271.389 170.69 271.665 170.412 272.028C170.134 272.386 169.994 272.818 169.994 273.324C169.994 273.841 170.136 274.278 170.42 274.636C170.705 274.994 171.105 275.267 171.622 275.455C172.139 275.636 172.75 275.727 173.455 275.727C174.159 275.727 174.773 275.634 175.295 275.446C175.818 275.259 176.224 274.989 176.514 274.636C176.798 274.278 176.94 273.841 176.94 273.324ZM180.222 258.112C180.222 258.947 180.082 259.689 179.804 260.337C179.52 260.979 179.094 261.487 178.526 261.862C177.952 262.231 177.233 262.416 176.369 262.416C175.642 262.416 175.028 262.288 174.528 262.033C174.028 261.777 173.622 261.425 173.31 260.976C172.997 260.527 172.761 260.01 172.602 259.425C172.437 258.839 172.327 258.214 172.27 257.55C172.202 256.805 172.131 256.206 172.057 255.751C171.977 255.297 171.866 254.967 171.724 254.763C171.577 254.552 171.369 254.447 171.102 254.447H171.06C170.622 254.447 170.284 254.598 170.045 254.899C169.807 255.2 169.688 255.606 169.688 256.118C169.688 256.669 169.807 257.112 170.045 257.447C170.284 257.783 170.614 257.996 171.034 258.087L170.898 261.93C170.102 261.817 169.392 261.524 168.767 261.052C168.136 260.575 167.642 259.922 167.284 259.092C166.92 258.257 166.739 257.254 166.739 256.084C166.739 255.248 166.838 254.479 167.037 253.774C167.23 253.069 167.514 252.456 167.889 251.933C168.259 251.41 168.713 251.007 169.253 250.723C169.793 250.433 170.409 250.288 171.102 250.288H180V254.209H178.176V254.311C178.619 254.544 178.994 254.842 179.301 255.206C179.608 255.564 179.838 255.987 179.991 256.476C180.145 256.959 180.222 257.504 180.222 258.112ZM177.494 256.825C177.494 256.376 177.403 255.973 177.222 255.615C177.04 255.251 176.79 254.962 176.472 254.746C176.148 254.53 175.773 254.422 175.347 254.422H174.102C174.165 254.541 174.222 254.686 174.273 254.856C174.324 255.021 174.372 255.203 174.418 255.402C174.463 255.601 174.503 255.805 174.537 256.015C174.571 256.226 174.602 256.427 174.631 256.621C174.693 257.013 174.79 257.348 174.92 257.626C175.051 257.899 175.222 258.109 175.432 258.257C175.636 258.399 175.881 258.47 176.165 258.47C176.597 258.47 176.926 258.317 177.153 258.01C177.381 257.697 177.494 257.302 177.494 256.825ZM165 254.464V257.498L163.568 257.737C163.545 257.135 163.469 256.706 163.338 256.45C163.202 256.194 163.031 256.069 162.827 256.075C162.52 256.069 162.318 256.223 162.222 256.535C162.125 256.848 162.077 257.246 162.077 257.729L160.312 257.635C160.312 255.998 160.517 254.754 160.926 253.902C161.335 253.05 161.909 252.626 162.648 252.632C163.142 252.626 163.523 252.814 163.79 253.194C164.051 253.575 164.216 253.998 164.284 254.464H165ZM180 245.34H166.909V241.172H180V245.34ZM165.384 243.252C165.384 243.837 165.19 244.34 164.804 244.76C164.412 245.181 163.94 245.391 163.389 245.391C162.844 245.391 162.378 245.181 161.991 244.76C161.599 244.34 161.403 243.837 161.403 243.252C161.403 242.661 161.599 242.158 161.991 241.743C162.378 241.323 162.844 241.113 163.389 241.113C163.94 241.113 164.412 241.323 164.804 241.743C165.19 242.158 165.384 242.661 165.384 243.252ZM166.909 215.864L180 220.356V225.129L166.909 229.612V225.222L175.926 222.811V222.674L166.909 220.254V215.864ZM180.222 208.528C180.222 209.363 180.082 210.104 179.804 210.752C179.52 211.394 179.094 211.903 178.526 212.278C177.952 212.647 177.233 212.832 176.369 212.832C175.642 212.832 175.028 212.704 174.528 212.448C174.028 212.192 173.622 211.84 173.31 211.391C172.997 210.942 172.761 210.425 172.602 209.84C172.437 209.255 172.327 208.63 172.27 207.965C172.202 207.221 172.131 206.621 172.057 206.167C171.977 205.712 171.866 205.383 171.724 205.178C171.577 204.968 171.369 204.863 171.102 204.863H171.06C170.622 204.863 170.284 205.013 170.045 205.315C169.807 205.616 169.688 206.022 169.688 206.533C169.688 207.085 169.807 207.528 170.045 207.863C170.284 208.198 170.614 208.411 171.034 208.502L170.898 212.346C170.102 212.232 169.392 211.94 168.767 211.468C168.136 210.991 167.642 210.337 167.284 209.508C166.92 208.673 166.739 207.67 166.739 206.499C166.739 205.664 166.838 204.894 167.037 204.19C167.23 203.485 167.514 202.871 167.889 202.349C168.259 201.826 168.713 201.423 169.253 201.138C169.793 200.849 170.409 200.704 171.102 200.704H180V204.624H178.176V204.727C178.619 204.96 178.994 205.258 179.301 205.621C179.608 205.979 179.838 206.403 179.991 206.891C180.145 207.374 180.222 207.92 180.222 208.528ZM177.494 207.241C177.494 206.792 177.403 206.388 177.222 206.031C177.04 205.667 176.79 205.377 176.472 205.161C176.148 204.945 175.773 204.837 175.347 204.837H174.102C174.165 204.957 174.222 205.102 174.273 205.272C174.324 205.437 174.372 205.619 174.418 205.817C174.463 206.016 174.503 206.221 174.537 206.431C174.571 206.641 174.602 206.843 174.631 207.036C174.693 207.428 174.79 207.763 174.92 208.042C175.051 208.315 175.222 208.525 175.432 208.673C175.636 208.815 175.881 208.886 176.165 208.886C176.597 208.886 176.926 208.732 177.153 208.425C177.381 208.113 177.494 207.718 177.494 207.241ZM165.341 204.667L163.364 206.363L165.341 208.05V211.545H165.23L161.412 207.854V204.863L165.23 201.181H165.341V204.667ZM172.534 191.588H180V195.756H166.909V191.792H169.312V191.648C168.511 191.358 167.884 190.863 167.429 190.165C166.969 189.466 166.739 188.633 166.739 187.667C166.739 186.747 166.946 185.949 167.361 185.273C167.77 184.591 168.344 184.062 169.082 183.687C169.815 183.307 170.673 183.119 171.656 183.125H180V187.292H172.474C171.747 187.287 171.179 187.471 170.77 187.846C170.361 188.216 170.156 188.73 170.156 189.389C170.156 189.827 170.253 190.213 170.446 190.548C170.634 190.878 170.903 191.133 171.256 191.315C171.608 191.491 172.034 191.582 172.534 191.588ZM180 170.588H166.909V166.625H169.312V166.48C168.517 166.208 167.889 165.747 167.429 165.1C166.969 164.452 166.739 163.679 166.739 162.782C166.739 161.872 166.972 161.094 167.438 160.446C167.903 159.799 168.528 159.387 169.312 159.211V159.074C168.534 158.83 167.912 158.353 167.446 157.642C166.974 156.932 166.739 156.094 166.739 155.128C166.739 153.889 167.136 152.884 167.932 152.111C168.722 151.338 169.807 150.952 171.188 150.952H180V155.12H172.142C171.489 155.12 170.991 155.287 170.651 155.622C170.304 155.958 170.131 156.392 170.131 156.926C170.131 157.5 170.318 157.952 170.693 158.282C171.062 158.605 171.56 158.767 172.185 158.767H180V162.773H172.099C171.491 162.773 171.011 162.938 170.659 163.267C170.307 163.597 170.131 164.032 170.131 164.571C170.131 164.935 170.219 165.256 170.395 165.534C170.565 165.813 170.81 166.032 171.128 166.191C171.446 166.344 171.821 166.421 172.253 166.421H180V170.588ZM180.222 142.279C180.222 143.114 180.082 143.856 179.804 144.504C179.52 145.146 179.094 145.654 178.526 146.029C177.952 146.399 177.233 146.583 176.369 146.583C175.642 146.583 175.028 146.455 174.528 146.2C174.028 145.944 173.622 145.592 173.31 145.143C172.997 144.694 172.761 144.177 172.602 143.592C172.437 143.007 172.327 142.382 172.27 141.717C172.202 140.972 172.131 140.373 172.057 139.918C171.977 139.464 171.866 139.134 171.724 138.93C171.577 138.72 171.369 138.614 171.102 138.614H171.06C170.622 138.614 170.284 138.765 170.045 139.066C169.807 139.367 169.688 139.774 169.688 140.285C169.688 140.836 169.807 141.279 170.045 141.614C170.284 141.95 170.614 142.163 171.034 142.254L170.898 146.097C170.102 145.984 169.392 145.691 168.767 145.22C168.136 144.742 167.642 144.089 167.284 143.259C166.92 142.424 166.739 141.421 166.739 140.251C166.739 139.416 166.838 138.646 167.037 137.941C167.23 137.237 167.514 136.623 167.889 136.1C168.259 135.578 168.713 135.174 169.253 134.89C169.793 134.6 170.409 134.455 171.102 134.455H180V138.376H178.176V138.478C178.619 138.711 178.994 139.009 179.301 139.373C179.608 139.731 179.838 140.154 179.991 140.643C180.145 141.126 180.222 141.671 180.222 142.279ZM177.494 140.992C177.494 140.543 177.403 140.14 177.222 139.782C177.04 139.418 176.79 139.129 176.472 138.913C176.148 138.697 175.773 138.589 175.347 138.589H174.102C174.165 138.708 174.222 138.853 174.273 139.024C174.324 139.188 174.372 139.37 174.418 139.569C174.463 139.768 174.503 139.972 174.537 140.183C174.571 140.393 174.602 140.595 174.631 140.788C174.693 141.18 174.79 141.515 174.92 141.793C175.051 142.066 175.222 142.276 175.432 142.424C175.636 142.566 175.881 142.637 176.165 142.637C176.597 142.637 176.926 142.484 177.153 142.177C177.381 141.864 177.494 141.47 177.494 140.992ZM165.341 138.418L163.364 140.114L165.341 141.802V145.296H165.23L161.412 141.606V138.614L165.23 134.933H165.341V138.418ZM184.909 127.428C184.909 127.928 184.869 128.399 184.79 128.842C184.716 129.286 184.616 129.666 184.491 129.984L181.466 129.064C181.602 128.655 181.682 128.286 181.705 127.956C181.727 127.621 181.673 127.334 181.543 127.095C181.418 126.851 181.193 126.663 180.869 126.533L180.477 126.371L166.909 131.024V126.661L176.25 124.249V124.112L166.909 121.666V117.277L181.253 122.212C181.969 122.45 182.599 122.788 183.145 123.226C183.696 123.658 184.128 124.217 184.44 124.905C184.753 125.587 184.909 126.428 184.909 127.428Z"
    fill="#E89C31"
  />
</svg>

              </div>
            
              <div
                className="flex-container-i1221104111-cmUncO"
                data-id="I1:221;104:111-container"
              >
              
                <div
                  className="text2-i1221104111-jUUr1z inter-extra-bold-fire-bush-24px"
                  data-id="I1:221;104:111-text2"
                >
                 <svg
  width={310}
  height={236}
  viewBox="0 0 310 236"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M115.244 15.4545H126.472V45.4773C126.472 48.947 125.646 51.9697 123.994 54.5455C122.343 57.1061 120.04 59.0909 117.085 60.5C114.131 61.8939 110.699 62.5909 106.79 62.5909C102.835 62.5909 99.3807 61.8939 96.4261 60.5C93.4716 59.0909 91.1761 57.1061 89.5398 54.5455C87.9034 51.9697 87.0852 48.947 87.0852 45.4773V15.4545H98.3352V44.5C98.3352 46.1061 98.6837 47.5379 99.3807 48.7955C100.093 50.053 101.085 51.0379 102.358 51.75C103.631 52.4621 105.108 52.8182 106.79 52.8182C108.472 52.8182 109.941 52.4621 111.199 51.75C112.472 51.0379 113.464 50.053 114.176 48.7955C114.888 47.5379 115.244 46.1061 115.244 44.5V15.4545ZM100.449 11.1364L94.6534 11.0909C94.6534 8.01515 95.3883 5.68939 96.858 4.11364C98.3277 2.53788 100.116 1.74242 102.222 1.72727C103.343 1.72727 104.297 1.90909 105.085 2.27272C105.888 2.62121 106.593 3.03788 107.199 3.52272C107.82 3.99242 108.396 4.40909 108.926 4.77272C109.472 5.12121 110.047 5.29545 110.653 5.29545C111.517 5.2803 112.153 4.96212 112.562 4.34091C112.987 3.70454 113.206 2.84848 113.222 1.77272L118.926 1.84091C118.881 4.88636 118.131 7.21212 116.676 8.81818C115.222 10.4091 113.449 11.2121 111.358 11.2273C110.206 11.2424 109.229 11.0682 108.426 10.7045C107.623 10.3409 106.926 9.92424 106.335 9.45454C105.759 8.98485 105.206 8.57576 104.676 8.22727C104.146 7.86363 103.562 7.68182 102.926 7.68182C102.184 7.68182 101.585 7.98485 101.131 8.59091C100.676 9.18182 100.449 10.0303 100.449 11.1364Z"
    fill="#E89C31"
  />
  <path
    d="M206.449 15.4545V62H196.903L178.381 35.1364H178.085V62H166.835V15.4545H176.517L194.835 42.2727H195.222V15.4545H206.449Z"
    fill="#E89C31"
  />
  <path
    d="M275.006 30.6591C274.748 29.7045 274.369 28.8636 273.869 28.1364C273.369 27.3939 272.756 26.7652 272.028 26.25C271.301 25.7348 270.468 25.3485 269.528 25.0909C268.589 24.8182 267.559 24.6818 266.438 24.6818C264.18 24.6818 262.225 25.2273 260.574 26.3182C258.938 27.4091 257.672 29 256.778 31.0909C255.884 33.1667 255.438 35.6894 255.438 38.6591C255.438 41.6439 255.869 44.1894 256.733 46.2955C257.597 48.4015 258.847 50.0076 260.483 51.1136C262.119 52.2197 264.104 52.7727 266.438 52.7727C268.498 52.7727 270.241 52.4394 271.665 51.7727C273.104 51.0909 274.195 50.1288 274.938 48.8864C275.68 47.6439 276.051 46.1818 276.051 44.5L278.142 44.75H266.824V36.5455H286.892V42.7045C286.892 46.8712 286.006 50.4394 284.233 53.4091C282.475 56.3788 280.051 58.6591 276.96 60.25C273.884 61.8409 270.347 62.6364 266.347 62.6364C261.907 62.6364 258.006 61.6742 254.642 59.75C251.278 57.8258 248.657 55.0833 246.778 51.5227C244.9 47.947 243.96 43.7045 243.96 38.7955C243.96 34.9773 244.528 31.5909 245.665 28.6364C246.801 25.6667 248.384 23.1515 250.415 21.0909C252.46 19.0303 254.824 17.4697 257.506 16.4091C260.203 15.3485 263.104 14.8182 266.21 14.8182C268.907 14.8182 271.415 15.2045 273.733 15.9773C276.066 16.75 278.127 17.8409 279.915 19.25C281.718 20.6591 283.18 22.3333 284.301 24.2727C285.422 26.2121 286.119 28.3409 286.392 30.6591H275.006Z"
    fill="#E89C31"
  />
  <path
    d="M14.7159 15.4545L25.125 49.5455H25.5114L35.9205 15.4545H48.5114L32.8068 62H17.8295L2.125 15.4545H14.7159Z"
    fill="#E89C31"
  />
  <path
    d="M199.886 115.581L195.394 128.672H190.621L186.138 115.581H190.528L192.939 124.598H193.076L195.496 115.581H199.886ZM209.581 128.919C208.212 128.919 207.03 128.649 206.036 128.109C205.047 127.564 204.286 126.788 203.751 125.782C203.223 124.771 202.959 123.569 202.959 122.177C202.959 120.825 203.226 119.643 203.76 118.632C204.294 117.615 205.047 116.825 206.018 116.263C206.99 115.694 208.135 115.41 209.453 115.41C210.385 115.41 211.237 115.555 212.01 115.845C212.783 116.135 213.45 116.564 214.013 117.132C214.575 117.7 215.013 118.402 215.325 119.237C215.638 120.067 215.794 121.018 215.794 122.092V123.132H204.416V120.711H211.916C211.911 120.268 211.805 119.873 211.601 119.527C211.396 119.18 211.115 118.91 210.757 118.717C210.405 118.518 209.999 118.419 209.538 118.419C209.072 118.419 208.655 118.524 208.286 118.734C207.916 118.939 207.624 119.22 207.408 119.578C207.192 119.93 207.078 120.331 207.067 120.78V123.243C207.067 123.777 207.172 124.245 207.382 124.649C207.592 125.047 207.891 125.356 208.277 125.578C208.663 125.799 209.124 125.91 209.658 125.91C210.027 125.91 210.362 125.859 210.663 125.757C210.964 125.655 211.223 125.504 211.439 125.305C211.655 125.106 211.817 124.862 211.925 124.572L215.751 124.683C215.592 125.541 215.243 126.288 214.703 126.924C214.169 127.555 213.467 128.047 212.598 128.399C211.729 128.745 210.723 128.919 209.581 128.919ZM211.072 114.013L209.376 112.035L207.689 114.013H204.195V113.902L207.885 110.084H210.876L214.558 113.902V114.013H211.072ZM209.385 133.768C208.794 133.768 208.288 133.572 207.868 133.18C207.453 132.788 207.246 132.319 207.246 131.774C207.246 131.228 207.456 130.76 207.876 130.368C208.297 129.976 208.8 129.78 209.385 129.78C209.976 129.78 210.479 129.976 210.893 130.368C211.314 130.76 211.524 131.228 211.524 131.774C211.524 132.319 211.314 132.788 210.893 133.18C210.479 133.572 209.976 133.768 209.385 133.768ZM227.712 115.581V118.649H219.453V115.581H227.712ZM221.183 112.444H225.351V124.555C225.351 124.811 225.391 125.018 225.47 125.177C225.556 125.331 225.678 125.442 225.837 125.51C225.996 125.572 226.186 125.603 226.408 125.603C226.567 125.603 226.735 125.589 226.911 125.561C227.092 125.527 227.229 125.498 227.32 125.476L227.95 128.484C227.752 128.541 227.47 128.612 227.107 128.697C226.749 128.782 226.32 128.836 225.82 128.859C224.842 128.905 224.004 128.791 223.306 128.518C222.612 128.24 222.081 127.808 221.712 127.223C221.348 126.638 221.172 125.902 221.183 125.015V112.444ZM251.223 119.578L247.397 119.68C247.357 119.407 247.249 119.166 247.073 118.956C246.897 118.74 246.667 118.572 246.383 118.453C246.104 118.328 245.78 118.265 245.411 118.265C244.928 118.265 244.516 118.362 244.175 118.555C243.84 118.748 243.675 119.01 243.681 119.339C243.675 119.595 243.777 119.817 243.988 120.004C244.204 120.192 244.587 120.342 245.138 120.456L247.661 120.933C248.968 121.183 249.939 121.598 250.576 122.177C251.218 122.757 251.542 123.524 251.547 124.478C251.542 125.376 251.275 126.157 250.746 126.822C250.223 127.487 249.508 128.004 248.598 128.373C247.689 128.737 246.65 128.919 245.479 128.919C243.61 128.919 242.135 128.535 241.056 127.768C239.982 126.995 239.368 125.961 239.215 124.666L243.331 124.564C243.422 125.041 243.658 125.405 244.039 125.655C244.419 125.905 244.905 126.03 245.496 126.03C246.03 126.03 246.465 125.93 246.8 125.731C247.135 125.532 247.306 125.268 247.312 124.939C247.306 124.643 247.175 124.407 246.919 124.231C246.664 124.049 246.263 123.907 245.718 123.805L243.434 123.37C242.121 123.132 241.144 122.692 240.502 122.049C239.86 121.402 239.542 120.578 239.547 119.578C239.542 118.703 239.775 117.956 240.246 117.336C240.718 116.711 241.388 116.234 242.258 115.905C243.127 115.575 244.152 115.41 245.334 115.41C247.107 115.41 248.505 115.782 249.527 116.527C250.55 117.265 251.115 118.282 251.223 119.578ZM259.689 128.893C258.854 128.893 258.113 128.754 257.465 128.476C256.823 128.192 256.314 127.765 255.939 127.197C255.57 126.623 255.386 125.905 255.386 125.041C255.386 124.314 255.513 123.7 255.769 123.2C256.025 122.7 256.377 122.294 256.826 121.981C257.275 121.669 257.792 121.433 258.377 121.274C258.962 121.109 259.587 120.998 260.252 120.942C260.996 120.873 261.596 120.802 262.05 120.728C262.505 120.649 262.834 120.538 263.039 120.396C263.249 120.248 263.354 120.041 263.354 119.774V119.731C263.354 119.294 263.204 118.956 262.903 118.717C262.601 118.478 262.195 118.359 261.684 118.359C261.133 118.359 260.689 118.478 260.354 118.717C260.019 118.956 259.806 119.285 259.715 119.706L255.871 119.569C255.985 118.774 256.278 118.064 256.749 117.439C257.226 116.808 257.88 116.314 258.709 115.956C259.545 115.592 260.547 115.41 261.718 115.41C262.553 115.41 263.323 115.51 264.028 115.709C264.732 115.902 265.346 116.186 265.868 116.561C266.391 116.93 266.795 117.385 267.079 117.924C267.368 118.464 267.513 119.081 267.513 119.774V128.672H263.593V126.848H263.491C263.258 127.291 262.959 127.666 262.596 127.973C262.238 128.28 261.814 128.51 261.326 128.663C260.843 128.817 260.297 128.893 259.689 128.893ZM260.976 126.166C261.425 126.166 261.829 126.075 262.187 125.893C262.55 125.711 262.84 125.461 263.056 125.143C263.272 124.819 263.38 124.444 263.38 124.018V122.774C263.261 122.836 263.116 122.893 262.945 122.944C262.78 122.995 262.599 123.044 262.4 123.089C262.201 123.135 261.996 123.174 261.786 123.209C261.576 123.243 261.374 123.274 261.181 123.302C260.789 123.365 260.454 123.461 260.175 123.592C259.903 123.723 259.692 123.893 259.545 124.103C259.403 124.308 259.332 124.552 259.332 124.836C259.332 125.268 259.485 125.598 259.792 125.825C260.104 126.052 260.499 126.166 260.976 126.166ZM278.572 128.919C277.197 128.919 276.016 128.638 275.027 128.075C274.044 127.507 273.286 126.717 272.751 125.706C272.223 124.689 271.959 123.51 271.959 122.169C271.959 120.822 272.223 119.643 272.751 118.632C273.286 117.615 274.044 116.825 275.027 116.263C276.016 115.694 277.197 115.41 278.572 115.41C279.947 115.41 281.126 115.694 282.109 116.263C283.098 116.825 283.857 117.615 284.385 118.632C284.919 119.643 285.186 120.822 285.186 122.169C285.186 123.51 284.919 124.689 284.385 125.706C283.857 126.717 283.098 127.507 282.109 128.075C281.126 128.638 279.947 128.919 278.572 128.919ZM278.598 125.774C279.098 125.774 279.521 125.62 279.868 125.314C280.214 125.007 280.479 124.581 280.661 124.035C280.848 123.49 280.942 122.859 280.942 122.143C280.942 121.416 280.848 120.78 280.661 120.234C280.479 119.689 280.214 119.263 279.868 118.956C279.521 118.649 279.098 118.495 278.598 118.495C278.081 118.495 277.643 118.649 277.286 118.956C276.933 119.263 276.663 119.689 276.476 120.234C276.294 120.78 276.203 121.416 276.203 122.143C276.203 122.859 276.294 123.49 276.476 124.035C276.663 124.581 276.933 125.007 277.286 125.314C277.643 125.62 278.081 125.774 278.598 125.774Z"
    fill="#E89C31"
  />
  <path
    d="M237.321 174.463V157.008H241.489V163.613H241.574C241.744 163.215 241.986 162.832 242.298 162.463C242.616 162.093 243.02 161.792 243.509 161.559C244.003 161.321 244.594 161.201 245.281 161.201C246.19 161.201 247.04 161.44 247.83 161.917C248.625 162.394 249.267 163.13 249.756 164.125C250.244 165.119 250.489 166.386 250.489 167.926C250.489 169.409 250.253 170.65 249.781 171.65C249.315 172.65 248.685 173.4 247.889 173.9C247.099 174.4 246.222 174.65 245.256 174.65C244.597 174.65 244.026 174.542 243.543 174.326C243.06 174.11 242.653 173.826 242.324 173.474C242 173.122 241.75 172.744 241.574 172.34H241.446V174.463H237.321ZM241.403 167.917C241.403 168.622 241.497 169.235 241.685 169.758C241.878 170.281 242.153 170.687 242.511 170.977C242.875 171.261 243.31 171.403 243.815 171.403C244.327 171.403 244.761 171.261 245.119 170.977C245.477 170.687 245.747 170.281 245.929 169.758C246.116 169.235 246.21 168.622 246.21 167.917C246.21 167.213 246.116 166.602 245.929 166.085C245.747 165.568 245.477 165.167 245.119 164.883C244.767 164.599 244.332 164.457 243.815 164.457C243.304 164.457 242.869 164.596 242.511 164.875C242.153 165.153 241.878 165.551 241.685 166.068C241.497 166.585 241.403 167.201 241.403 167.917ZM258.763 174.684C257.928 174.684 257.186 174.545 256.538 174.267C255.896 173.983 255.388 173.556 255.013 172.988C254.644 172.414 254.459 171.696 254.459 170.832C254.459 170.105 254.587 169.491 254.842 168.991C255.098 168.491 255.45 168.085 255.899 167.772C256.348 167.46 256.865 167.224 257.45 167.065C258.036 166.9 258.661 166.789 259.325 166.733C260.07 166.664 260.669 166.593 261.124 166.519C261.578 166.44 261.908 166.329 262.112 166.187C262.323 166.039 262.428 165.832 262.428 165.565V165.522C262.428 165.085 262.277 164.747 261.976 164.508C261.675 164.269 261.269 164.15 260.757 164.15C260.206 164.15 259.763 164.269 259.428 164.508C259.092 164.747 258.879 165.076 258.788 165.497L254.945 165.36C255.058 164.565 255.351 163.855 255.823 163.23C256.3 162.599 256.953 162.105 257.783 161.747C258.618 161.383 259.621 161.201 260.791 161.201C261.627 161.201 262.396 161.301 263.101 161.5C263.806 161.693 264.419 161.977 264.942 162.352C265.465 162.721 265.868 163.176 266.152 163.715C266.442 164.255 266.587 164.872 266.587 165.565V174.463H262.666V172.639H262.564C262.331 173.082 262.033 173.457 261.669 173.764C261.311 174.071 260.888 174.301 260.399 174.454C259.916 174.608 259.371 174.684 258.763 174.684ZM260.05 171.957C260.499 171.957 260.902 171.866 261.26 171.684C261.624 171.502 261.913 171.252 262.129 170.934C262.345 170.61 262.453 170.235 262.453 169.809V168.565C262.334 168.627 262.189 168.684 262.019 168.735C261.854 168.787 261.672 168.835 261.473 168.88C261.274 168.926 261.07 168.965 260.86 169C260.649 169.034 260.448 169.065 260.254 169.093C259.862 169.156 259.527 169.252 259.249 169.383C258.976 169.514 258.766 169.684 258.618 169.894C258.476 170.099 258.405 170.343 258.405 170.627C258.405 171.059 258.558 171.389 258.865 171.616C259.178 171.843 259.573 171.957 260.05 171.957ZM273.615 179.372C273.115 179.372 272.643 179.332 272.2 179.252C271.757 179.179 271.376 179.079 271.058 178.954L271.978 175.929C272.387 176.065 272.757 176.144 273.086 176.167C273.421 176.19 273.708 176.136 273.947 176.005C274.191 175.88 274.379 175.656 274.51 175.332L274.671 174.94L270.018 161.372H274.382L276.794 170.713H276.93L279.376 161.372H283.765L278.831 175.715C278.592 176.431 278.254 177.062 277.816 177.608C277.385 178.159 276.825 178.59 276.137 178.903C275.456 179.215 274.615 179.372 273.615 179.372Z"
    fill="#E89C31"
  />
  <path
    d="M191.489 211.614V219.08H187.321V201.625H191.352V208.392H191.497C191.793 207.585 192.276 206.955 192.946 206.5C193.622 206.045 194.449 205.818 195.426 205.818C196.347 205.818 197.148 206.023 197.83 206.432C198.511 206.835 199.04 207.406 199.415 208.145C199.795 208.884 199.983 209.747 199.977 210.736V219.08H195.81V211.554C195.815 210.827 195.634 210.259 195.264 209.849C194.895 209.44 194.375 209.236 193.705 209.236C193.267 209.236 192.881 209.332 192.545 209.526C192.216 209.713 191.957 209.983 191.77 210.335C191.588 210.688 191.494 211.114 191.489 211.614ZM211.09 219.327C209.715 219.327 208.533 219.045 207.544 218.483C206.561 217.915 205.803 217.125 205.269 216.114C204.74 215.097 204.476 213.918 204.476 212.577C204.476 211.23 204.74 210.051 205.269 209.04C205.803 208.023 206.561 207.233 207.544 206.67C208.533 206.102 209.715 205.818 211.09 205.818C212.465 205.818 213.644 206.102 214.627 206.67C215.615 207.233 216.374 208.023 216.902 209.04C217.436 210.051 217.703 211.23 217.703 212.577C217.703 213.918 217.436 215.097 216.902 216.114C216.374 217.125 215.615 217.915 214.627 218.483C213.644 219.045 212.465 219.327 211.09 219.327ZM211.115 216.182C211.615 216.182 212.038 216.028 212.385 215.722C212.732 215.415 212.996 214.989 213.178 214.443C213.365 213.898 213.459 213.267 213.459 212.551C213.459 211.824 213.365 211.188 213.178 210.642C212.996 210.097 212.732 209.67 212.385 209.364C212.038 209.057 211.615 208.903 211.115 208.903C210.598 208.903 210.161 209.057 209.803 209.364C209.45 209.67 209.181 210.097 208.993 210.642C208.811 211.188 208.72 211.824 208.72 212.551C208.72 213.267 208.811 213.898 208.993 214.443C209.181 214.989 209.45 215.415 209.803 215.722C210.161 216.028 210.598 216.182 211.115 216.182ZM212.07 202.188L215.513 204.685H212.845L211.09 203.372L209.308 204.685H206.666L210.084 202.188H212.07ZM205.422 200.159L207.553 203.372H205.431L202.55 200.159H205.422ZM226.406 211.614V219.08H222.238V205.989H226.201V208.392H226.346C226.636 207.591 227.13 206.963 227.829 206.509C228.528 206.048 229.36 205.818 230.326 205.818C231.247 205.818 232.045 206.026 232.721 206.44C233.403 206.849 233.931 207.423 234.306 208.162C234.687 208.895 234.875 209.753 234.869 210.736V219.08H230.701V211.554C230.707 210.827 230.522 210.259 230.147 209.849C229.778 209.44 229.264 209.236 228.605 209.236C228.167 209.236 227.781 209.332 227.446 209.526C227.116 209.713 226.86 209.983 226.679 210.335C226.502 210.688 226.412 211.114 226.406 211.614ZM254.795 205.989V209.057H246.536V205.989H254.795ZM248.266 202.852H252.434V214.963C252.434 215.219 252.474 215.426 252.553 215.585C252.638 215.739 252.761 215.849 252.92 215.918C253.079 215.98 253.269 216.011 253.491 216.011C253.65 216.011 253.817 215.997 253.993 215.969C254.175 215.935 254.312 215.906 254.403 215.884L255.033 218.892C254.834 218.949 254.553 219.02 254.189 219.105C253.832 219.19 253.403 219.244 252.903 219.267C251.925 219.313 251.087 219.199 250.388 218.926C249.695 218.648 249.164 218.216 248.795 217.631C248.431 217.045 248.255 216.31 248.266 215.423V202.852ZM265.291 219.327C263.916 219.327 262.734 219.045 261.746 218.483C260.763 217.915 260.004 217.125 259.47 216.114C258.942 215.097 258.678 213.918 258.678 212.577C258.678 211.23 258.942 210.051 259.47 209.04C260.004 208.023 260.763 207.233 261.746 206.67C262.734 206.102 263.916 205.818 265.291 205.818C266.666 205.818 267.845 206.102 268.828 206.67C269.817 207.233 270.575 208.023 271.104 209.04C271.638 210.051 271.905 211.23 271.905 212.577C271.905 213.918 271.638 215.097 271.104 216.114C270.575 217.125 269.817 217.915 268.828 218.483C267.845 219.045 266.666 219.327 265.291 219.327ZM265.317 216.182C265.817 216.182 266.24 216.028 266.587 215.722C266.933 215.415 267.197 214.989 267.379 214.443C267.567 213.898 267.661 213.267 267.661 212.551C267.661 211.824 267.567 211.188 267.379 210.642C267.197 210.097 266.933 209.67 266.587 209.364C266.24 209.057 265.817 208.903 265.317 208.903C264.8 208.903 264.362 209.057 264.004 209.364C263.652 209.67 263.382 210.097 263.195 210.642C263.013 211.188 262.922 211.824 262.922 212.551C262.922 213.267 263.013 213.898 263.195 214.443C263.382 214.989 263.652 215.415 264.004 215.722C264.362 216.028 264.8 216.182 265.317 216.182ZM266.987 204.42L265.291 202.443L263.604 204.42H260.109V204.31L263.8 200.492H266.791L270.473 204.31V204.42H266.987ZM276.44 219.08V205.989H280.607V219.08H276.44ZM278.528 204.463C277.943 204.463 277.44 204.27 277.019 203.884C276.599 203.492 276.389 203.02 276.389 202.469C276.389 201.923 276.599 201.457 277.019 201.071C277.44 200.679 277.943 200.483 278.528 200.483C279.119 200.483 279.622 200.679 280.036 201.071C280.457 201.457 280.667 201.923 280.667 202.469C280.667 203.02 280.457 203.492 280.036 203.884C279.622 204.27 279.119 204.463 278.528 204.463Z"
    fill="#E89C31"
  />
  <path
    d="M15.3974 223.989V216.957H15.3122C15.1361 217.361 14.8861 217.739 14.5622 218.091C14.2384 218.443 13.8321 218.727 13.3435 218.943C12.8605 219.159 12.2895 219.267 11.6304 219.267C10.6645 219.267 9.78665 219.017 8.99688 218.517C8.2071 218.017 7.57642 217.267 7.10483 216.267C6.63324 215.267 6.39744 214.026 6.39744 212.543C6.39744 211.003 6.64176 209.736 7.1304 208.742C7.61903 207.747 8.25824 207.011 9.04801 206.534C9.84347 206.057 10.6986 205.818 11.6134 205.818C12.3009 205.818 12.8889 205.938 13.3776 206.176C13.8662 206.409 14.2696 206.71 14.5878 207.08C14.906 207.449 15.1474 207.832 15.3122 208.23H15.4401V205.989H19.5651V223.989H15.3974ZM13.0793 216.02C13.5849 216.02 14.0168 215.878 14.3747 215.594C14.7327 215.304 15.0082 214.898 15.2014 214.375C15.3946 213.852 15.4912 213.239 15.4912 212.534C15.4912 211.818 15.3946 211.202 15.2014 210.685C15.0139 210.168 14.7384 209.77 14.3747 209.492C14.0168 209.213 13.5849 209.074 13.0793 209.074C12.5622 209.074 12.1247 209.216 11.7668 209.5C11.4088 209.784 11.1361 210.185 10.9486 210.702C10.7668 211.219 10.6759 211.83 10.6759 212.534C10.6759 213.239 10.7696 213.852 10.9571 214.375C11.1446 214.898 11.4145 215.304 11.7668 215.594C12.1247 215.878 12.5622 216.02 13.0793 216.02ZM33.0467 213.429V205.989H37.2058V219.08H33.2342V216.642H33.0979C32.8081 217.443 32.3138 218.08 31.6149 218.551C30.9217 219.017 30.0837 219.25 29.1007 219.25C28.2087 219.25 27.4246 219.045 26.7484 218.636C26.0723 218.227 25.5467 217.656 25.1717 216.923C24.7967 216.185 24.6064 215.321 24.6007 214.332V205.989H28.7683V213.514C28.774 214.224 28.9615 214.784 29.3308 215.193C29.7001 215.602 30.203 215.807 30.8393 215.807C31.2541 215.807 31.6263 215.716 31.9558 215.534C32.2911 215.347 32.5553 215.077 32.7484 214.724C32.9473 214.367 33.0467 213.935 33.0467 213.429ZM45.9489 219.301C45.1136 219.301 44.3722 219.162 43.7244 218.884C43.0824 218.599 42.5739 218.173 42.1989 217.605C41.8295 217.031 41.6449 216.313 41.6449 215.449C41.6449 214.722 41.7727 214.108 42.0284 213.608C42.2841 213.108 42.6364 212.702 43.0852 212.389C43.5341 212.077 44.0511 211.841 44.6364 211.682C45.2216 211.517 45.8466 211.406 46.5114 211.349C47.2557 211.281 47.8551 211.21 48.3097 211.136C48.7642 211.057 49.0938 210.946 49.2983 210.804C49.5085 210.656 49.6136 210.449 49.6136 210.182V210.139C49.6136 209.702 49.4631 209.364 49.1619 209.125C48.8608 208.886 48.4545 208.767 47.9432 208.767C47.392 208.767 46.9489 208.886 46.6136 209.125C46.2784 209.364 46.0653 209.693 45.9744 210.114L42.1307 209.977C42.2443 209.182 42.5369 208.472 43.0085 207.847C43.4858 207.216 44.1392 206.722 44.9688 206.364C45.804 206 46.8068 205.818 47.9773 205.818C48.8125 205.818 49.5824 205.918 50.2869 206.117C50.9915 206.31 51.6051 206.594 52.1278 206.969C52.6506 207.338 53.054 207.793 53.3381 208.332C53.6278 208.872 53.7727 209.489 53.7727 210.182V219.08H49.8523V217.256H49.75C49.517 217.699 49.2188 218.074 48.8551 218.381C48.4972 218.688 48.0739 218.918 47.5852 219.071C47.1023 219.224 46.5568 219.301 45.9489 219.301ZM47.2358 216.574C47.6847 216.574 48.0881 216.483 48.446 216.301C48.8097 216.119 49.0994 215.869 49.3153 215.551C49.5313 215.227 49.6392 214.852 49.6392 214.426V213.182C49.5199 213.244 49.375 213.301 49.2045 213.352C49.0398 213.403 48.858 213.452 48.6591 213.497C48.4602 213.543 48.2557 213.582 48.0455 213.617C47.8352 213.651 47.6335 213.682 47.4403 213.71C47.0483 213.773 46.7131 213.869 46.4347 214C46.1619 214.131 45.9517 214.301 45.804 214.511C45.6619 214.716 45.5909 214.96 45.5909 215.244C45.5909 215.676 45.7443 216.006 46.0511 216.233C46.3636 216.46 46.7585 216.574 47.2358 216.574Z"
    fill="#E89C31"
  />
</svg>

                </div>
              </div>
            </div></div>}
            <img
              className="rectangle-103-QqIeGd"
              data-id="1:222"
              src="/img/rectangle-103.png"
              alt="Rectangle 103"
            />
            <img
              className="rectangle-105-QqIeGd"
              data-id="1:223"
              src="/img/rectangle-105.png"
              alt="Rectangle 105"
            />
            <h1
              className="ha-QqIeGd inter-extra-bold-fire-bush-64px"
              data-id="1:224"
            >
              hòa
            </h1>
            <div
              className="tranh-QqIeGd inter-extra-bold-fire-bush-64px"
              data-id="1:225"
            >
              tranh
            </div>
            <div className="flex-container-1226-QqIeGd" data-id="1:226-container">
              <div
                className="text0-1226-0p8Qqx inter-extra-bold-fire-bush-32px"
                data-id="1:226-text0"
              >
                <span className="span0-nuFBlM inter-extra-bold-fire-bush-32px">
                  Phạm
                  <br />  Minh 
                  <br />  Hiếu
                 </span>
              </div>
              
            </div>
            <div className="flex-container-1227-QqIeGd" data-id="1:227-container">
              <div
                className="text0-1227-f3vvDP inter-extra-bold-fire-bush-32px"
                data-id="1:227-text0"
              >
                <span className="span0-uNxp5W inter-extra-bold-fire-bush-32px">
                  Liên
                  <br />                   Trường

                </span>
              </div>
              
            </div>
            <div
              className="trn-yn-kh-QqIeGd inter-extra-bold-fire-bush-32px"
              data-id="1:228"
            >
              Trần Yên Khê
            </div>
            <img
              className="rectangle-106-QqIeGd"
              data-id="1:229"
              src="/img/rectangle-106@2x.png"
              alt="Rectangle 106"
            />
            <img
              className="rectangle-107-QqIeGd"
              data-id="1:230"
              src="/img/rectangle-107.png"
              alt="Rectangle 107"
            />
            <img
              className="rectangle-108-QqIeGd"
              data-id="1:231"
              src="/img/rectangle-108.png"
              alt="Rectangle 108"
            />
            <img
              className="x4d461084-51ee-41c6-b2ed-2eeb25668ba4-1-QqIeGd"
              data-id="1:232"
              src="/img/4d461084-51ee-41c6-b2ed-2eeb25668ba4-1.png"
              alt="4d461084-51ee-41c6-b2ed-2eeb25668ba4 1"
            />
            <div className="flex-container-1233-QqIeGd" data-id="1:233-container">
              <div
                className="text0-1233-WjWYU6 inter-extra-bold-fire-bush-96px"
                data-id="1:233-text0"
              >
                <span className="span0-h6TRH7 inter-extra-bold-fire-bush-96px">
                  PHẨM
                  <br />
                </span>
              </div>
              <div
                className="text1-1233-WjWYU6 inter-extra-bold-fire-bush-96px"
                data-id="1:233-text1"
              >
                <span className="span1-1sULG2">
                  đã
                  <br />
                </span>
              </div>
              <div
                className="text2-1233-WjWYU6 inter-extra-bold-fire-bush-96px"
                data-id="1:233-text2"
              >
                <span className="span2-hnWNIJ inter-extra-bold-fire-bush-96px">
                  BÁN
                </span>
              </div>
            </div>
            <div className="flex-container-1234-QqIeGd" data-id="1:234-container">
              <div
                className="text0-1234-IYTWyA inter-extra-light-fire-bush-32px"
                data-id="1:234-text0"
              >
                <span className="span0-J8tXXx inter-extra-light-fire-bush-32px" >
                  <a href="/products/all">Xem</a>
                </span>
                <span className="span1-J8tXXx inter-extra-light-fire-bush-32px">
                  <br />
                </span>
              </div>
              <div
                className="text1-1234-IYTWyA inter-extra-light-fire-bush-32px"
                data-id="1:234-text1"
              >
                <span className="span2-k9qVWX inter-extra-light-fire-bush-32px">
                <a href="/products/all">thêm</a>

                </span>
              </div>
            </div>
          
          </div>
          <img className='svgg' src={'/images/a.svg'} alt="" srcset="" />
        </div>
      </div>
  
      
     
      
    </>
  );
};

export default UserHome;

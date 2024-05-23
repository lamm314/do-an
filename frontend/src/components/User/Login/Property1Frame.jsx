import { useMemo } from "react";
import "./Property1Frame.css"
const Property1Frame = ({
    propTop,
    propLeft,
    propLeft1,
    propLeft2,
    propLeft3,
    propLeft4,
    propLeft5,
    propLeft6,
    propLeft7,
    propLeft8,
    propLeft9,
    propLeft10,
    propLeft11,
    propLeft12,
  }) => {
    const property1Frame10Style = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
      };
    }, [propTop, propLeft]);
  
    const rectangleIconStyle = useMemo(() => {
      return {
        left: propLeft1,
      };
    }, [propLeft1]);
  
    const rectangleIcon1Style = useMemo(() => {
      return {
        left: propLeft2,
      };
    }, [propLeft2]);
  
    const rectangleIcon2Style = useMemo(() => {
      return {
        left: propLeft3,
      };
    }, [propLeft3]);
  
    const rectangleIcon3Style = useMemo(() => {
      return {
        left: propLeft4,
      };
    }, [propLeft4]);
  
    const rectangleIcon4Style = useMemo(() => {
      return {
        left: propLeft5,
      };
    }, [propLeft5]);
  
    const rectangleIcon5Style = useMemo(() => {
      return {
        left: propLeft6,
      };
    }, [propLeft6]);
  
    const rectangleIcon6Style = useMemo(() => {
      return {
        left: propLeft7,
      };
    }, [propLeft7]);
  
    const rectangleIcon7Style = useMemo(() => {
      return {
        left: propLeft8,
      };
    }, [propLeft8]);
  
    const rectangleIcon8Style = useMemo(() => {
      return {
        left: propLeft9,
      };
    }, [propLeft9]);
  
    const rectangleIcon9Style = useMemo(() => {
      return {
        left: propLeft10,
      };
    }, [propLeft10]);
  
    const rectangleIcon10Style = useMemo(() => {
      return {
        left: propLeft11,
      };
    }, [propLeft11]);
  
    const rectangleIcon11Style = useMemo(() => {
      return {
        left: propLeft12,
      };
    }, [propLeft12]);
  
    return (
      <div className="property-1frame-10" style={property1Frame10Style}>
        <img
          className="property-1frame-10-child"
          alt=""
          src="/rectangle-49@2x.png"
          style={rectangleIconStyle}
        />
        <img
          className="property-1frame-10-item"
          alt=""
          src="/rectangle-491@2x.png"
          style={rectangleIcon1Style}
        />
        <img
          className="property-1frame-10-inner"
          alt=""
          src="/rectangle-492@2x.png"
          style={rectangleIcon2Style}
        />
        <img
          className="property-1frame-10-child1"
          alt=""
          src="/rectangle-37@2x.png"
          style={rectangleIcon3Style}
        />
        <img
          className="property-1frame-10-child2"
          alt=""
          src="/rectangle-40@2x.png"
          style={rectangleIcon4Style}
        />
        <img
          className="property-1frame-10-child3"
          alt=""
          src="/rectangle-38@2x.png"
          style={rectangleIcon5Style}
        />
        <img
          className="property-1frame-10-child4"
          alt=""
          src="/rectangle-49@2x.png"
          style={rectangleIcon6Style}
        />
        <img
          className="property-1frame-10-child5"
          alt=""
          src="/rectangle-491@2x.png"
          style={rectangleIcon7Style}
        />
        <img
          className="property-1frame-10-child6"
          alt=""
          src="/rectangle-492@2x.png"
          style={rectangleIcon8Style}
        />
        <img
          className="property-1frame-10-child7"
          alt=""
          src="/rectangle-37@2x.png"
          style={rectangleIcon9Style}
        />
        <img
          className="property-1frame-10-child8"
          alt=""
          src="/rectangle-40@2x.png"
          style={rectangleIcon10Style}
        />
        <img
          className="property-1frame-10-child9"
          alt=""
          src="/rectangle-38@2x.png"
          style={rectangleIcon11Style}
        />
      </div>
    );
  };
  export default Property1Frame;
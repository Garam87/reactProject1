import { useState } from "react";

const ProductCard = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img
        src={isHovering ? item.imgHover : item.img}
        style={{ width: "100%", height: "auto", cursor: "pointer" }}
      />
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;

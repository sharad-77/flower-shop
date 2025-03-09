import React from "react";
import Button from "../ui/Button";

const FlowerCard = ({
  children,
  img,
  price,
  variant = "primary",
  size = "sm",
  className,
}) => {
  return (
    <div
      className={`bg-white w-70 h-auto rounded-md shadow-2xl p-3 ${className}`}
    >
      <div className="p-1">
        <img src={img} alt="" className="w-full h-full " />
        <p className="text-2xl w-auto p-1 mt-2">{children}</p>
        <div className="flex justify-between px-1 mt-6">
          <p className="text-gray-500 text-xl">{price}</p>
          <Button variant="secondry" size="md">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;

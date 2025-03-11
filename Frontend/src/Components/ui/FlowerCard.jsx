import React from "react";
import Button from "../ui/Button";

const FlowerCard = ({
  children,
  img,
  price,
  variant = "primary",
  size = "md",
  className,
}) => {
  return (
    <div
      className={`bg-white w-70 h-auto rounded-md shadow-2xl p-3 ${className} flex flex-col justify-between transition duration-300 hover:scale-105 hover:shadow-md`}
    >
      <div className="p-1 rounded-t-md">
        <img src={img} alt="" className="w-full h-full rounded-t-md" />
      </div>
      <div className="p-3">
        <p className="text-2xl font-bold">{children}</p>
        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-500 text-xl mr-4 md:mr-0">{price}</p>
          <Button variant="secondry" size={size}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;


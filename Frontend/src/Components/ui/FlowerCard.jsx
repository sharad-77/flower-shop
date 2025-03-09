import React from "react";
import Button from "../ui/Button"

const FlowerCard = ({children,img,price}) => {

    return(
    <div>
        <div>
            <img src={img} alt="" />
            <p>{children}</p>
            <p>{price}</p>
          <Button variant="secondry" size="sm">Browse</Button>
            </div>    
    </div>
    );
};

export default FlowerCard;
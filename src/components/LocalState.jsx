import React, { useState } from "react";

const FlowerShop = () => {
  const [roses, setRoses] = useState(100);

  const buyRose = () => {
    setRoses(roses + 1);
  };

  return (
    <div>
      <button onClick={buyRose}>Buy Rose</button>
      {roses}
    </div>
  );
};

export default FlowerShop;

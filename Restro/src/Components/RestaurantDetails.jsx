import { useState } from "react";
import React from "react";
import data from "../data.json";
import RestaurantList from "./RestaurantList";

const RestaurantDetails = () => {
  const [star, setStar] = useState("");
  const [cash, setCash] = useState("");
  const [price, setPrice] = useState("");
  const handleStar = (value) => {
    setStar(value);
  };
  const handleCash = (value) => {
    setCash(value);
  };
  const handlePrice = (value) => {
    setCash(value);
  };
  console.log("star",star);

  return (
    <div className="cont" style={{backgroundColor:"grey"}} >
      <div className="whole-container" style={{display:"flex",flexDirection:"row"}}>
        <div>
          <div className="">
            <h2>Rating</h2>
          </div>
          <div className="whole-cont" style={{display:"flex",flexDirection:"column",border:"1px solid blue"}}>
            <button onClick={() => handleStar(1)}>1 Star</button>
            <button onClick={() => handleStar(2)}>2 Star</button>
            <button onClick={() => handleStar(3)}>3 Star</button>
            <button onClick={() => handleStar(4)}>4 Star</button>
          </div>
        </div>
        <div className="whole-container1" style={{display:"flex",flexDirection:"column",border:"1px solid blue"}}>
          <div className="">
            <h2 >Payment Method</h2>
          </div>
          <div  className="whole-cont2" style={{display:"flex",flexDirection:"column",border:"1px solid blue"}} >
            <button onClick={() => handleCash("cash")}>Cash</button>
            <button onClick={() => handleCash("card")}>Card</button>
            <button onClick={() => handleCash("both")}>
              Both Cash and Card
            </button>
          </div>
          <div>
            <h2 className="whole-cont" style={{display:"flex",flexDirection:"column",border:"1px solid blue"}}>Price</h2>
            <div>
              <button onClick={() => handlePrice("HTL")}>High to low</button>
              <button onClick={() => handlePrice("LTH")}> low to high</button>
            </div>
          </div>
        </div>
      </div>

      {/* <Sorting handleStar={handleStar} handleCash={handleCash}></Sorting> */}

      <div className="whole-cont4" style={{display:"flex",flexDirection:"row",border:"1px solid blue",gap:"50px"}}>
        {data
          .filter((el) =>
           star ? el.rating >=star && el.rating <star + 1 : el
          //  if(star==1){
          //    return el.rating>=star && el.rating<star+1
          //  }else {
          //    el
          //  }
          )
          .filter((el) =>
           cash === "both"
              ? el.payment_methods.cash && el.payment_methods.card
              :cash === "cash"
              ? el.payment_methods.cash && !el.payment_methods.card
              :cash === "card"
              ? el.payment_methods.card && !el.payment_methods.cash
              : el
          )
          .sort((a, b) =>
            price=== "LTH"
              ? a.costForTwo - b.costForTwo
              : price=== "HTL"
              ? b.costForTwo - a.costForTwo
              : true
          )
          .map((el) => (
            <RestaurantList key={el.id} {...el} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;

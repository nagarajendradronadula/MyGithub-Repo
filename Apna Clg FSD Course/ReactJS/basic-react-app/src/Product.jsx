import "./Product.css";
import Price from "./Price.jsx";

export default function Product({ title, idx }) {
  // let isDiscount = price > 30000;
  // let styles = {backgroundColor: isDiscount ? "lightgreen" : "lightblue"};

  let oldPrice = ["12,495", "11,999", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["Intuitive surface", "Designed for iPad Pro & Latest Generations"],
    ["RGB KeyBoard & Mouse", "Braided Cables"],
    ["Wireless Mouse 2.4GHz", "500 Hrs Battery"],
  ];

  return (
    <div className="Product">
      <h2>{title}</h2>
      <li>{description[idx][0]}</li>
      <li>{description[idx][1]}</li>
      <br></br>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />

      {/* {price > 30000 ? <p>Discount 5%</p> : null} */}
      {/* {isDiscount && <p>Discount 5%</p>} */}
    </div>
  );
}

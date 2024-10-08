import { useState } from "react";

export default function LikeBtn() {
  let [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
    console.log(newVal);
  };

  // let clicked = () => {console.log("Clicked")};
  let likeStyle = {color: "red"};

  return (
    <p onClick={toggleLike}>
      {isLiked ? (<i className = "fa-solid fa-heart" style={likeStyle}></i>) : (<i className="fa-regular fa-heart"></i>)}
    </p>
  );
}

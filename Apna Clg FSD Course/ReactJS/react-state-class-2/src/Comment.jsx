import { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForm.jsx";

export default function Comment() {
  let [comment, setComment] = useState([
    {
      userName: "John",
      remarks: "This is a comment",
      rating: 5,
    },
  ]);

  let addNewComment = (newComment) => {
    setComment((currComment) => [...currComment, newComment]);
    console.log("Added new comment");
  };

  return (
    <div>
      <h3>All Comments</h3>
      {comment.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>{comment.remarks}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>(rating = {comment.rating})</span>
          <p>- {comment.userName}</p>
        </div>
      ))}
      <hr />
      <CommentForm addNewComment={addNewComment} />
    </div>
  );
}
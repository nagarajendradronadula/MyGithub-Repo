import { useState } from "react";
import { useFormik } from "formik";

const validate = values => {
    const errors = {};
    if(!values.userName) {
        errors.userName = "Please enter a username";
    }
    if(!values.remarks) {
        errors.remarks = "Please write a remark";
    }

    return errors;
}

export default function CommentForm({ addNewComment }) {
//   let [formData, setFormData] = useState({
//     userName: "",
//     remarks: "",
//     rating: 5,

const formik = useFormik({
    initialValues: {
        userName: "",
        remarks: "",
        rating: 5,
    },
    validate,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
    }
});

//   let handleInputChange = (event) => {
//     setFormData((currData) => {
//       return { ...currData, [event.target.name]: event.target.value };
//     });
//   };

//   let handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     addNewComment(formData);
//     setFormData({
//       userName: "",
//       remarks: "",
//       rating: 5,
//     });
//   };

  return (
    <div>
      <h3>Give a Comment!</h3>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input
          placeholder="userName"
          type="text"
          value={formik.values.userName}
          onChange={formik.handleChange}
          id="userName"
          name="userName"
        />
        {formik.errors.userName ? <p style={{color: "red"}}>{formik.errors.userName}</p> : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          placeholder="Write your comment here!"
          value={formik.values.remarks}
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        ></textarea>
        {formik.errors.remarks ? <p style={{color: "red"}}>{formik.errors.remarks}</p> : null}
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

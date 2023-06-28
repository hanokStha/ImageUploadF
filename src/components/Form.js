import React, { useState } from "react";
import axios from "axios";

const User = () => {
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    axios
      .post("http://localhost:8000/users/add", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePhoto = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="image" // Updated the name attribute
        onChange={handlePhoto}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default User;

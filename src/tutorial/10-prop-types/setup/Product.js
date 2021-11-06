import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ image, name, price }) => {
  console.log(image, name, price);
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name} />
      <h3>{name || "default name"}</h3>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.prototype = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: "default name",
//   price: 9.99,
//   image: defaultImage,
// };

export default Product;

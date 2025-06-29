import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Item = ({ product }) => {
  return (
    <div className="group relative">
      <Link to={`/products/${product.id}`}>
        <div
          onClick={window.scrollTo(0, 0)}
          className="aspect-h-1 aspect-w-1w-full overflow-hidden rounded-md bg-orange-200 lg:aspect-none group-hover:opacity-90 lg:h-80 h-96 shadow-4xl"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </Link>
      <div className="mt-5 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/products/${product.id}`}>
              <span aria-hidden="true" className=" inset-0">
                {product?.name}
              </span>
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${product?.new_price}
        </p>
      </div>
    </div>
  );
};
Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default Item;
